import { Link, Route, Routes } from "react-router-dom";
import topPhoto from "../images-10.png";
export default function About(){
    return(
    <div class="contentwrap">
        <div className="topHolder">
            <img className="topImage" src={topPhoto} alt="Top" style={{width:"3300px"}}/>
            <div className="overlayText">About Us</div>
        </div>
        <h1>About FBLA-PBL</h1>
        <h3>Future Business Leaders of America - Phi Beta Lamda, Inc. (FBLA-PBL) is the largest student-run organization in the world. FBLA-PBL allows members to develop soft skills, network with business professionals, and succeed in academic competitions that prepare them for careers in business. The organization also organizes conferences, seminars, and workshops for both members and advisors, including the prestigious National Leadership Conference (NLC). </h3>
        <h1>About DBHS FBLA</h1>
        <h3>At Diamond Bar High School, FBLA is one of the largest organizations on campus, with over 100 members each year. In 2024, DBHS FBLA had 36 individuals compete at Nationals, with 3 individuals placing top ten at Nationals; the club hopes to build on this success in the 2024/25 season and for future years. ​</h3>
        <h1>E-Board</h1>
        <div class="side">
            <div>
                <h2>President of Internal Affairs: Madelyn Wong</h2>
            </div>
        </div>
        <div class="side">
            <div>
                <h2>President of External Affairs: Grace Wen</h2>
            </div>
        </div>
        <div class="side">
            <div>
                <h2>Vice President of Chapter Events: Katelyn Suen</h2>
            </div>
        </div>
        <div class="side">
            <div>
                <h2>Vice President of Communications: Claire Lee</h2>
            </div>
        </div>
        <div class="side">
            <div>
                <h2>Co-Vice President of Competitive Events: Aidan Hong</h2>
            </div>
        </div>
        <div class="side">
            <div>
                <h2>Co-Vice President of Competitive Events: Kelly Cho</h2>
            </div>
        </div>
        <div class="side">
            <div>
                <h2>Vice President of Finance: Emme Huang</h2>
            </div>
        </div>
        <div class="side">
            <div>
                <h2>Vice President of Projects: Maxwell Huang</h2>
            </div>
        </div>
    </div>
    );
}