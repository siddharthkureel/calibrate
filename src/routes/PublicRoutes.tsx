import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IProps {
    component: React.FC,
    loggedIn: boolean,
    restricted: boolean,
    [x:string]: any
}


const PublicRoutes: React.FC<IProps>  = ({
    loggedIn,
    component: Comp,
    ...rest
}) => {
    return <Route {...rest} component={(props: JSX.IntrinsicAttributes & { children?: React.ReactNode; })=>(
        rest.restricted ?
            ( loggedIn ?
                <Redirect to="/dashboard"/>
                :
                // @ts-ignore 
                <Comp {...props}/>
            )
        :
        // @ts-ignore 
        <Comp {...props}/>
    )}/>
};

export default PublicRoutes;