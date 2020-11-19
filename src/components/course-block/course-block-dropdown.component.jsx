import React from 'react';

import './course-block.styles.scss';

const CourseBlockDropDown = ({selectid, options}) => {
    return (
        <select id={selectid} className="form-control form-control-md">
            {options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
    );
};

export default CourseBlockDropDown;
