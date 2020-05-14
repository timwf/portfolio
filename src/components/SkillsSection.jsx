import React from 'react'
import SkillsDonut from './SkillsDonut'

function SkillsSection(props) {
    console.log(props);
    
    return (
        <div className="skills-section">
            <h4>{props.title}</h4>
            {props.title == "Languages" ? 
            <>
            <div className="skills-row">
                <SkillsDonut title="Javascript" value="10" />
                <SkillsDonut title="CSS/SCSS" value="110" />
                <SkillsDonut title="Jquery" value="120" />
            </div>
            <div className="skills-row">
                <SkillsDonut title="Javascript" value="130" />
                <SkillsDonut title="CSS/SCSS" value="140" />
                <SkillsDonut title="Jquery" value="150" />
            </div>

            </>
            : null}
            {props.title == "UX/UI" ? 
            <>
            <div className="skills-row">
                <SkillsDonut title="Javascript" value="160" />
                <SkillsDonut title="CSS/SCSS" value="170" />
                <SkillsDonut title="Jquery" value="180" />
            </div>
            <div className="skills-row">
                <SkillsDonut title="Javascript" value="190" />
                <SkillsDonut title="CSS/SCSS" value="101" />
                <SkillsDonut title="Jquery" value="102" />
            </div>

            </>
            : null}
                        {props.title == "CMS/Misc" ? 
            <>
            <div className="skills-row">
                <SkillsDonut title="Javascript" value="103" />
                <SkillsDonut title="CSS/SCSS" value="104" />
                <SkillsDonut title="Jquery" value="105" />
            </div>
            <div className="skills-row">
                <SkillsDonut title="Javascript" value="106" />
                <SkillsDonut title="CSS/SCSS" value="107" />
                <SkillsDonut title="Jquery" value="108" />
            </div>

            </>
            : null}
        </div>
    )
}

export default SkillsSection
