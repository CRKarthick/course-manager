import React from 'react';
import { Link } from 'react-router-dom';

const CoursesList = ({ courses, authors }) => {
    return (
        <table className='table table-bordered table-hover'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => {
                    const author = authors.find(
                        author => author.id === course.authorId
                    );
                    if (author) {
                        return (
                            <tr key={course.id}>
                                <td>
                                    <Link to={`/course/` + course.slug}>
                                        {course.title}
                                    </Link>
                                </td>
                                <td>{author.name}</td>
                                <td>{course.category}</td>
                            </tr>
                        );
                    }
                })}
            </tbody>
        </table>
    );
};

export default CoursesList;
