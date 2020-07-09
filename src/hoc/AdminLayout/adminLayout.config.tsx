import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChatIcon from '@material-ui/icons/Chat';
import KitchenIcon from '@material-ui/icons/Kitchen';

import { PATHS } from '../../constants';

const { CHAT, DASHBOARD, CLIENT, PROFILE, TASK, NUTRITION } = PATHS;
const { ROOT } = DASHBOARD;

export const SideNavData = [
    {
        name: 'Dashboard',
        link: ROOT,
        logo: <DashboardIcon/>
    },
    {
        name: 'Clients',
        link: CLIENT,
        logo: <PeopleIcon/>
    },
    {
        name: 'Task',
        link: TASK,
        logo: <AssignmentIcon/>
    },
    {
        name: 'Chat',
        link: CHAT,
        logo: <ChatIcon/>
    },
    {
        name: 'Nutrition',
        link: NUTRITION,
        logo: <KitchenIcon/>
    },
    {
        name: 'Profile',
        link: PROFILE,
        logo: <AccountBoxIcon/>
    }
]