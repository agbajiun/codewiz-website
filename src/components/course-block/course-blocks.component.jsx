import React from 'react';

import CourseBlock from './course-block.component';
import './course-block.styles.scss';

const CourseBlocks = ({courses}) => {
    return (
        <div className="row">
            {/* Check if they are empty before making block for them  */}
            <CourseBlock classes={courses.coding} title={"coding"}/>
            <CourseBlock classes={courses.gaming} title={"gaming"}/>
            <CourseBlock classes={courses.robotics} title={"robotics"}/>
            <CourseBlock classes={courses.competitions} title={"competitions"}/>
        </div>
    );
};

export default CourseBlocks;
