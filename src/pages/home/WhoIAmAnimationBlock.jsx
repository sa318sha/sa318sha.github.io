import "./WhoIAmAnimationBlock.css"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import "../../common/CommonFonts.css"





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
        },16300)
        

    },[])
    

    function renderAnimation(renderState){
        
        // if(true){
        //     return (
    
    
        //         <>
        //         <div className="textContainer">
        //                 <p class="format animation1" >Hello :)</p>
        //             </div>
        //             <div className="textContainer">
        //                 <p class="format animation2" >My Name is Sasha</p>
    
        //             </div>
        //             <Box sx={{
        //                 width:"25rem",
        //                 textAlign: "center",
        //                 display:"flex",
        //                 justifyContent: "center",
        //                 alignItems: "center",
        //             }}>
        //                 <p class="format animation3" >I am {variable}</p>
        //             </Box>
                    
        //             <Button className="animation4" variant="outlined"
        //             sx={{
        //                 color:"white ",
        //                 borderColor:"#FFBD8E",
        //                 fontSize:"20px",
        //                 fontFamily: "orpheusPro",
        //                 padding:"0.5em 1em",
                        
        //             }}
        //             onClick={()=>{
        //                 navigate("/About")
        //                 // console.log(" world")
        //             }}><div>Learn More</div></Button>
                
                
        //         </>
        //     )
        // }else{
    
        // }
    }
    return (
        
            <div class="centerElementsColumn animationContainer">
                
    
    
                
                    <div className="textContainer centerElementsRow">
                        <p class="format animation1" >Hello :)</p>
                    </div>
                    <div className="textContainer centerElementsRow">
                        <p class="format animation2" >My Name is Sasha</p>
    
                    </div>
                    <div className="changingTextContainer centerElementsRow">
                        <p class="format animation3" >I am {variable}</p>
                    </div>
                    
                    <button className=" learnMoreButton animation4"
                    onClick={()=> navigate("/about")}>
                        Learn more
                    </button>
                
                
                
            
            </div>
        
        


    )

}