import "./WhoIAmAnimationBlock.css"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"







export default function WhoIAmAnimationBlock({firstRender}){

    const navigate = useNavigate()
    
    const [variable, setVariable] = useState("a Student")

    useEffect(() =>{

        console.log("in use effect")
        setTimeout(()=>{
            setVariable("an Innovator")
        },13000)
        setTimeout(()=>{
            setVariable("an Engineer!")
        },15800)
        

    },[])
    

    function renderAnimation(renderState){
        
        if(true){
            return (
    
    
                <>
                <div className="textContainer">
                        <p class="format animation1" >Hello :)</p>
                    </div>
                    <div className="textContainer">
                        <p class="format animation2" >My Name is Sasha</p>
    
                    </div>
                    <Box sx={{
                        width:"25rem",
                        textAlign: "center",
                        display:"flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <p class="format animation3" >I am {variable}</p>
                    </Box>
                    
                    <Button className="animation4" variant="outlined"
                    sx={{
                        color:"white ",
                        borderColor:"#FFBD8E",
                        fontSize:"20px",
                        fontFamily: "orpheusPro",
                    }}
                    onClick={()=>{
                        navigate("/About")
                        // console.log(" world")
                    }}>Learn More</Button>
                
                
                </>
            )
        }else{
    
        }
    }
    return (
        
            <Box class="animationContainer"
            
            sx={{

                // display: "inline-block",
                colour:"white",
                textAlign:"center"
            }}
            >
                {renderAnimation(firstRender)}

                

                {/* {firstRender? 
                    <>
                    <p class="format animation1">Hello <br></br> My Name Is Sasha.</p> 
                    <p class="format animation2"> I am {variable}</p> 
                    </>
                    : 
                    <>
                    <p className="format"> Hello <br></br> My Name Is Sasha.</p> 
                    <p className="format"> I am an Engineer! </p> 
                    </>
                    } */}

            </Box>
        
        


    )

}