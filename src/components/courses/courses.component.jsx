import React from 'react';

import './courses.styles.scss';
import CourseBlocks from '../course-block/course-blocks.component';

class Courses extends React.Component {
    constructor(){
        super();

        let codewizPrograms = [
            {
            id: 6,
            courses:
                {
                coding: ["Tynker"],
                gaming: null,
                robotics: ["WeDO"],
                electronics: null,
                competitions: ["FLL Jr"]
                }
            },
            {
            id: 7,
            courses:
                {
                coding: ["Tynker - drag n drop/scratch", "Android apps"],
                gaming: null,
                robotics: ["WeDO"],
                electronics: ["Microbits"],
                competitions: ["FLL Jr"]
                }
            },
            {
            id: 8,
            courses:
                {
                coding: ["Tynker", "Codesters (drag n drop python)", "Android apps"],
                gaming: ["Minecraft"],
                robotics: ["WeDO"],
                electronics: ["Microbits"],
                competitions: ["FLL Jr"]
                }
            },
            {
            id: 9,
            courses:
                {
                coding: ["Codesters", "Codecombat (game based python)", "Android apps"],
                gaming: ["Minecraft"],
                robotics: ["Mindstorms"],
                electronics: ["Microbits"],
                competitions: ["FLL"]
                }
            },
            {
            id: 10,
            courses:
                {
                coding: ["Codesters", "Codecombat", "Arcade", "HTML/CSS", "Python", "Animations w/ processing"],
                gaming: ["Roblox", "Unity"],
                robotics: ["Mindstorms"],
                electronics: ["Arduino"],
                competitions: ["FLL", "Technovation"]
                }
            },
            {
            id: 11,
            courses:
                {
                coding: ["Codesters", "Codecombat", "HTML/CSS", "Python", "Animations w/ processing"],
                gaming: ["Roblox", "Unity"],
                robotics: ["Mindstorms"],
                electronics: ["Arduino"],
                competitions: ["FLL", "Technovation"]
                }
            },
            {
            id: 12,
            courses:
                {
                coding: ["Codecombat", "Javascript", "Java", "Greenfoot", "Animations w/ processing"],
                gaming: ["Unity"],
                robotics: ["Mindstorms"],
                electronics: ["Arduino"],
                competitions: ["FLL", "Technovation"]
                }
            },
            {
            id: 13,
            courses:
                {
                coding: ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations w/ processing"],
                gaming: ["Unity"],
                robotics: ["Mindstorms"],
                electronics: ["Arduino"],
                competitions: ["FLL", "Technovation"]
                }
            },
            {
            id: 14,
            courses:
                {
                coding: ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations w/ processing"],
                gaming: ["Unity"],
                robotics: ["Mindstorms"],
                electronics: null,
                competitions: ["FLL", "Technovation"]
                }
            },
            {
            id: 15,
            courses:
                {
                coding: ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations w/ processing"],
                gaming: ["Unity"],
                robotics: null,
                electronics: null,
                competitions: ["Technovation"]
                }
            },
            {
            id: 16,
            courses:
                {
                coding: ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations w/ processing"],
                gaming: ["Unity"],
                robotics: null,
                electronics: null,
                competitions: ["Technovation"]
                }
            },
            {
            id: 17,
            courses:
                {
                coding: ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations w/ processing"],
                gaming: ["Unity"],
                robotics: null,
                electronics: null,
                competitions: ["Technovation"]
                }
            }
        ];

        let selectedAgeCourses = [];

        let selectedTitle = "";

        this.state = {
            value: '6',
            programs: codewizPrograms,
            courses: [],
            selectedTitle: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.showAge = this.showAge.bind(this);
        this.findCourses = this.findCourses.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    showAge () {
        let courses = this.state.programs;
        let selectedAge = parseInt(this.state.value);
        let selectedCourse = [];
        for(let i=0; i<courses.length; i++){
            if(courses[i].id === selectedAge){
                console.log("Found the age group! ", courses[i].id);
                this.selectedAgeCourses = courses[i].courses;
                //selectedCourse = courses[i].courses;
                break;
            }
        }
        console.log("Found the age appropriate! ", this.selectedAgeCourses);
    }

    findCourses (courses) {
        console.log("Found the courses! ", courses);
    }
    render() {
        return (
            <div className="center">
                <div className="row select-student-age">
                    <select id="select-age" className="form-control col-md-10" value={this.state.value} onChange={this.handleChange}>
                        {this.state.programs.map((program) => <option key={program.id} value={program.id}>{program.id}</option>)}
                    </select>
                    {/* <input className="btn orange-button col-md-2" id="start" type="submit" value="START"/> */}
                    <button className="btn orange-button col-md-2" id="start" onClick={this.showAge()}>START</button>
                </div>
                
                <CourseBlocks courses={this.selectedAgeCourses}/>
            </div>
                    
        );
    }
}

export default Courses;

