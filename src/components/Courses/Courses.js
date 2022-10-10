import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import SideBar from '../SideBar/SideBar';
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
                    <div className='header-title'>
                        <FontAwesomeIcon icon={faCode} className='header-icon'></FontAwesomeIcon>
                        <h1>Dream-Coding-Club</h1>
                    </div>
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
                <SideBar></SideBar>
            </div>
        </div>
    );
};

export default Courses;