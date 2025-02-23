import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Auth } from 'aws-amplify';

import Routes from './routes';
import Loading from 'src/components/Loading';

const App: React.FC = () => {
    
    const loading = useSelector((state: any) => state.userState.loading)
    if(loading)return <Loading/>
    return (
        <Router >
            <Routes />
        </Router>
    )
}

export default App;