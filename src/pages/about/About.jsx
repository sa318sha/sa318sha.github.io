import React from "react";

import { Box } from "@mui/system";
import "./About.css"
import "../../common/CommonFonts.css"
import { Typography } from "@mui/material";

export default function About(props){

    return (
        <Box sx={{
            height: "100vh",
            width:"100%",
            backgroundColor: "#FFBD8E",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            
        }}>
            <Box className="container"
            sx={{
                width:"80%",
                height:"80%",
                // border:"2px solid black",
                borderRadius:"10px",
                display:"grid",
                gridTemplateRows:"16.666% 16.666% 16.666% 16.666% 16.666% 16.666%",
                gridTemplateColumns:"16.666% 16.666% 16.666% 16.666% 16.666% 16.666%",
            }}>

                <Box className="grid-item" sx={{
                    gridArea:"1/1/4/5",
                    border:"2px solid black",
                    borderRadius:"10px",

                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    

                }} >

                    <h3 className="paddingMedium">
                        Who Is Sasha?
                    </h3>

                    <p className="paddingMedium ">
                        I am a third Year Software engineering student with a minor of mechatronics at the University of Calgary.
                        As an undergraduate software engineering student, I am passionate about constantly learning and experimenting with new projects. There's nothing quite like the thrill of diving into a new project or learning a new topic and seeing what I can create from scratch.
                        Even when things get tough, I am driven by the satisfaction of overcoming obstacles and producing something that works flawlessly. For me, software engineering is more than just a field of study - it's a way of life.
                    </p>
                </Box>

                <Box className="grid-item" sx={{
                    gridRowStart:2,
                    gridRowEnd:7,
                    gridColumnStart:6,
                    gridColumnEnd:7,

                    border:"2px solid black",
                    borderRadius:"10px",
                }} >
                    <h3 className="paddingMedium">
                        My Skills!
                    </h3>

                    <p className=" ">
                        <ul>

                            

                            <li>C, C# C++, Java, Python, HTML, CSS, JavaScript, Go   </li>
                            <li>Embedded development: MSP430, Raspberry Pi</li>
                            <li>Git/GitHub/Bash</li>
                            <li>Testing and Debugging</li>
                            <li>Knowledgable in OOP design</li>
                            <li>Comfortable with Design Patterns</li>
                            <li>Agile development Experience</li>
                            <li>Familiarity with kernel development and Linux/Unix-like OS    </li>
                            <li>MySql and MongoDB experience</li>
                            <li>Docker, Docker Hub, Kubernetes, and K3S experience</li>
                            <li>PyTorch, TensorFlow, Keras, predictive modeling experience</li>
                            <li>Strong verbal communication skills and a quick responder</li>
                            <li>Strong time management skills </li>
                            <li>Highly focused individual.</li>

                        </ul>
                    </p>
                    
                </Box>

                <Box className="grid-item" sx={{
                    gridArea:"5/2/7/5",
                }} >

                    dkwjdiao
                </Box>

            </Box>
            



        </Box>
    )


}