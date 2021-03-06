import React from 'react';
import ExperienceCard from './ExperienceCard';
import './workExperience.styles.css';

export const volunteerExperienceData = [
    { 
        jobTitle:'Frontend Developer',
        companyName: 'https://www.smartdeveloper.dk/',
        duration: '11/2020 - 02/2021',
        task: 'Tasks:',
        companyLocation: 'Copenhagen, Denmark',
        taskDetails: [
            'A signle page application, developed in React',
            'I succssfully completed it and got a deep insight of working with React.js from scratch to deployment',
            'Made reusable components and wrote tests using React testing library',
        ]
    },
    {
        jobTitle:'Frontend Developer',
        companyName: 'https://www.mobiletilbud.dk/',
        duration: '12/2020 - 01/2021',
        task: 'Tasks:',
        companyLocation: 'Copenhagen, Denmark',
        taskDetails: [
            'Participated developing frontend for the application using HTML and CSS'
        ],
    }
]

const VolunteerExperience = () => {

    return (
        <div className="workExperienceContainer">
            <h3 className='experienceTitle'>Volunteer Experience</h3>
            {
                volunteerExperienceData.map((e, index) => {
                    return(
                        <ExperienceCard
                            key={index}
                            jobTitle={e.jobTitle}
                            companyName={e.companyName}
                            duration={e.duration}
                            companyLocation={e.companyLocation} 
                            task={e.task} 

                            data={e.taskDetails}                          
                        /> 
                    ) 
                    
                })
            }
        </div>
    )
}

export default VolunteerExperience;
