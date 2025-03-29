import Theme from "./components/Theme";
import Navbar from "./components/Navbar2";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";
import PageNav from "./components/PageNav";
import pagesData from "./data/pages.json";
import ScrollToTop from "./components/ScrollToTop";

export default function CourseLayout() {
    const location = useLocation();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const foundCourse = pagesData.find(course =>
            course.url.some(pageUrl => location.pathname.startsWith(pageUrl))
        );
        setCourse(foundCourse || null);
    }, [location.pathname]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Theme>
                <MathJaxContext>
                    <Navbar course={course&&course.name} />
                    <Outlet />
                    <ScrollToTop/>
                    { course && course.url.length>1 && <PageNav pages={course.url} courseName={course.name} /> }
                </MathJaxContext>
            </Theme>
        </>
    );
}
