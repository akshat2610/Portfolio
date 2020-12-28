import React, {useContext} from "react";
import "./Project.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Project() {
    const {isDark} = useContext(StyleContext)
    if(projects.viewProjects){
        return (
            <div id="project">
                <Fade bottom duration={1000} distance="20px">
                <div className="project-container" id="workproject">
                    <div>
                        <h1 className="project-heading">Projects</h1>
                        <div className="project-cards-div">
                        {projects.project.map((card) => {
                            return (
                                <ProjectCard
                                    isDark={isDark}
                                    cardInfo={{
                                        name: card.name,
                                        problemStatement: card.problemStatement,
                                        date: card.date,
                                        projectLogo: card.projectLogo,
                                        desc: card.desc,
                                        usage: card.usage,
                                        usageBullets: card.usageBullets,
                                        working: card.working,
                                        workingBullets: card.workingBullets,
                                        link: card.link
                                    }}
                                />
                            );
                        })}
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
    return null;
}
