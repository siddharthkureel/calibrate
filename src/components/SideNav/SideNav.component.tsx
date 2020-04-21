import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

import { PATHS } from '../../constants';

const { CHATS, DASHBOARD, CLIENT, PROFILE } = PATHS;
const { ROOT } = DASHBOARD;

interface IProps extends RouteComponentProps<any>, React.Props<any> {
}

const SideNav: React.FC<IProps> = (props) =>{
    const { push } = props.history;
    return(
        <List>
            <ListItem button onClick={()=>push(ROOT)}>
                <ListItemIcon>
                <DashboardIcon />
                </ListItemIcon>
            <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={()=>push(CLIENT)}>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Client" />
            </ListItem>
            <ListItem button onClick={()=>push(PROFILE)}>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={()=>push(CHATS)}>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Chats" />
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
            </ListItem>
        </List>
    )
}

export default SideNav;