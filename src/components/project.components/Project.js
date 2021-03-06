import React from 'react';
import {Card} from "react-bootstrap";
import {FaGithub, FaExternalLinkSquareAlt} from "react-icons/fa"
import {MdDescription} from "react-icons/md";
import ReactTooltip from 'react-tooltip';
import "./projects.style.css";

const Project = (props) => {

  return (
    <Card className='projectCard' data-testid='project'>
      {/* main div of the project designed */}
      <div className="projectContents">
        <h5 className="projectName">{props.projectTitle}</h5>
        {/* main div to implement flipping on hover over*/}
        <div className="flipBox">
          <div className="flipBox-inner">
            <div className="flipBox-front">
              {/* <img className="projectImage" src={props.projectImage} alt=""/> */}
              <video className="projectImage" 
                controls loop autoPlay muted >
                <source src={props.projectVideo} />
              </video>
            </div>
            <div className="flipBox-back">
              <h5 className="stacksHeader">Tech Stack</h5>
              <div className="techStackClass">                
                {props.stackList} 
              </div>           
            </div>
          </div>
        </div>
        {/* icons' section of the project starts from here*/}
        <div className="iconSection">
          <span className="classSpan">
            <a className="toolTipp" href={props.githubLink}>
              <FaGithub className="classIcon toolTipp" />
              <span className="classTooltip">Github</span>
            </a> 
          </span>
          <span className="classSpan">
            <a className="toolTipp" href={props.herokuLink } target="_blank">
              <FaExternalLinkSquareAlt className="classIcon toolTipp"/>
              <span className="classTooltip">Preview</span> 
            </a>
          </span>
          <span className="classSpan">
            {/* Div for the Tooltip designed for the project description  */}
            <div className="toolTip">  
              <MdDescription data-tip data-for='description' id="sadFace" 
                className="classIcon toolTip"/>
              <ReactTooltip id='description' className="classToolTipBubble" 
                type='warning'>
                <span className=" classToolTipBubble">
                  {props.description}
                </span> 
              </ReactTooltip>
            </div>
          </span>
        </div>
      </div>
    </Card>
  )
}

export default Project;