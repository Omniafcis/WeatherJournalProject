# Weather-Journal App Project

## Table of Contents
* Architecture
* Language Used
* Web API Used
* Overview
* Features
* Instructions

## Architecture
* The project folder consists
    ->website
        -app.js
        -index.html
        -style.css
    ->server.js
    ->README.md
    
## Language Used
* The language used in the project is Javascript

## Web API Used
* web api used from OpenWeatherMap.com

## Overview
This project is an asynchronous web page that uses Web API and user data to dynamically update the UI.

## Features
* API credentials are created to get the api key.
* when the user clicks on generate button the application checks if the needed data has been entered by the user or not and if there is any missing data the page alerts the user to enter the missing data and focus the missing text input for the user.
* if the fields entered by the user correctly then the page sends the zip code entered and the api key to the web api to get back the temperature of this place and post the entry to the server.
* Then it gets the latest entry from the server and show it in the textarea.

## Instructions
* Try to click the generate button without entering any data in the zip code or feeling fields and see the alert that appears for the user to enter the missing field.
* Enter a zip code for the place you want to check the weather in ( in US ).
* Enter what are you feeling now.
* Click on Generate button.
* The last entry you has just entered to query for is shown to you under 3 items (temperature, date of today, your feeling).

