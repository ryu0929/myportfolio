import React from "react";
import SectionTemplate from './SectionTemplate';
import Profile from './Profile';
import "../styles/Section.scss"

const About = () => {

    const aboutData = {
        classNameA: "section section--about",
        classNameB: "title title--about",
        text: "ABOUT"
    }

    return (
        <SectionTemplate {...aboutData}>
            <Profile />
        </SectionTemplate>
    )
}

export default About