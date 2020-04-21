import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IProps {
    user: firebase.User | null,
    component: React.FC,
    [x:string]: any
}

const PrivateRoutes: React.FC<IProps> = ({
    user,
    component: Comp,
    ...rest
}) => {
    return <Route {...rest} component={(props: any)=>(
        user ? 
        // @ts-ignore 
        <Comp {...props} user={user}/>
        :
        <Redirect to="/signin"/>
    )}/>
};

export default PrivateRoutes;