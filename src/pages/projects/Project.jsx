
import "../../common/CommonFonts.css"
import { Box } from "@mui/system"
import "./Project.css"
export default function Project (props){



    return (
        <Box className="white center"
        sx={{
            width:"100%",
            minHeight:"100dvh",
            background:"black",
            display:"flex",
            flexFlow:"column nowrap",
            justifyContent:"center",
            alignItems:"center",
        }}
        >
            <h3 >{props.information.name}</h3>
            <p> {props.information.description}</p>
            
            <Box sx = {{

            }}>



            </Box>





        </Box>
    )
}