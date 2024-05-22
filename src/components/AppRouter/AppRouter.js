import "./styles/App.css";
import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import PostPage from "../../pages/PostPage";
import PostListPage from "../../pages/PostListPage";

function AppRouter() {

    return (
        <Routes>
            <Route path="/posts" element={<PostListPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route exact path="/posts/:id" element={<PostPage />} />
            <Route path="*" element={<Navigate to="/posts" replace />} />
        </Routes>
    );
}

export default AppRouter;
