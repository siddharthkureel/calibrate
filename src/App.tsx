import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Routes from './routes';
import Loading from 'src/components/Loading';

const App: React.FC = () => {
    const loading = useSelector((state: any) => state.userStatus.loading)
    if(loading)return <Loading/>
    return (
        <Router >
            <Routes />
        </Router>
    )
}

export default App;