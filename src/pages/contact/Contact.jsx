import React from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import {Button} from "@mui/material";
import "./Contact.css"

export default function Contact(props){

    return (
        <Box
        sx={{
            height: "100vh",
            width:"100%",
            background:"black",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }}>
            <Box className="container"
            sx={{
                margin:"0",
                
                width:"80%",
                height:"80%",
                // border:"2px solid #FFBD8E",
                // backgroundColor:"10",
                borderRadius:"10px",
                display:"grid",
                gridGap:"20px",
                gridTemplateRows: "repeat(3,1fr)",
                gridTemplateColumns:"repeat(4,1fr)",
                // gap:"50px",
            }}>

                
                


            <Box sx={{
                    gridArea:"1/1/3/3",
                    flex:1,
                    display:"flex",
                    border:"2px solid #FFBD8E",
                borderRadius:"10px",
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
                    Email!
                </Typography>

                <p
                // paddingBottom={2}
                className="paddingLarge serif white center">
                    if you want to get in contact with me, or have any additional inquiries. Feel free to shoot me an email with the button below
                </p>

                {/* <Button variant="outlined" 
                sx={{
                    color:"white",
                    borderColor:"#FF9C56",
                }}
                
                onClick={()=>{
                   
                }}> Contact </Button> */}
                <a className="emailBButton" href="mailto:kobrusevsasha318@gmail.com">E-Mail to Sasha</a>
                
                
            </Box>
             
            <Box sx={{
                    gridArea:"2/3/4/5",
                    flex:1,
                    display:"flex",
                    border:"2px solid #FFBD8E",
                borderRadius:"10px",
                    flexFlow: "column nowrap",
                    justifyContent:"center",
                    alignItems:"center",
                    marginLeft:"200px",
                }}> 
                
                <Typography
                paddingBottom={2}
                variant="h1"
                color="white"
                fontSize={30}
                fontFamily="Georgia, serif"
                padding={2}
                textAlign= "center">
                    Download My Resume!
                </Typography>

                

                <Button variant="outlined" 
                sx={{
                    color:"white",
                    borderColor:"#FF9C56",
                }}
                
                onClick> Resume </Button>
            </Box>


            


            
            </Box>

            
        </Box>
    )


}