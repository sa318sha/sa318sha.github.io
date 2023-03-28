import NeuralNetwork from "../../assets/neuralNetwork.jpg"
import MSP430 from "../../assets/msp430.jpg"
import MovieTheatre from "../../assets/movieTheatre.png"
import settingsRattle from "../../assets/settings.png"
import PURE from "../../assets/pure.png"

const projects = [
    {
        index:0,
        title:"Neural Network Library" ,
        description:"Personnel Neural Network for data and image processing",
        hasPopUp:false,
        directLink:true,
        link:"https://github.com/sa318sha/NN_Library",
        image: NeuralNetwork,
        startDate:"September 2021",
        endDate:" January 2022",
    },{
        index:1,
        title:"MicroController LCD movement program" ,
        description:"movement program that detects users orientation and momentum using gyroscope",
        link:"",
        hasPopUp:true,
        directLink:false,

        image: MSP430,
        startDate:"January 2022",
        endDate:" March 2022",
        popUp:{

            paragraphs:[
                {
                    content:"The creation of an motion and orientation project using an MSP430 microcontroller and a graphic LCD module is a fascinating project that involves several aspects of hardware and software development. The program is able to detect when user was moving and was able to record distance travelled. simultaneously. furthermore, when orientation of the gyroscope was placed in the \"Downwards position\". system would turn off to conserve energy",
                    
                    
                    image:"",
                },{
                    content:" Interfaced with peripherals using Inner-Intergrated circuit (I2C) communication. Controlled inputs sent to the microcontroller from  computer through serial communication protocal UART. Displayed status of the program through peripheral LCD. The character LCD is used to display information about the runtime, such as distance travelled and speed. The character LCD is controlled using bit banging, which involves manually toggling the GPIO pins of the microcontroller to send data to the LCD." ,
                    
                    
                    
                    
                    
                    
                    image:"",

                },{
                    content: "Overall, this project involves a combination of hardware and software development, including interfacing with sensors, communication interfaces, and display modules, as well as signal processing and control algorithms. It was a Interesting project that introduced me to the basic of embedded development and challenged my critical thinking about system programming",

                }

            ]
        }
    },
    {
        index:2,
        title:"Rattle - Customizable chatting service" ,
        description:"real time communication with the ability to customize UI",
        link:"https://github.com/ayo1-olabode/SENG401ChatApp",
        image: NeuralNetwork,
        hasPopUp:true,
        directLink:false,

        startDate:"January 20th 2023",
        endDate:"March 29th 2023",
        popUp:{
            
            paragraphs:[
                {
                    content:"The real-time chatting application with customizable themes is a full-stack web application that allows users to chat with one another in real-time while giving them the ability to personalize their user interface. The application is developed using the MERN stack, which includes MongoDB, ExpressJS, ReactJS, and NodeJS.",
                    
                    
                    image:"",
                },{
                    content:"The application consists of a server-side and a client-side. The server-side is built using NodeJS and ExpressJS, and it is responsible for handling the communication between clients and persisting the chat messages in a MongoDB database. The server also implements web sockets using Socket.IO, which allows real-time communication between clients." ,
                    
                    
                    
                    
                    
                    
                    image:"",

                },{
                    content: "On the client-side, the user interface is built using ReactJS, and it is responsible for displaying the chat interface and handling user interactions. The user interface is customizable, and users can choose from a variety of themes, which are stored in the server-side. The client-side communicates with the server-side through REST APIs and web sockets.",

                },{
                    content:"The application provides several features, including user authentication, direct messaging, and group chat. Users can create and join multiple chat rooms, and they can send messages to other users in real-time. Users can also customize their profile, including their name and profile picture. To personalize the user interface, users can choose from a variety of themes, which include different colors, fonts, and layouts. The themes are stored in the server-side, and users can select their preferred theme from the client-side. When a user selects a theme, the client-side requests the theme data from the server-side, and it updates the user interface accordingly",
                    image:settingsRattle,
                }, {
                    content:"Overall, the real-time chatting application with customizable themes is a full-stack web application that provides real-time communication between users while giving them the ability to personalize their user interface. The application is built using the MERN stack, which provides a scalable and robust development platform."
                }

            ]
        }

    },{
        index:3,
        title: "Undergraduate Research",
        description:"researched methodologies in implementing Federated Learning with Kubernetes for local deployment",
        image:PURE,
        hasPopUp:true,
        directLink:false,
    },{
        index:4,
        title:"Movie Theatre Booking System",
        description:"Users are able to login with a UI and book a movie at available showtimes and theatres",
        link:"",
        image: MovieTheatre,
        hasPopUp:true,

    },{
        index:5,
        title:"Medical Booking Clinic" ,
        description:"Graphical UI used to communicate with database to book and manage appointment",
        link:"",
        // image: NeuralNetwork
    },{
        index:6,
        title:"FoodBank simulated service" ,
        description:"",
        link:"",
        // image: NeuralNetwork
    }
       
    
       



]


export function getfirst4Projects(){
    return projects.slice(0,4)
}

export function getRestOfProjects(){
    return projects.slice(4)
}

export function getProject(idx){
    console.log(projects[idx])
    return projects[idx]

}