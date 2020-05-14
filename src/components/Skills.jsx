import React from 'react'
import {Transition, Donut, Spring} from 'react-spring/renderprops'
import SkillsSection from './SkillsSection'


export default function Skills() {


    return (
        <div className="skills-wrapper">
        <div className="skills-container">
            <div className="languages-skills">
                <SkillsSection title={"Languages"} />
            </div>
            <div className="uxui-skills">
                 <SkillsSection title={"UX/UI"} />
            </div>
            <div className="cms-skills">
                 <SkillsSection title={"CMS/Misc"} />
            </div>
        </div>
        </div>
    )
}
