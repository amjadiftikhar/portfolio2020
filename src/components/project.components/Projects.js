import React from "react";
// import {Container} from "react-bootstrap";
import Project from "../../components/project.components/Project";
import projectsData from "../../assets/data.json";
import {GrProjects} from "react-icons/gr";

const Projects = () => { 

    return (
      <>
        <h3 className='projSectionTitle'><GrProjects className="projectIcon"/>Projects</h3>
        <div className="projectSection">      
          { projectsData.projects.map((proj, index) => <Project 
              key={index}
              projectTitle={proj.projectTitle}
              stackList={proj.stackList.map(techStack => 
                <div key={techStack} className="techElements">
                  {techStack}
                </div>
              )} 
              projectImage={proj.projectImage}
              projectVideo={proj.projectVideo}
              githubLink={proj.githubLink}
              herokuLink={proj.herokuLink}
              description={proj.description}
            />)
          }
        </div>
      </> 
    )
  }
  
  export default Projects;