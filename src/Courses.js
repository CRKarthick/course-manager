import React, { useState, useEffect } from 'react';
import CoursesList from './CoursesList';
import { Link } from 'react-router-dom';
import { getCourses } from './api/courseApi';
import { getAuthors } from './api/authorApi';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCourses().then(res => setCourses(res));
        getAuthors().then(res => setAuthors(res));
    }, []);

    useEffect(() => {
        getCourses().then(res =>
            setCategories([...new Set(res.map(item => item.category))])
        );
        //    setCategories([...new Set(courses.map(item => item.category))]);
    }, [courses]);

    const handleChange = e => {
        setCourses(
            courses.filter(course => course.category === e.target.value)
        );
    };
    return (
        <>
            <div className='jumbotron'>
                <h1>Courses</h1>
                <div className='row'>
                    <div className='col'>
                        <Link to='/course' className='btn btn-primary mt-3'>
                            Add Course
                        </Link>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <select
                                className='form-control'
                                name='category'
                                id='category'
                                onChange={handleChange}
                            >
                                {categories.map(category => {
                                    return (
                                        <option key={category}>
                                            {category}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <CoursesList courses={courses} authors={authors} />
        </>
    );
};

export default Courses;
