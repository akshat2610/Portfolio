import React, {useContext} from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
    const {isDark} = useContext(StyleContext)
    if(educationInfo.viewEducation){
        return (
            <div id="education">
                <Fade bottom duration={1000} distance="20px">
                <div className="education-container" id="education">
                    <div>
                        <h1 className="education-heading">Education</h1>
                        <div className="education-cards-div">
                        {educationInfo.schools.map((card) => {
                            return (
                                <EducationCard
                                    isDark={isDark}
                                    cardInfo={{
                                        company: card.company,
                                        desc: card.desc,
                                        date: card.date,
                                        companylogo: card.companylogo,
                                        role: card.role,
                                        daily: card.daily,
                                        dailyBullets: card.dailyBullets,
                                        tools: card.tools,
                                        toolsBullets: card.toolsBullets,
                                        descBullets: card.descBullets
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
