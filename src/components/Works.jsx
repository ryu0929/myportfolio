import React from "react";
import SectionTemplate from './SectionTemplate';
import CardContainer from './CardContainer';
import Title from './Title';
import "../styles/Section.scss"

const Works = () => {

    const worksData = {
        classNameA: "section section--works",
        classNameB: "title title--works",
        text: "WORKS"
    }

    return (
        <SectionTemplate {...worksData}>
            <CardContainer />
        </SectionTemplate>
    )
}

export default Works