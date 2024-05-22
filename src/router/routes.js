import React from 'react';
import AboutPage from '../pages/AboutPage';
import PostListPage from '../pages/PostListPage';
import PostPage from '../pages/PostPage';
import LoginPage from "../pages/Login/LoginPage";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
    { path: '/about', element: <AboutPage />, exact: true },
    { path: '/posts', element: <PostListPage />, exact: true },
    { path: '/posts/:id', element: <PostPage />, exact: true },
    { path: '/', element: <AboutPage />, exact: true },
    { path: '*', element: <Navigate to="/posts" replace />, exact: true },
];

export const publicRoutes = [
    { path: '/about', element: <AboutPage />, exact: true },
    { path: '/login', element: <LoginPage />, exact: true },
    { path: '/', element: <AboutPage />, exact: true },
    { path: '*', element: <Navigate to="/about" replace />, exact: true },
]