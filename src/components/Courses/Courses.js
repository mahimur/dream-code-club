import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='container'>
            <div className='exercise-container'>
                <div className='exercise-info'>
                    <h1>Dream-Coding-Club</h1>
                    <h3>Select today's exercise</h3>
                </div>
                <div className='exercises'>
                    {
                        courses.map(course => <Course
                            course={course}
                            key={course.id}
                        ></Course>)
                    }
                </div>
            </div>
            <div className='exercise-details'>
                <h1>thias is cart</h1>
            </div>
        </div>
    );
};

export default Courses;