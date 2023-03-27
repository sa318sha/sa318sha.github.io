import NeuralNetwork from "../../assets/neuralNetwork.jpg"


const projects = [
    {
        title:"Neural Network Library" ,
        description:"Personnel Neural Network for data and image processing",
        link:"https://github.com/sa318sha/NN_Library",
        image: NeuralNetwork
    },{
        title:"MicroController LCD movement program" ,
        description:"movement program that detected users orientation and movement to save energy",
        link:"",
        image: NeuralNetwork
    },
    {
        title:"Rattle - Customizable chatting service" ,
        description:"real time communication with the ability to customize UI",
        link:"",
        image: NeuralNetwork
    },{
        title:"Movie Theatre Booking System",
        description:"Users are able to login with a UI and book a movie at available showtimes and theatres",
        link:"",
        image: NeuralNetwork
    },{
        
        title:"Medical Booking Clinic" ,
        description:"Graphical UI used to communicate with database to book and manage appointment",
        link:"",
        image: NeuralNetwork
    },{
        title:"FoodBack simulated service" ,
        description:"",
        link:"",
        image: NeuralNetwork
    }
       
    
       



]


export function getfirst4Projects(){
    return projects.slice(0,4)
}

export function getRestOfProjects(){
    return projects.slice(4)
}