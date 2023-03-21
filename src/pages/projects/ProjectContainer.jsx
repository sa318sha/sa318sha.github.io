

import { Box } from "@mui/system"
import "../../common/CommonFonts.css"
const ProjectContainer = (props)=>{



    return (
        <Box sx={{
            display:"flex",
            width:"90%",
            height:"90%",
            border:"1px solid white",
        }}> 
           {props.children}


        
        </Box>
       
    )
}

export{ ProjectContainer}