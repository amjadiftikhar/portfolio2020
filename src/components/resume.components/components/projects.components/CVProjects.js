import React from 'react'
import CVProjectCard from './CVProjectCard';
import "./cvProjects.styles.css";

const projectData = [
    {
        duration: 'Movie Catalogue (10/2020 - 10/2020)',
        description: 'Application built in React using Star Wars API to show movies and movie characters as well as character specs. Tool used are, Javascript, React, HTML, CSS and API, Git, Github.'
    },
    {
        duration: 'www.seasony.dk (02/2020 - 04/2020)',
        description: 'Seasony is a startup specializing in vertical farming with robotics. A dashboard application (https://fp-class11.herokuapp.com/dashboard) for Seasony and tools used are, JavaScript, NodeJS, React, MySql, Knex.js, Storybook, Express, Swagger, HTML and'
    },
    {
        duration: 'Meal Sharing Application (02/2020 - 02/2020)',
        description: 'Developed a meal sharing application (https://my-meal-sharing-app.herokuapp.com), using JavaScript, HTML/CSS, MySql, Express, Git, Github, NPM, Webpack skills '
    }, 
    {
        duration: 'Weather Application (11/2019 - 11/2019)',
        description: 'Weather App where I used my technical skills in JavaScript, REST APIs, HTML and CSS'
    }    
]

const CVProjects = () => {

    return (
        <div className="cvProjectSection">
            <h3 className='cvProjectTitle'>Projects</h3>
            <div className="cvProjectContainer">
                {
                    projectData.map((p, index) => {
                        return(
                            <CVProjectCard
                                key={index}
                                contentDuration={p.duration}
                                contentDescription={p.description}
                            />
                        )
                    })
                } 
            </div>           
        </div>
    )
}

export default CVProjects;
