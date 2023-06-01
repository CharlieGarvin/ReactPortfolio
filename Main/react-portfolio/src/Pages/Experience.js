import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2016 - 2020"
                iconStyle={{background: "#3e497a, color: #fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        High School 
                    </h3>
                    <p>High School Deploma</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2022 - 2023"
                iconStyle={{background: "#3e497a, color: #fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                       University of Utah Bootcamp
                    </h3>
                    <h4>FullStack Developer Certificate</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Resume"
                iconStyle={{background: "#3e497a, color: #fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                       Here is my Resume!
                    </h3>
                    <h4><div><a href="https://docs.google.com/document/d/1XFf3IDAFdciPn56i9RNIbPjNeCEuzigeNrLY4G48kcA/edit?usp=sharing">Resume</a></div></h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;