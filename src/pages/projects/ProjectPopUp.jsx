
import { useEffect } from "react"
import close from "../../assets/close.svg"
import github from "../../assets/github.svg"


const displayLink = (link, icon) => {

  if (link) {
    switch (icon) {
      case "github":
        return (
          <div className="centerColumn" >
            <p className="lightGrey"> If Interested, take a look at the code below!</p>
            <a className="" href={link}>
              <img className="popUpiconStyling" src={github} height="3em" width="3em" alt=""/>
            </a>
          </div>
        )
    }
  } else {
    return ""
  }
}


export default function PopUp(props) {

  // console.log("popup project " + props.project.title)

  // useEffect(()=>{
  //     window.addEventListener("scroll")
  // },[])

  const handleCloseClick = (e) => {
    props.close(false)
  }


  return (
    <div className="popUp">
      <div className="projectPopUpContainer" onClick={((e) => e.stopPropagation())}>
        <div className="closeIcon">
          <img onClick={handleCloseClick} src={close} alt="" />

        </div>

        <div className="projectPopUpWrapper">

          <div className="projectPopUpTitle lightGrey">
            <h3>{props.project.title}
            </h3>
          </div>
          <div className="popUpDescription center lightGrey">
            <h4 className="noMargin">{props.project.description}</h4>
          </div>
          {props.project.startDate ?
            <div className="popUpDescription center lightGrey">
              <p className="marginLittle">{props.project.startDate} - {props.project.endDate}</p>
            </div> :
            ""}

          <div className="popUpParagraphsWrapper lightGrey">
            {props.project.popUp.paragraphs.map((paragraph, index) => {

              return <div key={index} className="popUpParagraph">
                <div>{paragraph.image ? <div className="paragraphImageHolder"><img src={paragraph.image} className="paragraphImage" alt="" /></div> : ""}{paragraph.content}</div>

              </div>
            })}
          </div>
          <div>
            {displayLink(props.project.link, props.project.popUp.icon)}
          </div>



        </div>

      </div>
    </div>

  )


}