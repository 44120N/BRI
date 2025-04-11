import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CourseLayout from "./CourseLayout.jsx";
import ExerciseLayout from "./ExerciseLayout.jsx";
import "./index.css";

import {
    RouterProvider,
    createBrowserRouter,
    Navigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Testing from "./pages/BoilerPlate.jsx";
import CourseList from "./pages/CourseList.jsx";
import ExerciseList from "./pages/ExerciseList.jsx";
import BlogEditor from "./pages/BlogEditor.jsx";
import BlogEditorForm from "./pages/BlogEditorForm.jsx";
import {
    LimitSyllabus,
    LimitIntro,
    LimitApproach,
    LimitProperty,
    LimitEvaluation,
    LimitInf,
    LimitAtInf,
    LimitAtInf2,
} from "./course/Limit.jsx";
import * as GK from "./exercise/GasKinetics.jsx";
import PageNotFound from "./404.jsx";
import ComingSoon from "./ComingSoon.jsx";

export const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "test", element: <Testing /> },
            { path: "course", element: <CourseList /> },
            { path: "exercise", element: <ExerciseList /> },
            { path: "editor-form", element: <BlogEditorForm /> },
            { path: "editor", element: <BlogEditor /> },
            { path: "course/limit", element: <LimitSyllabus /> },
        ],
    },
    {
        path: "/comingsoon",
        element: <ComingSoon />,
    },
    {
        path: "/course/limit",
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
        path: "/exercise/gas-kinetics",
        element: <ExerciseLayout />,
        children: [
            { path: "1", element: <GK.GasKinetics1 /> },
            { path: "2", element: <GK.GasKinetics2 /> },
            { path: "3", element: <GK.GasKinetics3 /> },
            { path: "4", element: <GK.GasKinetics4 /> },
            { path: "5", element: <GK.GasKinetics5 /> },
            { path: "6", element: <GK.GasKinetics6 /> },
        ],
    },
    {
        path: "/exercise/trigonometry",
        element: <ExerciseLayout />,
        children: [
            { path: "1", element: <GK.GasKinetics1 /> },
            { path: "2", element: <GK.GasKinetics2 /> },
            { path: "3", element: <GK.GasKinetics3 /> },
            { path: "4", element: <GK.GasKinetics4 /> },
            { path: "5", element: <GK.GasKinetics5 /> },
            { path: "6", element: <GK.GasKinetics6 /> },
        ],
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
