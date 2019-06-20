require("dotenv").config();
var keys = require("./keys");

var axios = require("axios");
var fs = require("fs");
var inquirer = require("inquirer");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

console.log(process.argv, "what we type in terminal");
var commands = process.argv[2]
var userInput = process.argv[3]
console.log(commands, userInput)


function liribotWork () {
  switch (command) {
    case "concert-this":
    bandStuff();
    break;
    case "spotify-this-song":
    spotifyStuff ();
    break;
    case "movie-this":
    movieStuff ();
    break;
    case "do-what-it-says":
    miscStuff ();
    break;
  }
  }
liribotWork ();

function spotifyStuff () {
  spotify
  .search({ type: 'track', query: 'All the Small Things', limit: 5})
  .then(function(response) {
    console.log(response.tracks);
  })
  .catch(function(err) {
    // console.log(err); this is a test
    if(error.response){
      console.log("~~~~~~Data~~~~");
      console.log(error.response.data);
      console.log("~~~~Status~~~");
      console.log(error.response.status);
      console.log("~~~~Headers~~~");
      console.log(error.response.headers);
    } else if (error.resquest) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
    }
  )};

function bandStuff () {
axios.get("https://rest.bandsintown.com/artists/" + "digablePlanets" + "/events?app_id=codingbootcamp")

.then (
  function(response){
    // console.log("what we got back from spotify", response. data);
    console.log("what we got back from spotify", response.data[0].venue.name);
  }
)
.catch(function(error){
  if(error.response){
    console.log("~~~~~~Data~~~~");
    console.log(error.response.data);
    console.log("~~~~Status~~~");
    console.log(error.response.status);
    console.log("~~~~Headers~~~");
    console.log(error.response.headers);
  } else if (error.resquest) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
  console.log(error.config);
  }
)};
// bandStuff ();

function movieStuff (){
axios.get("http://www.omdbapi.com/?t=jaws&apikey=trilogy") 

.then (
  function(response){
    // console.log("what we got back from ombd", response.data.Title); e.g. string containing the show data we print out to the console
    console.log("The movie's title is: " + response.data.Title);
    console.log("The movie was released in the year: " + response.data.Year);
    console.log("IMBD rated the movie", response.data.imbdRating);
    console.log("Rotten Tomatoes rated the movie: " + response.data.Ratings[1].value);
    console.log("The movie was filmed in: " + response.data.Country);
    console.log("The movie is in this language: " + response.data.Language);
    console.log("The plot goes like this: " + response.data.Plot);
    console.log("The actors consist of: " + response.data.Actors);
  }
)
.catch(function(error) {
  if (error.response) {
    console.log("---------------Data---------------");
    console.log(error.response.data);
    console.log("---------------Status---------------");
    console.log(error.response.status);
    console.log("---------------Status---------------");
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
  console.log(error.config);
});

}; 
// the thing that makes it go
// movieStuff ();

