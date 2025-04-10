import { Stack } from "@mui/material";
import Theme from "./components/Theme";
import { Navbar3 } from "./components/Navbar";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";
import { PageNav2 } from "./components/PageNav";
import pagesData from "./data/pages.json";
import ScrollToTop from "./components/ScrollToTop";

export default function ExerciseLayout() {
    const location = useLocation();
    const [exercise, setExercise] = useState(null);

    useEffect(() => {
        const foundExercise = pagesData.find(exercise =>
            exercise.url.some(pageUrl => location.pathname.startsWith(pageUrl))
        );
        setExercise(foundExercise || null);
    }, [location.pathname]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Stack sx={{minHeight: '100vh'}}>
                <Theme>
                    <MathJaxContext>
                        <Navbar3 exercise={exercise&&exercise.name} />
                        <Stack flexGrow={1}>
                            <Outlet />
                        </Stack>
                        <ScrollToTop/>
                        { exercise && exercise.url.length>1 && <PageNav2 pages={exercise.url} exerciseName={exercise.name} /> }
                    </MathJaxContext>
                </Theme>
            </Stack>
        </>
    );
}
