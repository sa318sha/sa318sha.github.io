import React from "react";
import WhoIAmAnimationBlock from "./WhoIAmAnimationBlock";

import { Box } from "@mui/system";

import "./Home.css"
import "./../../common/CommonFonts.css"
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home({render}){

    const navigate = useNavigate()

    return (
        <Box 
        sx={{
            // width:"100%",
            // // backgroundColor:"grey",
            // height:"100%"
        }}
        >
            
        <Box className="mainBackground mainBackgroundTint"
        sx={{
            
            display:"flex",

            height: "100vh",
            justifyContent:"center",
            alignItems:"center"
            // width:"100vw"
        }}
        
        >

            <Box
            sx={{
                
                width: "max-content",
                height:"max-content",
                
                fontSize:"2.5em",
                
            }}
            >
                <WhoIAmAnimationBlock firstRender={render}>

                </WhoIAmAnimationBlock>
            </Box>

        </Box>
            {/* project box */}
        <Box
        sx={{
            // background: " black no-repeat 100% center fixed",
            height: "100dvh",
            backgroundColor: "black",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }}>
            {/* holder */}
            <Box sx={{
                width:"80%",
                height:"80%",
                border:"2px solid #FFBD8E",
                borderRadius:"10px",
                display:"flex",
                justifyContent:"spaceAround",
                flexFlow:"row wrap",

                
            }}>

                <Box sx={{
                    minWidth:"360px",
                    flex:1
                }}> <div className="white"> hello world</div> </Box>


                <Box sx={{
                    flex:1,
                    display:"flex",
                    flexFlow: "column nowrap",
                    justifyContent:"center",
                    alignItems:"center",
                }}> 
                
                <Typography
                paddingBottom={2}
                variant="h1"
                color="white"
                fontSize={30}
                fontFamily="Georgia, serif"
                padding={2}
                textAlign= "center">
                    My passion and focus is Software Development
                </Typography>

                <p
                // paddingBottom={2}
                className="paddingLarge serif white center">
                    As an undergraduate Software Engineering student, I am constantly excited about my projects
                     and learning new things. 
                     Whether it's creating a new app, playing with neural networks, or working with graphics, I am always eager to dive in and learn as much as I can.
                </p>

                <Button variant="outlined" 
                sx={{
                    color:"white",
                    borderColor:"#FF9C56",
                }}
                
                onClick={()=>{
                    navigate("/projects")
                }}> Explore My Projects </Button>
                
                
                </Box>


            </Box>
        </Box> 

        <Box sx={{
            height: "100vh",
            backgroundColor: "#FFBD8E",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }}>
            {/* holder */}
            <Box sx={{
                width:"80%",
                height:"70%",
                border:"2px solid black",
                borderRadius:"10px",
                display:"flex",
                justifyContent:"spaceAround"

                
            }}>

                


                <Box sx={{
                    flex:1,
                    display:"flex",
                    flexFlow: "column nowrap",
                    justifyContent:"center",
                    alignItems:"center",
                }}> 
                
                <Typography
                paddingBottom={2}
                variant="h1"
                color="white"
                fontSize={30}
                fontFamily="Georgia, serif"
                padding={2}
                textAlign= "center">
                    My passion and focus is Software Development
                </Typography>

                <p
                // paddingBottom={2}
                className="paddingLarge serif white">
                    As an undergraduate Software Engineering student, I am constantly excited about my projects
                     and learning new things. Every day, I feel like I am unlocking a new piece of the puzzle and building my skills as a programmer. 
                     Whether it's creating a new app, playing with neural networks, or working with graphics, I am always eager to dive in and learn as much as I can.
                </p>

                <Button variant="outlined" 
                sx={{
                    color:"white",
                    borderColor:"#FF9C56",
                }}
                
                onClick={()=>{
                    navigate("/projects")
                }}> Explore My Projects </Button>
                
                
                </Box>
                <Box sx={{
                    
                    flex:1
                }}> </Box>


            </Box>


        </Box>

        </Box>
    )


}