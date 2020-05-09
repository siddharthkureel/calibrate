import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IProps {
    loggedIn?: boolean
    component: React.FC,
    [x:string]: any
}

const PrivateRoutes: React.FC<IProps> = ({
    loggedIn,
    component: Comp,
    ...rest
}) => {
    return <Route {...rest} component={(props: any)=>(
        loggedIn ? 
        // @ts-ignore 
        <Comp {...props}/>
        :
        <Redirect to="/signin"/>
    )}/>
};

export default PrivateRoutes;