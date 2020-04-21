import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IProps {
    user: firebase.User | null,
    component: React.FC,
    restricted: boolean,
    [x:string]: any
}


const PublicRoutes: React.FC<IProps>  = ({
    user,
    component: Comp,
    ...rest
}) => {
    return <Route {...rest} component={(props: JSX.IntrinsicAttributes & { children?: React.ReactNode; })=>(
        rest.restricted ?
            ( user ?
                <Redirect to="/dashboard"/>
                :
                // @ts-ignore 
                <Comp {...props} user={user}/>
            )
        :
        // @ts-ignore 
        <Comp {...props} user={user}/>
    )}/>
};

export default PublicRoutes;