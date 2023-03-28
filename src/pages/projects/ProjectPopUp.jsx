
import { useEffect } from "react"
import close from "../../assets/close.svg"

export default function PopUp(props){

    // console.log("popup project " + props.project.title)

    // useEffect(()=>{
    //     window.addEventListener("scroll")
    // },[])

    const handleCloseClick = (e) =>{
        props.close(false)
    }


    return(
        <div className="popUp">
            <div className="projectPopUpContainer" onClick={((e)=> e.stopPropagation())}>
                <div className="closeIcon">
                <img onClick={handleCloseClick} src={close} alt="" />

                </div>
                <div className="projectPopUpWrapper">

                    <div className="projectPopUpTitle lightGrey">
                        <h3>{props.project.title}
                        </h3>
                    </div>
                    <div className="popUpDescription center lightGrey">
                        <h5 className="noMargin">{props.project.description}</h5>
                    </div>
                    <div className="popUpParagraphsWrapper lightGrey">
                        {props.project.popUp.paragraphs.map((paragraph, index) =>{

                            return <div key={index} className="popUpParagraph">
                                <div>{paragraph.image?<div className="paragraphImageHolder"><img src={paragraph.image} className="paragraphImage" alt=""/></div>:""}{paragraph.content}</div>

                            </div>
                        })}
                    </div>
                    

                </div>

            </div>
        </div>

    )


}