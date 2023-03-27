

import { Box } from "@mui/system"
import "../../common/CommonFonts.css"
import "./Project.css"
import { Swiper, SwiperSlide } from "swiper/react";

export default function(props){


    return (
        <div className="olderProjectContainer" >
            <div className="project">
                {props.img?<img className="projectImage" src={props.img} alt=""/>: " supplied"}
                
                <div className="projectDescriptionsContainer white">
                    <h3 className="projectHeader marginLittle center  "> {props.title} </h3>
                                        
                    <a className="ProjectsLink centerElementsColumn"> <span className="material-symbols-outlined BGgreen">code</span> </a>
                </div>
                
                
                
                {/* img
                    description
                    link
                */}



            </div>
        </div>
       
    )
}
