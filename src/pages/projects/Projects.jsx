import React, { useEffect, useState } from "react";

import { Box } from "@mui/system";
import "../../common/CommonFonts.css"
import "./Project.css"
import { getfirst4Projects,getRestOfProjects } from "./ProjectsLocalAPI.js";
import { ProjectContainer } from "./ProjectContainer";
import OlderProjectContainer from "./OlderProjectContainer";


export default function Projects(props){
    
    const temp = [<div>test1</div>, <div>test2</div>]
    
    const[first4Projects,setFirst4Projects] = useState(getfirst4Projects())
    const[restOfProjects,setRestOfProjects] = useState(getRestOfProjects())
    const[hover, setHover] = useState(false)



    let carouselSize = restOfProjects.length

    let [count, setCount] = useState([0,1,2])
    let [tuple, setTuple] =useState([null,count[1]])
    
    if(tuple[1]!== count[1]){
        setTuple([tuple[1],count[1]])
    }

    let prev = tuple[0];
    let direction = prev > count[0] ? "decreasing": "increasing"


    const increment = () =>{
        var a = count[0] +1 > carouselSize-1 ? 0: count[0]+1
        var b = count[1] +1 > carouselSize-1 ? 0: count[1]+1
        var c = count[2] +1 > carouselSize-1 ? 0: count[2]+1


        setCount([a,b,c])
    }

    const decrement = () =>{
        var a = count[0] -1 < 0 ? carouselSize-1: count[0]-1
        var b = count[1] -1 < 0 ? carouselSize-1: count[1]-1
        var c = count[2] -1 < 0 ? carouselSize-1: count[2]-1


        setCount([a,b,c])
    }

    useEffect(()=>{
        // var interval
        // if(!hover){
        //     setInterval(()=>{
        //         increment()
        //         // console.log("")
        //     },1000)
        // }
        // return clearInterval(interval)
        
        
    })

    return (
        
        <div className="projectsPageWrapper">
            <section>
                <h3 className="noMargin projectsTitle">Projects</h3>
                <div className="projectsWrapper">

                    {first4Projects.map( (project,index) =>{
                        return <ProjectContainer key={index} 
                        title={project.title}
                        description={project.description}
                        img={project.image}
                        link={project.link} />
                    })}

                    



                </div>
            </section>
            <section>
                <h5 className="noMargin projectsTitle"> Other Projects </h5>
                <div className="olderProjectWrapper">


                        {/* {for(const i =0)} */}
                        <div className="carouselProjectContainer">
                            {restOfProjects.map((project,index) =>{
                                return <OlderProjectContainer key={index}
                                title={project.title}
                                img={project.image}
                                link={project.link} 
                                />


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

