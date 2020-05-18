import React from 'react'
import SkillsDonut from './SkillsDonut'

function SkillsSection(props) {
    console.log(props);
    
    return (
        <div className="skills-section">
            <h3>{props.title}</h3>
            {props.title == "Languages" ? 
            <>
            <div className="skills-row">
                <SkillsDonut title="JS ES6" value="135" />
                <SkillsDonut title="React.js" value="135" />
                <SkillsDonut title="Redux" value="116" />
            </div>
            <div className="skills-row">
                <SkillsDonut title="Socket.IO" value="111" />
                <SkillsDonut title="jQuery" value="105" />
                <SkillsDonut title="Thunk" value="95" />
            </div>
            <div className="skills-row">
                <SkillsDonut title="Node.js" value="93" />
                <SkillsDonut title="MongoDB" value="89" />
                <SkillsDonut title="Mongoose" value="72" />
            </div>

            </>
            : null}
            {props.title == "UX/UI" ? 
            <>
            <div className="skills-row">
                <SkillsDonut title="CSS3" value="135" />
                <SkillsDonut title="Bootstrap-react" value="135" />
                <SkillsDonut title="SVG Animation" value="135" />
            </div>
            <div className="skills-row">
                <SkillsDonut title="Figma" value="135" />
                <SkillsDonut title="Inkscape" value="118" />
                <SkillsDonut title="Sass" value="108" />
            </div>
            <div className="skills-row">
                <SkillsDonut title="Styled Components" value="105" />
                <SkillsDonut title="Material UI" value="92" />
                <SkillsDonut title="Gimp" value="83" />
            </div>

            </>
            : null}
                        {props.title == "CMS/Misc" ? 
            <>
            <div className="skills-row">
                <SkillsDonut title="Shopify" value="135" />
                <SkillsDonut title="Liquid" value="135" />
                <SkillsDonut title="Mailchimp" value="122" />
            </div>
            <div className="skills-row">
                <SkillsDonut title="Axios" value="101" />
                <SkillsDonut title="Git" value="95" />
                <SkillsDonut title="Wordpress" value="89" />
            </div>
            <div className="skills-row">
                <SkillsDonut title="Nivo" value="88" />
                <SkillsDonut title="Theme Kit" value="85" />
                <SkillsDonut title="P5" value="82" />
            </div>

            </>
            : null}
        </div>
    )
}

export default SkillsSection
