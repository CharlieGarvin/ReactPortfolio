import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home"> 
        <div className="about">
            <h2> Hi, my name is Charlie</h2>
            <div className="prompt"> 
                <p>
                    I am a new FullStack Developer that has recently finished a coding bootcamp at the University of Utah. I enjoy working on the front-end and being able to design how sites and applications look.
                    I enjoy being able to use new libraries and get better with React and other front-end focused languages.
                </p>
                <LinkedInIcon />
                <EmailIcon />
                <GithubIcon />
            </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                    <span>I am a new FullStack Developer who has recently finished a bootcamp with the University of Utah. I have spent a fair amount of time working with Front-End
                        languages like HTML, CSS, and JS. I am looking for opportunities to increase my abilities and learn new skills in the field.
                    </span>
                </li>
                <li className="item">
                    <h2>Back-End</h2>
                    <span>The bootcamp I went through also taught of lots of back-end skills and languages some of those for example are: MySQL, NoSQL, JWT, and more.</span>
                </li>
                <li className="item">
                    <h2>Languages</h2>
                    <span> HTML, CSS, JS, Bootstrap, React, MySQL, NoSQL</span>
                </li>
            </ol>
        </div>
        </div>
    );
}

export default Home;