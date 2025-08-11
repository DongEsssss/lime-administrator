import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../Frame/MainLayout/MainLayout';
import Home from '../Page/home/home';
const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;