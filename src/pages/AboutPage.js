import React from "react";
import Story from "../components/StorySection/Story";
import Stats from "../components/Stats/Stats";
import Service from "../components/Services/Service";
import Founder from "../components/Founder/Founder"



const About = () => {
    return (
        <div>

            <Story />
            <Stats />
            <Founder />
            <Service />
        </div>
    );
};

export default About;