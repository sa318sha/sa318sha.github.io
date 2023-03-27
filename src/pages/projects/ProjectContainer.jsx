

import { Box } from "@mui/system"
import "../../common/CommonFonts.css"
import "./Project.css"
const ProjectContainer = (props)=>{


    return (
        <div className="projectContainer">
            <div className="project">
                {props.img?<img className="projectImage" src={props.img} alt=""/>: " supplied"}
                
                <div className="projectDescriptionsContainer white">
                    <h3 className="projectHeader marginLittle center  "> {props.title} </h3>
                    
                
                    <p className="projectDescription marginLittle center smallerFontSize">{props.description}</p>
                    
                    <div>
                        <a  href={props.link?props.link:""}   className="ProjectsLink centerElementsColumn"> <span className="material-symbols-outlined BGgreen">
                        code
                        </span> </a>
                    </div>
                </div>
                
                




            </div>
        </div>
       
    )
}

export{ ProjectContainer}