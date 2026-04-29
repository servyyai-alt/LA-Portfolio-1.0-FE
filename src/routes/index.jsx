import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));

export const routes = [
    { path: "/", element: Home },
    { path: "/projects", element: Projects },
    { path: "/admin", element: AdminDashboard },
];
