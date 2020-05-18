import React, {useState} from 'react'
import { useTransition, animated } from 'react-spring'
import WorksCard from './WorksCard'

const data = [{
    title: "Sam Smith Brewey", 
    description: "Bespoke built Shopify landing page with customizable elements.",
    features: "· Custom design and css \n· Animated bottles on scroll  \n · Customisable images and descriptions allowing client to amend in shopify backend \n · Custom parralex effect \n · SVG Logo design \n · Bespoke design navigation",
    details: "A bespoke landing page including animated bottles with intergrated Owl Carousel product slider - Ongoing project",
    badges: ["javascript", "jQuery", ],
    designBadges: ["figma", "inkscape", "logo design", "gimp"],
    miscBadges: ["Shopify", "Liquid", "owl carousel"],
    image: "./gif/sam-16-9.gif",
    gitLink: "https://github.com/timwf/Retro-interactive-brain-map-javascript",
    webLink: "https://samual-smith.myshopify.com/pages/landing-page"
},
{
    title: "Nordic Furniture Design", 
    description: "Bespoke Shopify Product Page design and Mega Menu.",
    features: "· Custom built responsive Mega Menu \n· Custom built responsive collection pages  \n · SVG Logo design  \n · Mobile Responsive",
    details: "Custom built mobile responsive collection pages with bespoke 'Mega Menu'",
    badges: ["javascript", "jQuery", ],
    designBadges: ["figma", "inkscape", "logo design", "gimp"],
    miscBadges: ["Shopify", "Liquid"],
    image: "./gif/nordic-16-9.gif",
    gitLink: "https://nordic-furniture-design.myshopify.com/collections/furniture",
    webLink: "https://nordic-furniture-design.myshopify.com/collections/furniture"
},
{
    title: "Furbabies", 
    description: "A static website built for a clients dog walking business.",
    features: "· PHP Contact form  \n · Custom collapsable Navigation \n · Custom design and css \n · Intergrated messenger widget",
    details: `Kate has a dog walking business that she wanted to promote.  \n Using figma for the wire frame and prototype, and standard html, SASS and Javascript static build. \n The design and navigation is hand built and responsive to all device widths.`,
    badges: ["javascript", "jQuery", "html", "SASS", "PHP"],
    designBadges: ["SVG","figma", "inkscape", "logo design", "gimp"],
    miscBadges: [],
    image: "./gif/furbabies-16-9.gif",
    gitLink: "https://github.com/timwf/Furbabies-final",
    webLink: "https://timwf.github.io/Furbabies-final/index.html"
},
    {
    title: "Retro Brain Map", 
    description: "A retro design brain map showing region descriptions on hover.",
    features: "",
    details: `A personal project using svgs and javascript to create a retro feel interactive map of the brain.  \n The image was taken from a victorian medical book and used to create this unique playful application.`,
    badges: ["SVG", "javascript"],
    designBadges: ["figma", "inkscape","gimp"],
    miscBadges: [],
    image: "./gif/brain-16-9.gif",
    gitLink: "https://github.com/timwf/Retro-interactive-brain-map-javascript",
    webLink: "https://timwf.github.io/Retro-interactive-brain-map-javascript/"
},
{
    title: "Covid-19 Over Time", 
    description: "React application allowing user to select countries for comparison. \n",
    features: "",
    details: `<P>A personal project using svgs and javascript to create a retro feel interactive map of the brain.  The image was taken from a victorian medical book and used to create this unique playful application.</P>`,
    badges: [ "javascript","react.js" ],
    designBadges: ["figma", "inkscape", "SVG"],
    miscBadges: ["API", "nivobar", "axios", "react-select"],
    image: "./gif/covid-16-9.gif",
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
    designBadges={data.designBadges}
    miscBadges={data.miscBadges}
    gitLink={data.gitLink} 
    webLink={data.webLink}
    details={data.details}
    features={data.features}
    />
    );

    return(
        <div className="works-container">
            {workCards}

        </div>
    )


}
