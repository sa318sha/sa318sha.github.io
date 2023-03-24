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
                
                width:"90%",
                height:"90%",
                // backgroundColor:"10",
                borderRadius:"10px",
                display:"flex",
                flexFlow:"row wrap",
                justifyContent:"space-between",
                alignItems:"center"
                // gap:"50px",
            }}>

                
                


            <Box sx={{
                    flex:1.4,
                    margin:"2em 4em auto 4em",
                    padding:"4em 2em",
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
                    flex:1,
                    margin:"auto 4em 0em 4em",
                    padding:"4em 2em",
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