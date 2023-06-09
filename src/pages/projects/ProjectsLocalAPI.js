import NeuralNetwork from "../../assets/neuralNetwork.jpg"
import MSP430 from "../../assets/msp430.jpg"
import MovieTheatre from "../../assets/movieTheatre.png"
import settingsRattle from "../../assets/settings.png"
import PURE from "../../assets/pure.png"
import rattle from "../../assets/seng401.png"

const projects = [
    {
        index:0,
        title:"Rattle - Customizable chatting service" ,
        description:"Real Time Communication with the Ability to Customize UI",
        link:"https://github.com/MylesPribeg/SENG401ChatApp",
        image: rattle,
        hasPopUp:true,
        directLink:false,

        startDate:"January 20th 2023",
        endDate:"March 29th 2023",
        popUp:{
            
            paragraphs:[
                {
                    content:"The real-time chatting application with customizable themes is a full-stack web application that allows users to chat with one another in real-time while giving them the ability to personalize their user interface. The application is developed using the MERN stack, which includes MongoDB, ExpressJS, ReactJS, and NodeJS. the delpoyed application can be found at https://rattlechat.netlify.app",
                    
                    
                    image:"",
                },{
                    content:"The application consists of a server-side and a client-side. The server-side is built using NodeJS and ExpressJS, and it is responsible for handling the communication between users and persisting the chat messages in a MongoDB database. The server also implements web sockets using Socket.IO, which allows real-time communication between users. fruthermore we implemented video calling between members in groups to allow for quicker communication" ,
                    
                    image:"",

                },{
                    content: "On the client-side, the user interface is built using ReactJS, and it is responsible for displaying the chat interface and handling user interactions. The user interface is customizable, and users can choose from a variety of themes, which are stored in the server-side. The client-side communicates with the server-side through REST APIs and web sockets.",

                },{
                    content:"The application provides several features, including user authentication, direct messaging, and group chat. Users can create and join multiple chat rooms, and they can send messages to other users in real-time. Users can also customize their profile, including their name and profile picture. To personalize the user interface, users can choose from a variety of themes, which include different colors, fonts, and layouts. The themes are stored in the server-side, and users can select their preferred theme from the client-side. When a user selects a theme, the client-side requests the theme data from the server-side, and it updates the user interface accordingly",
                    image:settingsRattle,
                }, {
                    content:"Overall, the real-time chatting application with customizable themes is a full-stack web application that provides real-time communication between users while giving them the ability to personalize their user interface. The application is built using the MERN stack, which provides a scalable and robust development platform."
                }

            ],
            icon:"github"

        }

    },{
        index:1,
        title:"Neural Network Library" ,
        description:"Personnel Neural Network for Data and Image processing",
        hasPopUp:false,
        directLink:true,
        link:"https://github.com/sa318sha/NN_Library",
        image: NeuralNetwork,
        startDate:"September 2021",
        endDate:" January 2022",
    },{
        index:2,
        title:"MicroController LCD movement program" ,
        description:"Movement Program that detects Users Orientation and Momentum using Gyroscope",
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

            ],
        }
    },
    {
        index:3,
        title: "Undergraduate Research",
        description:"Researched Methodologies in Implementing Federated Learning with Kubernetes for local deployment",
        image:PURE,
        link:"",
        hasPopUp:true,
        directLink:false,
        startDate:"April 2022",
        endDate:" August 2022",
        popUp:{

            paragraphs:[
                {
                    content:"The research focuses on distributed learning systems (DLS) and federated learning which prioritize the security of its users and support large-scale applications and data. During the research we combined federated learning with the Kubernetes architecture to provide a further layer of abstraction to keep user node's data private.",
                    image:"",
                    
                    
                    
                },{
                    content:"during the research one of the set backs was that user agent nodes were not able to leave the system willing. this was due to all the power of the scheduling residing in the actual kubernetes scheduler. However, during the research it was found that the Kubernetes Scheduler could be extended to account for user edge nodes joining and leaving, thus creating a privacy barrier between the nodes and the server. during development, we used the Raspberry as an edge device with the k3s distribution of the Kubernetes framework to provide an interface to us that tells us what nodes are available and how well-suited they are for a task.",
                    image:"",
                }

            ]
        }
    },{
        index:4,
        title:"Movie Theatre Booking System",
        description:"Users are able to login with a UI and Book a Movie at Available Showtimes and theatres",
        link:"https://github.com/noornawaz1/ENSF480---Final-Project",
        // image: MovieTheatre,
        hasPopUp:true,
        directLink:false,
        startDate:"September 2022",
        endDate:" December 2022",
        popUp:{

            paragraphs:[
                { 
                    image:"",
                    content: "• Coordinated development using waterfall techniques and comprehensive UML modelling Designed and implemented a GUI, which included a custom graphical seat-selection screen, using Java Swing. Interfaced with a MySQL database containing information such as movies, theatres, seats, registered users. Contributed to an extensive unit test suite written using JUnit."
                }
            ],
            icon:"github"

        }

    }
    ,{
        index:5,
        title:"FoodBank simulated service" ,
        description:"",
        link:"",
        hasPopUp:true,
        directLink:false,
        
        // image: MSP430,
        startDate:"January 2022",
        endDate:" March 2022",
        popUp:{

            paragraphs:[
                { 
                    image:"",
                    content: "Coordinated development using waterfall techniques and comprehensive UML modelling, Designed and implemented a GUI, which included a custom graphical seat-selection screen, using Java Swing. Interfaced with a MySQL database containing information such as Hamper, Food Items, Houses, registered users meals, etc. Contributed to an extensive unit test suite written using JUnit."
                }
            ]
        }
        // image: NeuralNetwork
    }
    
    // ,{
    //     index:6,
    //     title:"Medical Booking Clinic" ,
    //     description:"Graphical UI used to communicate with database to book and manage appointment",
    //     link:"",
    //     // image: NeuralNetwork
    // }
       
    
       



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