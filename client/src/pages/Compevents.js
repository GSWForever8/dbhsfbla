import { Link, Route, Routes } from "react-router-dom";
import topPhoto from '../DSC07726.jpeg';
import cte from '../ctecourses.png';
import confused from '../confused.jpg';
import cal from '../678116-calendar-512.webp';
import list from '../vector-list-icon.jpg';
import folder from '../folder.png';
export default function CompEvents() {
    return (
        <div className="contentwrap">
            <div className="topHolder">
                        <img className="topImage" src={topPhoto} alt="Top"/>
                        <div className="overlayText">Competitive Events</div>
                    </div>
            <div className="side">
                <div>
                    <h1>About Competitive Events</h1>
                    <div className="contentwrap">
                        <h2>Prerequisites</h2>
                        <ul>
                            <li>MUST TAKE A CTE COURSE</li>
                            <li>CTE Course can be in person or virtual!</li>
                        </ul>
                        <h3>List of CTE Courses</h3>
                        <img className="Image"src={cte}/>
                    </div>
                    <div className="contentwrap">
                        <h2>Types of Events</h2>
                        <h3>Objective</h3>
                        <ul>
                            <li>100 Question Multiple Choice Test</li>
                            <li>50 Minutes Only</li>
                        </ul>
                        <h3>Production</h3>
                        <ul>
                            <li>1-2 Hour Presubmission Test at DBHS</li>
                            <li>Objective Portion at Competition</li>
                        </ul>
                        <h3>Case Study</h3>
                        <ul>
                            <li>Presentation on a Prompt</li>
                            <li>Objective Portion</li>
                        </ul>
                        <h3>Presentation</h3>
                        <ul>
                            <li>Presentation, Speech, or Interview</li>
                        </ul>
                    </div>
                    <div style={{height: "200px"}}></div>
                </div>
                <div>
                    <h1>Quick Links</h1>
                    <a href="https://dbhsfbla.onrender.com/#/compevents/resources">
                    <div className="icons">
                        <h3>Resource Folder</h3>
                        <img className="Image" src={folder} alt="Top"/>
                    </div>
                    </a>
                    <a href="https://docs.google.com/document/d/1_6vxyYp-j06TeXr3oHiee1hvgP1RUDZ2DJaJbXAJ9Dk/edit">
                        <div className="icons">
                        <h3>Which event should I do?</h3>
                        <img className="Image" src={confused} alt="Top"/>
                    </div>
                    </a>
                    <a href="https://calendar.google.com/calendar/u/0?cid=Y2E0MGFhNDg1NWE4ZTdhYjNmZDdjZmQ2NzRmM2E3N2EwMzJkM2JmNmUxOWMzNTYyYTFlMmQzOGMzZDdmYjU2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t">
                    <div className="icons">
                        <h3>Competition Calendar</h3>
                        <img className="Image" src={cal} alt="Top"/>
                    </div>
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/1ZUQkk7sUsLYyhehyBJESuUfJlG47R-51xyS3hy8gLaQ/edit?usp=sharing">
                    <div className="icons">
                        <h3>Competitive Events List</h3>
                        <img className="Image" src={list} alt="Top"/>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
