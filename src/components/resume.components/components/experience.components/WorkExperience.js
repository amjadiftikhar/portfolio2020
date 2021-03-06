import React from 'react';
import ExperienceCard from './ExperienceCard';
import TaskDescription from './TaskDescription';
import './workExperience.styles.css';

export const experienceData = [
    { 
        jobTitle:'Frontend Developer',
        companyName: 'Molecular Quantum Solutions',
        duration: '01/2021 - Present',
        task: 'Tasks:',
        companyLocation: 'Søborg, Denmark',
        taskDetails: [
            'Responsible for the frontend tasks related to building a platform that hosts different tools for R & D',
            ' Planning and setting up frontend architecture, diagnosing, troubleshooting and        resolving technical issues',
            'Developing design and collaboration with the design team',
            'Making reusable components and writing test using React testing library'
        ]
    },
    {
        jobTitle:'Frontend Developer',
        companyName: 'Unifounder',
        duration: '11/2020 - 01/2021',
        task: 'Tasks:',
        companyLocation: 'Frederiksberg, Denmark',
        taskDetails: [
            'Responsible for developing the design also help designing the platform',
            'Implementation from concept through deployment, with a responsive, mobile first approach',
            'Refactoring and decomposing exiting code and structure',
            'Perform code reviews, coordinating with designers and development team',
            'Diagnosing, troubleshooting and resolving technical issues'
        ],
    },
    {
        jobTitle:'Student Volunteer',
        companyName: 'Hack Your Future-Copenhagen',
        duration: '08/2019 - Present',
        task: 'Tasks:',
        companyLocation: 'Copenhagen, Denmark',
        taskDetails: [
            'Reviewning PRs',
            'Helping students with their weekly assignments'
        ],
    },
    {
        jobTitle:'Taxi Driver',
        companyName: 'Taxa 4x35 Copenhagen',
        duration: '02/2014 - 05/2020',
        task: 'Achievements:',
        companyLocation: 'Frederiksberg, Denmark',
        taskDetails: [
            'Learnt how to deal nicely with the customers and work under stress',
            'Improved communication skills'
        ],
    }
]

const WorkExperience = () => {

    return (
        <div className="workExperienceContainer">
            <h3 className='experienceTitle'>Work Experience</h3>
            {
                experienceData.map((e, index) => {
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

export default WorkExperience;
