import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import { PATHS } from '../../constants';

const { CHATS, DASHBOARD, CLIENT, PROFILE } = PATHS;
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
        logo: <BarChartIcon/>
    },
    {
        name: 'Profile',
        link: PROFILE,
        logo: <PeopleIcon/>
    },
    {
        name: 'CHATS',
        link: CHATS,
        logo: <LayersIcon/>
    }
]