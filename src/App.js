import React from 'react';
import Header from './common/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Courses from './Courses';
import About from './About';
import PageNotFound from './PageNotFound';
import ManageCourse from './ManageCourse';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <Router>
            {/* Header */}
            <Header />
            <ToastContainer
                position='top-right'
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
            <Switch>
                {/* Home */}
                <Route exact path='/' component={Home} />
                {/* Courses */}
                <Route path='/courses' component={Courses} />
                {/* About */}
                <Route path='/about' component={About} />
                {/* Edit Course */}
                <Route path='/course/:slug' component={ManageCourse} />
                {/* Add Course */}
                <Route path='/course' component={ManageCourse} />
                {/* 404 Page Not Found */}
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    );
};

export default App;
