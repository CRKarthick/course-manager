import React, { useEffect, useState } from 'react';
import { saveCourse, getCourseBySlug } from './api/courseApi';
import { toast } from 'react-toastify';

const ManageCourse = props => {
    const [course, setCourse] = useState({
        title: '',
        authorId: null,
        category: '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const slug = props.match.params.slug;
        slug && getCourseBySlug(slug).then(res => setCourse(res));
    }, [props.match.params.slug]);

    const handleChange = e => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const formIsValid = () => {
        const _errors = {};

        if (!course.title) _errors.title = 'Title is Required';
        if (!course.authorId) _errors.authorId = 'Author ID is Required';
        if (!course.category) _errors.category = 'Category is Required';

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!formIsValid()) return;
        saveCourse(course).then(() => {
            props.history.push('/courses');
            toast.success('Course Saved', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        });

        //    console.log(e);
    };
    return (
        <>
            <div className='jumbotron'>
                <h1>Manage Course</h1>
            </div>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input
                            type='text'
                            className='form-control'
                            id='title'
                            name='title'
                            value={course.title}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.title && (
                        <div className='alert alert-danger'>{errors.title}</div>
                    )}
                    <div className='form-group'>
                        <label htmlFor='authorId'>Author ID</label>
                        <select
                            className='form-control'
                            id='authorId'
                            name='authorId'
                            value={course.authorId || ''}
                            onChange={handleChange}
                        >
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    {errors.authorId && (
                        <div className='alert alert-danger'>
                            {errors.authorId}
                        </div>
                    )}
                    <div className='form-group'>
                        <label htmlFor='category'>Category</label>
                        <input
                            type='text'
                            className='form-control'
                            id='category'
                            name='category'
                            value={course.category}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.category && (
                        <div className='alert alert-danger'>
                            {errors.category}
                        </div>
                    )}
                    <button type='submit' className='btn btn-primary mb-2'>
                        Save
                    </button>
                </form>
            </div>
        </>
    );
};

export default ManageCourse;
