import styled from "styled-components";

const Style = styled.div`
  .mySkills {
    width: 0.9em;
    height: 0.9em;
    margin-right: 0.2em;
  }
  h3 {    
    margin-bottom: 1.5rem;
  }
  .skillsContentSection {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;        
  }
  .skillsList {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    // background-color: #C1BDB5;
    background-color: #ececec;
    margin-top: 2%;
    padding: 2rem;
    transition: 2s ease-out;
  }
  .sectionElement {  
    padding: 1.5em;
    font-weight: bold;
    text-align: center;
    color: white;
  }
`;

export default Style;