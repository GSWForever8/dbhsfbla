import { Link, Route, Routes } from "react-router-dom";
import topPhoto from "../DSC07108.jpeg";
import aboutPhoto from "../oat.JPG";
import compPhoto from "../comp.JPG";
import projPhoto from "../proj.JPG";
import qaPhoto from "../images.png";
import contactPhoto from "../images-2.jpeg";
import fbla from "../fbla.png";
export default function Home(){
    return(
    <div class="contentwrap center">
        <div className="topHolder">
            <img className="topImage" src={topPhoto} alt="Top"/>
            <div className="overlayText-small">WELCOME TO DBHS FBLA</div>
        </div>
        <div class="quicklinks">
            <Link to="/about"><div className="icons">
                <h3>About Us</h3>
                <img className="Image" src={aboutPhoto} alt="Top"/>
            </div>
            </Link>
            <Link to="/compevents">
            <div className="icons">
                <h3>Comp Events</h3>
                <img className="Image" src={compPhoto} alt="Top"/>
            </div>
            </Link>
            <Link to="/projects">
            <div className="icons">
                <h3>Projects</h3>
                <img className="Image" src={projPhoto} alt="Top"/>
            </div>
            </Link>
            <Link to="/qa">
            <div className="icons">
                <h3>Q&A</h3>
                <img className="Image" src={qaPhoto} alt="Top" style={{width: "110%"}}/>
            </div>
            </Link>
            <Link to="/contact">
            <div className="icons">
                <h3>Contact Us</h3>
                <img className="Image" src={contactPhoto} alt="Top" style={{width: "110%"}}/>
            </div>
            </Link>
            <div className="icons">
                <img className="Image" src={fbla} alt="Top"/>
            </div>
        </div>
    </div>
    );
}