// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder which contains (.html, .js, .css ) files
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

// Callback function to feedback that the server is running on the defined port
function listening(){
     console.log("server running"); 
     console.log(`running on localhost: ${port}`);
}


// Initialize '/all' route with a callback function getAllData
app.get('/all',getAllData);


// Callback function to complete GET '/all'
function getAllData(request,response) {
    response.send(projectData);
}
// Post Route which posts the entry with data gathered from the user and the weather api to the server
app.post('/addData', addWeatherData);

//Callback function to POST '/addData' route
function addWeatherData(request, response) {
    //define a new entry object with the data sent in the request
    const newData = {
        date: request.body.date,
        temperature: request.body.temperature,
        feelings:request.body.feelings
    };
    //define a property in the projectData object with the new entry 
    projectData['x']= newData;
    response.send(projectData);
}

