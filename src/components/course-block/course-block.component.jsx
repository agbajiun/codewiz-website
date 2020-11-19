import React from 'react';

import CourseBlockDropDown from './course-block-dropdown.component';
import './course-block.styles.scss';

const CourseBlock = ({classes, title}) => {
     let upperCaseTitle = title.toUpperCase();
     let selectid = "select"+title;
     let startButton = title+"-start";
     var classList = [];
    if(classes !== null){
        classes.forEach(function(element) {
            classList.push({ label:element, value: element, id: element })
            console.log("classList ", classList);
        });
    }
    return (
        <div id={title} className="col">
            <div className="course">
                <div className="course-img">
                    <img src="" alt={title}/>
                </div>
                <h4 className="cw-dark-blue">{upperCaseTitle}</h4>
                <select id={selectid} className="form-control form-control-md">
                    {classList.map((singleclass) => <option key={singleclass.id} value={singleclass.value}>{singleclass.label}</option>)}
                </select>
                <button id={startButton} className="btn orange-button course-btn">SEE DETAILS</button>
            </div>
        </div>
        // <div>
        // //     {classes.map((reptile) => (
        // //         <p key={reptile}>{reptile}</p>
        // //     ))}
        // // </div>
    );
};

export default CourseBlock;
