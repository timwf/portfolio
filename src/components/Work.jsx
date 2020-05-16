import React, {useState} from 'react'
import { useTransition, animated } from 'react-spring'
import WorksCard from './WorksCard'

const data = [{
    title: "Furbabies", 
    description: "A static website built for a clients dog walking business",
    details: "Kate has a dog walking business and wanted to promote. Using figma for the wire frame and prototype, and standard html, SASS and Javascript static build. \n \n \n  The design and navigation is hand built and responsive to all device widhts",
    badges: ["javascript", "figma", "inkscape", "jQuery", "gimp", "logo design"],
    image: "./gif/furbabies-16-9.gif",
    gitLink: "https://github.com/timwf/Furbabies-final",
    webLink: "https://timwf.github.io/Furbabies-final/index.html"
},
    {
    title: "Retro Brain Map", 
    description: "A retro design brain map showing region descriptions on hover.",
    details: "A personal project using svgs and javascript to create a retro feel interactive map of the brain.  The image was taken from a victorian medical book and used to create this unique playful application.",
    badges: ["SVG", "javascript", "inkscape"],
    image: "./gif/brain-16-9.gif",
    gitLink: "https://github.com/timwf/Retro-interactive-brain-map-javascript",
    webLink: "https://timwf.github.io/Retro-interactive-brain-map-javascript/"
},
{
    title: "Covid-19 Over Time", 
    description: "React application allowing user to select countries for comparison.",
    badges: ["SVG", "javascript", "inkscape", "react.js", "api", "nivobar", "axios", "react-select"],
    image: "./gif/covid-16-9.gif",
    gitLink: "https://github.com/timwf/Retro-interactive-brain-map-javascript",
    webLink: "https://timwf.github.io/Retro-interactive-brain-map-javascript/"
},
{
    title: "Sam Smith Brewet", 
    description: "Custom landing page with animated customizable hero section and parrellex effect",
    badges: ["Shopify", "liquid", "javascript", "inkscape", "api"],
    image: "./gif/sam-16-9.gif",
    gitLink: "https://github.com/timwf/Retro-interactive-brain-map-javascript",
    webLink: "https://samual-smith.myshopify.com/pages/landing-page"
},
{
    title: "Retro Brain Map", 
    description: "A retro design brain map showing region descriptions on hover.",
    badges: ["SVG", "javascript", "inkscape"],
    image: "./gif/brain-16-9.gif",
    gitLink: "https://github.com/timwf/Retro-interactive-brain-map-javascript",
    webLink: "https://timwf.github.io/Retro-interactive-brain-map-javascript/"
},
]




export default function Work() {
    const workCards = data.map((data) => 
    <WorksCard 
    title={data.title} 
    description={data.description} 
    image={data.image} 
    badges={data.badges} 
    gitLink={data.gitLink} 
    webLink={data.webLink}
    details={data.details}
    />
    );

    return(
        <div className="works-container">
            {workCards}

        </div>
    )


}
