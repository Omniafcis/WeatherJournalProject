
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1) +'.'+ d.getDate()+'.'+ d.getFullYear();


// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '17fca6e6ccc451f27504f23759b966a9';

// Event listener to add function to existing HTML DOM element
const btnGenerate = document.querySelector('#generate');
btnGenerate.addEventListener('click',generateClicked);

/* Function called by event listener */
function generateClicked(event) {
    //Gets the user data from UI
    const zipCode = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;
    
    //Checkes if the user entered the zip code and his feelings .. if either of them is empty them alert the user to enter them
    if(zipCode === '') {
        alert('Please enter the zip code!!!');
        document.getElementById('zip').focus();
    } else if(feeling === '') {
        alert('Please enter how do you feel now!!!');
        document.getElementById('feelings').focus();
    } else {
        //now we are sure we have the zip code and feelings from the user then we call the getWeather function and then post the whole entry to server then 
        //call showWeatherData function to get all the entries from the server and show them in UI.
        getWeather(baseURL,apiKey,zipCode)
            .then((weatherData) => {
            postData('http://localhost:8000/addData', {temperature: weatherData.main.temp, date: newDate, feelings: feeling});
        }).then(() => showWeatherData('http://localhost:8000/all'));
    }
}
/* Function to GET Web API Data*/
//this function will send the base URL with the zip code entered by the user and the api key generated to the weather api and waits for 
//the weather data came from the weather api 
const getWeather = async (baseURL, key, zipCode) => {
    const request = await fetch (baseURL+zipCode+'&units=metric&appid='+key);
    try {
        const weatherData = await request.json();
        return weatherData;
    } catch(error) {
        //catches error if there is any in the get process from the web api
        console.log("error",error);
    }
}
/* Function to POST data */
//This function will post the entry we prepared with data we want to save (temp,date,feeling) to the server 
const postData = async ( url = '', data = {})=>{
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        return newData;
      } catch(error) {
          //catches error if there is any in the post process to the server
          console.log("error", error);
      }
  };

/* Function to GET Project Data */
//this function is used to get the data entries posted to the server and show the last entry on the UI text areas to the user
const showWeatherData = async (url = '') => {
    const request = await fetch(url);
    try {
        const dataReturn = await request.json();
        document.getElementById('date').innerHTML = dataReturn['x'].date;
        document.getElementById('temp').innerHTML = dataReturn['x'].temperature;
        document.getElementById('content').innerHTML = dataReturn['x'].feelings;
    } catch(error) {
        //catches error if there is any in the get process from the server
        console.log("error",error);
    }
};