import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));

export const routes = [
    { path: "/", element: Home },
    { path: "/projects", element: Projects },
];