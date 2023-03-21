import React from "react";

import { Box } from "@mui/system";
import "../../common/CommonFonts.css"
import ProjectPlaceHolder from "./ProjectPlaceHolder";
import { Route, Routes, useNavigate } from "react-router-dom";

import { useLocation,  } from "react-router-dom";
import { getProjects } from "./ProjectsDescriptions";
import Project from "./Project";
function ProjectDisplay(){
    
    const navigate = useNavigate()
    const location = useLocation()
    const topics = getProjects()

    let currentPath = location.pathname.toLowerCase()
    console.log(`current Path is ${currentPath}`)
    var projectBoolean = false
    if (currentPath === "/projects" || currentPath === "/projects/"){
        projectBoolean = true
    }

    if(projectBoolean === true){
        return (
        <Box
        sx={{
            width:"100%",
            height:"100vh",
            background:"black",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            

            
        }}
        
        >
            <Box
            sx={{
                
                width:"80%",
                height:"80%",
                textAlign:"center",
                display:"flex",
                flexFlow:"column nowrap",
                justifyContent:"center",
                alignItems:"center",

            }}>

            
            <h3 className="white">
                Projects
            </h3>
            <Box sx={{
                width:"70%",
            }}>
            <p className="white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quasi odit nihil, tempora eveniet obcaecati praesentium at corrupti non omnis dolorum est minima delectus magnam, ducimus officiis, porro velit cupiditate facilis rem illum quo molestiae eos. Quo, suscipit vitae. Nulla consectetur est sed minus, architecto nobis quos delectus corrupti eaque.
            </p>
            </Box>
            

            {/* container for projects */}
            <Box sx={{
                display:"flex",
                width:"90%",
                height:"90%",
                border:"1px solid white",
            }}> 
            
           
                {topics.map(({ information, relativePath }) => (
                    <ProjectPlaceHolder title={information.name} description={information.overview} clickHandler={()=>{ navigate(currentPath + relativePath)}}>
                    
                    </ProjectPlaceHolder>
                ))}
            
            
            </Box>
                
            
                
                {/* <ProjectContainer>
                    <ProjectPlaceHolder title="Neural Networks Library" description="personnel neural network Library that I created from scratch using Python" onClick></ProjectPlaceHolder>
                </ProjectContainer> */}
                    
                

           
                <Box>
                    future/current projects
                </Box>
            </Box>
        </Box>
        )
    }else{
        return(
            <Routes>
                {topics.map(({ information, relativePath }) => (
                <Route path={relativePath} element = {<Project information={information} />}/>
                
                // </ProjectPlaceHolder>
            ))}
            </Routes>
            
        // <Routes>
        //     <Route path="neural" element={<div>hello neural network</div>}/>
        // </Routes>
        )
        
    }
}

export default function Projects(props){
    

    return (

        <div>{ProjectDisplay()} </div> 
        
 
    )


}