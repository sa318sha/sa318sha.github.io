

import { Box } from "@mui/system"
import "../../common/CommonFonts.css"
import "./Project.css"
import { Swiper, SwiperSlide } from "swiper/react";

export default function(props){


    return (
        <div className="projectContainer" >
        <div className="project">
            {props.img?<img className="projectImage" src={props.img} alt=""/>: ""}   
            <div className="projectDescriptionsContainer white">
                <h3 className="projectHeader marginLittle center  "> {props.title} </h3>
                
            
                <p className="projectDescription marginLittle center smallerFontSize">{props.description}</p>
                
                    {props.link
                    ? 
                    <a  href={props.link}   className="ProjectsLink centerElementsColumn noCursor projectLinkStyling"> 
                    <span className="material-symbols-outlined cursor iconStyling"> 
                        code
                    </span> 
                    </a>
                    :
                    <div className="centerElementsColumn">
                    <button onClick={(e)=>{
                        e.stopPropagation()
                        console.log("pop a")
                        props.setPopUp(true)
                        props.setPopUpIndex(props.index)
                        
                        }}  className="ProjectsLink projectLinkStyling cursor noStyleButton"> 

                    <span className="material-symbols-outlined iconStyling">
                    open_in_full
                    </span>
                    </button>
                    </div>
                    }
                    
            </div>
        </div>
    </div>
       
    )
}
