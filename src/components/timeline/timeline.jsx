import React from "react";
import "./timeline.css";
import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
    return (

        <div className="timelines">
            <h1>Our Service Process</h1>
            <VerticalTimeline>
                {
                    timelineElements.map(element => {
                        let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== ""


                        return (

<>
                                <VerticalTimelineElement
                                    key={element.key}
                                    date={element.date}
                                    dateClassName="date"
                                >
                                    <div className="divimage">
                                        <h3 className="vertical-timeline-element-title">
                                            {element.title}
                                        </h3>
                                        {/* <h5 className="vertical-timeline-element-subtitle">
                                            {element.location}
                                        </h5> */}
                                        <p id="description" >
                                            {element.description}
                                        </p>

                                    </div>
                                </VerticalTimelineElement>
                                         
                            </>
                        )
                    })
                }
            </VerticalTimeline>

        </div>
    )
}

export default Timeline;