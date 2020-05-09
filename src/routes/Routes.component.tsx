import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';

import { PATHS } from '../constants';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Chats from '../pages/Chats';
import Profile from '../pages/Profile';
import Client from '../pages/Client';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const { DASHBOARD, HOME, SIGNIN, CHATS, PROFILE, CLIENT } = PATHS;
const { ROOT } = DASHBOARD;

type Props = {
    loggedIn?: boolean
}

const Routes = ( props: Props) => {
    
    return (
        <Switch>
            <PrivateRoutes {...props} path={ROOT} exact component={Dashboard} />
            <PrivateRoutes {...props} path={CHATS} exact component={Chats} />
            <PrivateRoutes {...props} path={CLIENT} exact component={Client} />
            <PrivateRoutes {...props} path={PROFILE} exact component={Profile} />
            <PublicRoutes {...props} restricted={true} path={SIGNIN} exact component={SignIn} />
            {/* <PublicRoutes {...props} restricted={true} path={SIGNUP} exact component={SignUp} /> */}
            <PublicRoutes {...props} restricted={false} path={HOME} exact component={Home} />
            {/* <PublicRoutes {...props} restricted={false} exact component={Error404} /> */}
        </Switch>
    )
}

export default Routes;
