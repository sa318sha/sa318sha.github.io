import { Box } from "@mui/system";
import "../../common/CommonFonts.css"

export default  function ProjectPlaceHolder(props){
    //  `url(sweettexture.jpg) top center / 200px 200px no-repeat fixed padding-box content-box red;`

    const img = props.image;
    var background;
    if(img){
        background = `url(${props.img}) center center cover no-repeat`
    }
    else{
        background="grey"
    }
    return (

        <Box className="orangeBox centerColumn" onClick={()=>{
            props.clickHandler?props.clickHandler():console.log("hello world")


        }} sx={{

            width:"30%",
            minWidth:"30%",
            maxWidth:"300px",
            height:"100%",
            background: background,
            maxHeight:"200px",
            justifyContent:"spaceBetween",
            borderRadius:"5px",
            




        }}>

            <h3 className="white paddingLittle noMargin">
                {props.title?props.title:"no title includes"}

            </h3>
            <p className="white paddingLittle noMargin">
                {props.description?props.description:"please include a breif description"}
            </p>

        </Box>

    )

}