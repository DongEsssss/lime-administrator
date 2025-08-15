import { createElement } from 'react';

import { NavigationItem } from '../Type/navigation';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import CategoryIcon from '@mui/icons-material/Category';
import NotificationsIcon from '@mui/icons-material/Notifications';


const navigation: NavigationItem[] = [
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: createElement(DashboardIcon),
    },
    {
        segment: 'user-management',
        title: 'User Management',
        icon: createElement(PeopleIcon),
    },
    {
        segment: 'messages-all',
        title: 'Messages (All)',
        icon: createElement(MessageIcon),
    },
    {
        segment: 'messages-categories',
        title: 'Messages (Categories)',
        icon: createElement(CategoryIcon),
    },
    {
        segment: 'announcements',
        title: 'Announcements',
        icon: createElement(NotificationsIcon),
    },
];

export default navigation;
