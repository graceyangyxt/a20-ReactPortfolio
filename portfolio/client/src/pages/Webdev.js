import React from "react";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";
import projectcards from "../projectcards.json";

function Webdev() {
    return(
        <div>
            <Wrapper>
                <ProjectCard 
                image={projectcards[3].image}
                name={projectcards[3].name}
                href={projectcards[3].href}
                mypart={projectcards[3].mypart}
                 />
                <ProjectCard 
                image={projectcards[4].image}
                name={projectcards[4].name}
                href={projectcards[4].href}
                mypart={projectcards[4].mypart}
                />
                <ProjectCard 
                image={projectcards[5].image}
                name={projectcards[5].name}
                href={projectcards[5].href}
                mypart={projectcards[5].mypart}
                />
            </Wrapper>
        </div>
    );
}
export default Webdev;