import React from "react";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";
import projectcards from "../projectcards.json";

function Webdes() {
    return(
        <div>
            <Wrapper>
                <ProjectCard 
                image={projectcards[0].image}
                name={projectcards[0].name}
                href={projectcards[0].href}
                mypart={projectcards[0].mypart}
                 />
                <ProjectCard 
                image={projectcards[1].image}
                name={projectcards[1].name}
                href={projectcards[1].href}
                mypart={projectcards[1].mypart}
                />
                <ProjectCard 
                image={projectcards[2].image}
                name={projectcards[2].name}
                href={projectcards[2].href}
                mypart={projectcards[2].mypart}
                />
            </Wrapper>
        </div>
    );
}
export default Webdes;