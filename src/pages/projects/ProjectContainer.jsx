

import { Box } from "@mui/system"
import "../../common/CommonFonts.css"
import "./Project.css"
import Open from  "../../assets/open_in_full.svg"


const ProjectContainer = (props)=>{


    return (
        <div className="projectContainer" >
            <div className="project">
                {props.picture?<img className="projectImage" src={props.project.image} alt=""/>: ""}   
                <div className="projectDescriptionsContainer white">
                    <h3 className="projectHeader marginLittle center  "> {props.project.title} </h3>
                        
                    {props.description?
                        <p className="projectDescription marginLittle center smallerFontSize">{props.project.description}</p>
                        :
                        ""
                        }
                    
                        {props.project.directLink
                        ? 
                        <a  href={props.project.link}   className="ProjectsLink centerElementsColumn noCursor projectLinkStyling"> 
                        <span className="material-symbols-outlined cursor iconStyling"> 
                            code
                        </span> 
                        </a>
                        :
                        <div className="centerElementsColumn">
                        <button onClick={(e)=>{
                            e.stopPropagation()
                            window.scrollTo({
                                top:0,
                                behavior:"smooth",
                            })
                            props.setPopUp(true)
                            props.setPopUpIndex(props.project.index)
                            
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

export{ ProjectContainer}