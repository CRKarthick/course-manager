import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='jumbotron'>
            <h1>Home Page</h1>
            <Link to='/about' className='btn btn-primary mt-3'>
                About
            </Link>
        </div>
    );
};

export default Home;
