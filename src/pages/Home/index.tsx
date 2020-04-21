import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            Hello
            <Link to='/dashboard'>dashboard</Link>
        </div>
    )
}

export default Home;
