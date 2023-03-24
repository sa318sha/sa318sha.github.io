import React from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "./About.css"
import "../../common/CommonFonts.css"
import UOfCCoat from "../../assets/UofCCoat.svg.png"
import NeuralNetwork from "../../assets/Neural-Network-2.png"

export default function About(props){

    return (

        <div className="aboutPageWrapper">
            <div className="sectionWrapper ">
                <section className="spikes">
                    <div className ="wrapper black">


                        <div className="aboutContainerWrap">

                            <div className="descriptionContainer">

                                <h2 class className="sectionTitle">  Who am I?</h2>
                                <p className="">I am a third Year Software engineering student with a minor of mechatronics at the University of Calgary.As an undergraduate software engineering student, I am passionate about constantly learning and experimenting with new projects. There's nothing quite like the thrill of diving into a new project or learning a new topic and seeing what I can create from scratch.Even when things get tough, I am driven by the satisfaction of overcoming obstacles and producing something that works flawlessly. </p>

                            </div>

                            <img className="UOfCimg" src={UOfCCoat} alt=""/>

                        </div>

                    </div>


                </section>
                <section className>

                    <div className ="wrapper white">


                        <div className="aboutContainerWrap">
                            <div className=" skillContainer softSkillContainer">
                                <div className="center bold">Soft Skills</div>
                                <ul className="aboutList">
                                    <li>Strong verbal communication skills and a quick responder</li>
                                    <li>Excellent collaboration skills</li>
                                    <li>Strong time management skills </li>
                                    <li>Highly focused individual.</li>
                                    <li>powerful problem solving skills</li>
                                </ul>
                            </div>
                            <div className=" skillContainer hardSkillContainer">
                                <div className="center bold">Technical Skills</div>
                                    <ul className="aboutList">
                                        <li>Projects in C, C# C++, Java, Python, HTML, CSS, JavaScript, Go   </li>
                                        <li>Embedded development: MSP430, Raspberry Pi, STM32</li>
                                        <li>MySql and MongoDB experience</li>
                                        <li>Docker, Docker Hub, Kubernetes, and K3S experience</li>
                                        <li>PyTorch, TensorFlow, Keras, predictive modeling experience</li>
                                        <li>OpenGL and rasterization experience</li>
                                    </ul>
                                </div>
                            <div className=" skillContainer toolSkillContainer">
                                <div className="center bold">Tools</div>

                                    <ul className="aboutList">
                                        <li>VS code, VS 2022, Eclipse </li>
                                        <li>Object Orientated Design</li>
                                        <li>Knowledge in Design Patterns</li>
                                        <li>Git/GitHub/Bash</li>

                                    </ul>

                            </div>
                            

                        </div>

                    </div>
                </section>
                

                <section className="spikes">
                    <div className ="wrapper black">


                        <div className="aboutContainerWrap">

                            <div className="descriptionContainer">

                                <h2 class className="sectionTitle">  What am I interested in?</h2>
                                <p className="">As an undergraduate software engineering student, I've always had a passion for working with cutting-edge technologies such as machine learning, graphics processing, and embedded systems. These topics have always intrigued me, and I find myself constantly honing my skills to become proficient in each one. I especially enjoy applying skills in algorthims and data sturcutes alongside problem solving skills to tackle complex challenges in these areas, and it's incredibly rewarding when I finally arrive at a solution. What's more, I'm always eager to learn about new topics, and I relish the opportunity to broaden my knowledge and skill set even further.  </p>

                            </div>
                            <img className="UOfCimg" src={NeuralNetwork} alt="" />

                        </div>

                    </div>


                </section >





            </div>

        </div>
        // <Box>
        //     <Box sx={{
        //         height: "100dvh",
        //         // width:"100%",
        //         backgroundColor: "black",
        //         display:"flex",
        //         justifyContent:"center",
        //         alignItems:"center",
                
        //     }}>

        //         <Box className ="holder" sx={{
        //             width:"80%",
        //             height:"70%",
        //             border:"2px solid #FFBD8E",
        //             borderRadius:"10px",
        //             display:"flex",
        //             justifyContent:"spaceAround",
        //             flexFlow:"row wrap",
                    

                    
        //         }}>

        //             <Box sx={{
        //                 flex:1,
        //                 display:"flex",
        //                 justifyContent:"center",
        //                 alignItems:"center",
                        
        //             }}> 
        //             <Box sx={{

        //                 width:"80%",
        //                 height:"80%",
        //                 display:"flex",
        //                 justifyContent:"center",
        //                 alignItems:"center",
                        
        //             }}>
        //             <img className="UOfCimg"
                        
        //                 src={UOfCCoat}
        //                 alt=""
        //                 />
                        
        //             </Box>
                    
                    
        //             </Box>


        //             <Box sx={{
        //                 flex:1.4,
        //                 display:"flex",
        //                 flexFlow: "column nowrap",
        //                 justifyContent:"center",
        //                 alignItems:"center",
        //             }}> 
                    
        //                 <h1 className="paddingLarge noMargin white center">
        //                         Who Is Sasha?
        //                 </h1>

        //                 <p className="paddingLarge noMargin white center">
        //                     I am a third Year Software engineering student with a minor of mechatronics at the University of Calgary.
        //                     As an undergraduate software engineering student, I am passionate about constantly learning and experimenting with new projects. There's nothing quite like the thrill of diving into a new project or learning a new topic and seeing what I can create from scratch.
        //                     Even when things get tough, I am driven by the satisfaction of overcoming obstacles and producing something that works flawlessly. For me, software engineering is more than just a field of study - it's a way of life.
        //                 </p>

                    
                    
                    
        //             </Box>


        //         </Box>


                


                    


                



        //     </Box>
        //     <Box sx={{
        //         height: "100dvh",
        //         width:"100%",
        //         backgroundColor: "black",
        //         display:"flex",
        //         justifyContent:"center",
        //         alignItems:"center",
                
        //         }}>

        //         <Box className ="holder" sx={{
        //             width:"80%",
        //             height:"70%",
        //             border:"2px solid #FFBD8E",
        //             borderRadius:"10px",
        //             display:"flex",
        //             justifyContent:"spaceAround",
        //             flexFlow:"row wrap",
                    

                    
        //         }}>

                    


        //             <Box sx={{
        //                 flex:1.4,
        //                 display:"flex",
        //                 flexFlow: "column nowrap",
        //                 justifyContent:"center",
        //                 alignItems:"center",
        //             }}> 
                    
        //                 <h1 className="paddingMedium noMargin white center">
        //                         What am I interested in
        //                 </h1>

        //                 <p className="paddingMedium noMargin white center">
        //                 As an undergraduate software engineering student, I've always had a passion for working with cutting-edge technologies
        //                 such as machine learning, graphics processing, and embedded systems. 
        //                 These topics have always intrigued me, and I find myself constantly honing my skills to become
        //                 proficient in each one. I especially enjoy applying skills in algorthims and data sturcutes alongside problem solving skills to tackle complex challenges in these areas, and it's incredibly
        //                 rewarding when I finally arrive at a solution. What's more, I'm always eager to learn about new topics, and I relish the opportunity to broaden
        //                  my knowledge and skill set even further. 

        //                 </p>

                    
                    
                    
        //             </Box>
        //             <Box sx={{
        //                 flex:1,
        //                 display:"flex",
        //                 justifyContent:"center",
        //                 alignItems:"center",
                        
        //             }}> 
        //                 <Box sx={{

        //                     width:"80%",
        //                     height:"80%",
        //                     display:"flex",
        //                     justifyContent:"center",
        //                     alignItems:"center",
                            
        //                 }}>
        //                 <img className="UOfCimg"
                            
        //                     src={NeuralNetwork}
        //                     alt=""
        //                     />
                            
        //                 </Box>
                    
                    
        //             </Box>


        //         </Box>
        //     </Box>




        //     <Box sx={{
        //         height: "100dvh",
        //         width:"100%",
        //         backgroundColor: "black",
        //         display:"flex",
        //         justifyContent:"center",
        //         alignItems:"center",
                
        //         }}>

        //         <Box className ="holder" sx={{
        //             width:"80%",
        //             height:"70%",
        //             border:"2px solid #FFBD8E",
        //             borderRadius:"10px",
        //             display:"flex",
        //             justifyContent:"spaceAround",
        //             flexFlow:"column nowrap",
                    

                    
        //         }}>
        //             <h1 className="white center ">
        //                         My Skills

        //             </h1>
                    


        //             <Box sx={{
        //                 flex:1,
        //                 display:"flex",
        //                 flexFlow: "row wrap",
        //                 justifyContent:"center",
        //                 alignItems:"stretch",
        //             }}> 
                    
        //                 <Box sx={{
        //                     flex:1,
        //                     display:"flex",
        //                     flexFlow:"column nowrap",
        //                     justifyContent:"flex-start",
        //                     alignItems:"center"

        //                 }}>
        //                     <h3 className="white center">
        //                         Soft Skills
        //                     </h3>
        //                     <ul className="white paddingLarge noMargin">
        //                         <li>Projects in C, C# C++, Java, Python, HTML, CSS, JavaScript, Go   </li>
        //                         <li>Embedded development: MSP430, Raspberry Pi, STM32</li>
        //                         <li>Git/GitHub/Bash</li>
        //                         <li>Comfortable with Design Patterns</li>
        //                         <li>Familiarity with kernel development and Linux/Unix-like OS    </li>
        //                         <li>MySql and MongoDB experience</li>
        //                         <li>Docker, Docker Hub, Kubernetes, and K3S experience</li>
        //                         <li>PyTorch, TensorFlow, Keras, predictive modeling experience</li>

        //                     </ul>



        //                 </Box>

        //                 <Box sx={{
        //                     flex:1,
        //                     display:"flex",
        //                     justifyContent:"space-around",
        //                     flexFlow:"column nowrap",
        //                     justifyContent:"flex-start",

        //                     alignItems:"center"
        //                 }}>
        //                     <h3 className="white center">
        //                         Hard Skills
        //                     </h3>
        //                     <ul className="white paddingLarge noMargin">
                                


        //                         <li>Agile development Experience</li>
        //                         <li>Strong verbal communication skills and a quick responder</li>
        //                         <li>Strong time management skills </li>
        //                         <li>Highly focused individual.</li>

        //                     </ul>

        //                 </Box>
                    
                        

                        

                    
                    
                    
        //             </Box>
                    


        //         </Box>
        //     </Box>


        // </Box>
    )


}