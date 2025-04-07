import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CourseLayout from "./CourseLayout.jsx";
import "./index.css";

import {
    RouterProvider,
    createBrowserRouter,
    Navigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Testing from "./pages/BoilerPlate.jsx";
import CourseList from "./pages/CourseList.jsx";
import BlogEditor from "./pages/BlogEditor.jsx";
import BlogEditorForm from "./pages/BlogEditorForm.jsx";
import { LimitSyllabus, LimitIntro, LimitApproach, LimitProperty, LimitEvaluation, LimitInf, LimitAtInf, LimitAtInf2 } from "./course/Limit.jsx";
import pagesData from "./data/pages.json";
import PageNotFound from "./404.jsx";

const getInitialRoute = (course) => {
    const courseData = pagesData.find((c) => c.name === course);
    if (!courseData) return `/BRI/course/${course}`;

    const savedProgress = parseInt(
        localStorage.getItem(`progress_${course}`),
        10
    );

    if (
        isNaN(savedProgress) ||
        savedProgress < 0 ||
        savedProgress >= courseData.url.length
    ) {
        return courseData.url[0];
    }

    return courseData.url[savedProgress];
};

const router = createBrowserRouter([
    {
        path: "/BRI/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "test", element: <Testing /> },
            { path: "course", element: <CourseList /> },
            { path: "editor-form", element: <BlogEditorForm /> },
            { path: "editor", element: <BlogEditor /> },
            { path: "course/limit", element: <LimitSyllabus /> },
        ],
    },
    {
        path: "/BRI/course/limit",
        element: <CourseLayout />,
        children: [
            // { path: "", element: <Navigate to={getInitialRoute("limit")} replace /> },
            { path: "intro", element: <LimitIntro /> },
            { path: "approach", element: <LimitApproach /> },
            { path: "property", element: <LimitProperty /> },
            { path: "evaluation", element: <LimitEvaluation /> },
            { path: "infinity", element: <LimitInf /> },
            { path: "atinfinity", element: <LimitAtInf /> },
            { path: "atinfinity2", element: <LimitAtInf2 /> },
        ],
    },
    {
        path: "/BRI/*",
        element: <PageNotFound />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
