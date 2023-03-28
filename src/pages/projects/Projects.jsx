import React, { useEffect, useState } from "react";

import { Box } from "@mui/system";
import "../../common/CommonFonts.css"
import "./Project.css"
import { getfirst4Projects,getRestOfProjects, getProject } from "./ProjectsLocalAPI.js";
import { ProjectContainer } from "./ProjectContainer";
import OlderProjectContainer from "./OlderProjectContainer";
import PopUp from "./ProjectPopUp";

export default function Projects(props){
    
    
    const [popUp, setPopUp] = useState(false)
    const [popUpIdx, setPopUpIndex] = useState(0)

    const first4Projects = getfirst4Projects()
    const restOfProjects = getRestOfProjects()


    


    return (
        
        <div className="projectsPageWrapper" onClick={()=>{
            console.log("popup closed")
            setPopUp(false)
        }}>
            {popUp?
            <PopUp project={getProject(popUpIdx)}
                close={setPopUp}
            />
            : ""}

            <section>
                <h3 className="noMargin projectsTitle">Projects</h3>
                <div className="projectsWrapper">

                    {first4Projects.map( (project,index) =>{
                        return <ProjectContainer 
                        key={index} 
                        setPopUp={setPopUp}
                        setPopUpIndex={setPopUpIndex}
                        description={true}
                        picture={true}
                        project = {project} />
                    })}

                </div>
            </section>
            <section>
                <h5 className="noMargin projectsTitle"> Other Projects </h5>
                <div className="olderProjectWrapper">


                        <div className="carouselProjectContainer">
                            {restOfProjects.map((project,index) =>{
                                return <ProjectContainer 
                                key={index} 
                                setPopUp={setPopUp}
                                setPopUpIndex={setPopUpIndex}
                                description={false}
                                picture={false}
                                project = {project} />



                            })}
                    
                        {/* <OlderProjectContainer state={count[0]}
                            title={restOfProjects[count[0]].title}
                            img={restOfProjects[count[0]].image}
                            link={restOfProjects[count[0]].link} />
                        <OlderProjectContainer 
                            title={restOfProjects[count[1]].title}
                            img={restOfProjects[count[1]].image}
                            link={restOfProjects[count[1]].link} />
                        <OlderProjectContainer 
                            title={restOfProjects[count[2]].title}
                            img={restOfProjects[count[2]].image}
                            link={restOfProjects[count[2]].link} /> */}

                        </div>        
                    
                    {/* <a className="prev" onClick={decrement}>&#10094;</a>
                    <a className="next" onClick={increment}>&#10095;</a> */}
                </div>
            </section>
            <section className="spikes extraPadding">
                <div className ="wrapper black">


                    <div className="futureProjectsContainer">

                        <div className="descriptionContainer">

                            <h3>Future Projects</h3>
                            <ul>
                                <li key={0}><p>
                                    2D OpenGL Physics Engine
                                    </p></li>
                                <li key={1}><p>
                                    Mobile App space shooter game
                                    
                                    </p></li>


                            </ul>
                        </div>


                    </div>

                </div>


            </section>
            <section className=" futureGoals">
                





            </section>



        </div>

        // <div>{ProjectDisplay()} </div> 
        
 
    )


}

