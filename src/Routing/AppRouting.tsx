import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '../Frame/MainLayout/MainLayout';

import Dashboard from '../Page/Dashboard/Dashboard';
import UserManagement from '../Page/User/UserManagement';
import MessageAll from '../Page/MessageAll/MessageAll';
import MessageCategory from '../Page/MessageCategory/MessageCategory';
import Announcement from '../Page/Announcement/Announcement';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                {/* 홈 */}
                <Route index element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* 유저 관리 */}
                <Route path="/user-management" element={<UserManagement />} />

                {/* 메시지 */}
                <Route path="/messages-all" element={<MessageAll />} />
                <Route path="/messages-categories" element={<MessageCategory />} />

                {/* 공지사항 */}
                <Route path="/announcements" element={<Announcement />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
