import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
export default function Contact(){
    return(
    <div class="contentwrap">
        <div class="stuff">
        <div className="topHolder">
            <h1>Get in Touch!</h1>
        </div>
        <div className="pad">
        <table>
            <tr className="header">
                <th>Topic</th>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
            </tr>
            <tr>
                <td>Competitive Events+Website Issues</td>
                <td>Aidan Hong</td>
                <td><a href="mailto:aidanhong8@gmail.com">aidanhong8@gmail.com</a></td>
                <td>Co-VP of Competitive Events</td>
            </tr>
            <tr>
                <td>Competitive Events</td>
                <td>Kelly Cho</td>
                <td><a href="mailto:kellycho2008@gmail.com">kellycho2008@gmail.com</a></td>
                <td>Co-VP of Competitive Events</td>
            </tr>
            <tr>
                <td>Communications</td>
                <td>Claire Lee</td>
                <td><a href="mailto: claireelisabethlee@gmail.com">claireelisabethlee@gmail.com</a></td>
                <td>VP of Communications</td>
            </tr>
            <tr>
                <td>Chapter Events</td>
                <td>Katelyn Suen</td>
                <td><a href="mailto: katelynsuen@gmail.com">katelynsuen@gmail.com</a></td>
                <td>VP of Chapter Events</td>
            </tr>
            <tr>
                <td>Projects+Community Service</td>
                <td>Maxwell Huang</td>
                <td><a href="mailto: maxhuang2008@gmail.com">maxhuang2008@gmail.com</a></td>
                <td>VP of Projects</td>
            </tr>
            <tr>
                <td>Sponsorship/Finance</td>
                <td>Emme Huang</td>
                <td><a href="mailto: huangemme@gmail.com">huangemme@gmail.com</a></td>
                <td>VP of Finance</td>
            </tr>
            <tr>
                <td>External Affairs</td>
                <td>Grace Wen</td>
                <td><a href="mailto: gracewen5280@gmail.com">gracewen5280@gmail.com</a></td>
                <td>President of External Affairs</td>
            </tr>
            <tr>
                <td>Internal Affairs</td>
                <td>Maddie Wong</td>
                <td><a href="mailto: maddieayumi@gmail.com">maddieayumi@gmail.com</a></td>
                <td>President of Internal Affairs</td>
            </tr>
            <tr>
                <td>Advisor</td>
                <td>Mr. Pierce</td>
                <td><a href="mailto: jpierce@wvusd.org">jpierce@wvusd.org</a></td>
                <td>Advisor</td>
            </tr>
            <tr>
                <td>Advisor</td>
                <td>Mrs. Morales</td>
                <td><a href="mailto: lmorales@wvusd.org">lmorales@wvusd.org</a></td>
                <td>Advisor</td>
            </tr>
            <tr>
                <td>Other</td>
                <td></td>
                <td><a href="mailto: dbhsfbla@gmail.com">dbhsfbla@gmail.com</a></td>
                <td></td>
            </tr>
        </table>
        </div>
        </div>
    </div>
    );
}