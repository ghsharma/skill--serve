import React from "react";
import "./timeline.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const Timeline = () => {
    let workIConStyles = {background:"#06D6A0"};
    let schoolIConStyles = {background:"#06D6A0"};
    return (

        <div className="timelines">
        <h1>timeline head</h1>
        <VerticalTimeline>
            {
                timelineElements.map(element => {
                    let isWorkIcon = element.icon == "work";

                    return (
                        <VerticalTimelineElement 
                        key = {element.key}
                        date = {element.date}
                        dateClassName="date"
                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        >

                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
      
        </div>       
    )
}

export default Timeline;