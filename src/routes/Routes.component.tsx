import React from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PATHS } from '../constants';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Chat from '../pages/Chat';
import Profile from '../pages/Profile';
import Client from '../pages/Client';
import Task from '../pages/Task';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { getUserLoggedIn } from '../redux/selectors';

const { DASHBOARD, HOME, SIGNIN, CHAT, PROFILE, CLIENT, TASK } = PATHS;
const { ROOT } = DASHBOARD;

const Routes = () => {
    const loggedIn = useSelector(state=>(getUserLoggedIn(state)));
    return (
        <Switch>
            <PrivateRoutes loggedIn={loggedIn} path={ROOT} exact component={Dashboard} />
            <PrivateRoutes loggedIn={loggedIn} path={CHAT} exact component={Chat} />
            <PrivateRoutes loggedIn={loggedIn} path={CLIENT} exact component={Client} />
            <PrivateRoutes loggedIn={loggedIn} path={PROFILE} exact component={Profile} />
            <PrivateRoutes loggedIn={loggedIn} path={TASK} exact component={Task} />
            <PublicRoutes loggedIn={loggedIn} restricted={true} path={SIGNIN} exact component={SignIn} />
            {/* <PublicRoutes loggedIn={loggedIn} restricted={true} path={SIGNUP} exact component={SignUp} /> */}
            <PublicRoutes loggedIn={loggedIn} restricted={false} path={HOME} exact component={Home} />
            {/* <PublicRoutes loggedIn={loggedIn} restricted={false} exact component={Error404} /> */}
        </Switch>
    )
}

export default Routes;
