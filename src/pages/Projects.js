import { Link, Route, Routes } from "react-router-dom";
import topPhoto from "../FBLA-VBC-Header-scaled.webp";
import fl from "../images-3.png";
import green from "../eco.jpg";
import leader from "../860454.png";
import pro from "../professional.png";
import shake from "../shake.jpg";
import gov from "../gov.png";
import fund from "../fund.png";
import lfc from "../l4c.jpeg";
import md from "../md.png";
import ae from "../ae.jpeg";
import report from "../3280890.png";
import business from "../icon.png";
import yis from "../images-3.jpeg";
export default function Projects(){
    return(
    <div class="contentwrap">
        <div className="topHolder">
            <img className="topImage" src={topPhoto} alt="Top"/>
            <div className="overlayText">Projects</div>
        </div>
        <div className="side">
            <div>
                <h1>About Projects</h1>
                <p>Projects typically consist of 2 types: individual projects and chapter projects. Anyone can complete an individual project!</p>
                <h2>Individual Projects</h2>
                <p>4 individual projects</p>
                <ul>
                    <li>Financial Literacy</li>
                    <li>Green Initiative</li>
                    <li>Leaders in Action</li>
                    <li>Professional Profile</li>
                </ul>
                <p>All of them can earn you recognition at SLC!</p>
                <h2>Chapter Projects</h2>
                <p>Completed by our chapter officers</p>
                <p>3 chapter projects</p>
                <ul>
                    <li>Adopt-a-Chapter</li>
                    <li>Government Awareness</li>
                    <li>Community Fundraising</li>
                </ul>
                <p>Also earns recognition at SLC!</p>
                <div style={{height: "100px"}}></div>
                <h1>Chapter Projects</h1>
                <div className="quicklinks">
                    <div>
                        <h3>Adopt a Chapter</h3>
                        <img className="Image" src={shake}/>
                    </div>
                    <div>
                        <h3>Government Awareness</h3>
                        <img className="Image" src={gov}/>
                    </div>
                    <div>
                        <h3>Community Fundraising</h3>
                        <img className="Image" src={fund}/>
                    </div>
                </div>
                <div style={{height: "100px"}}></div>
                <h1>FBLA Programs</h1>
                <div className="quicklinks">
                    <div>
                        <h3>Lead4Change</h3>
                        <img className="Image" src={lfc}/>
                    </div>
                    <div>
                        <h3>Alzheimers Walk</h3>
                        <img className="Image" src={md}/>
                    </div>
                    <div>
                        <h3>Young Investors Society</h3>
                        <img style={{height: "300px"}}className="Image" src={yis}/>
                    </div>
                </div>
                <div style={{height: "100px"}}></div>
                <h1>Competitive Projects</h1>
                <div className="quicklinks">
                    <div>
                        <h3>American Enterprise Project</h3>
                        <img className="Image" src={ae}/>
                    </div>
                    <div>
                        <h3>Community Service Project</h3>
                        <img className="Image" src={report}/>
                    </div>
                    <div>
                        <h3 class="center">Partnership with Business</h3>
                        <img className="Image" src={business}/>
                    </div>
                </div>
            </div>
            <div>
                <h1>Individual Projects</h1>
                <div className="icons">
                        <h3>Financial Literacy</h3>
                        <img className="Image" src={fl} alt="Top"/>
                    </div>
                    <div className="icons">
                        <h3>Green Initiative</h3>
                        <img className="Image" src={green} alt="Top"/>
                    </div>
                    <div className="icons">
                        <h3>Leaders in Action</h3>
                        <img className="Image" src={leader} alt="Top"/>
                    </div>
                    <div className="icons">
                        <h3>Professional Profile</h3>
                        <img className="Image" src={pro} alt="Top"/>
                    </div>
                    <div style={{height: "810px"}}></div>
            </div>
        </div>
    </div>
    );
}