import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, img, details, time } = props.course;
    return (
        <div className='course'>
            <img src={img} alt="coding" />
            <div className="course-info">
                <h3 className='course-name'>{name}</h3>
                <p>{details}</p>
                <p>Time required: <b>{time}min</b></p>
            </div>
            <button className='btn'>Add to list</button>
        </div>
    );
};

export default Course;