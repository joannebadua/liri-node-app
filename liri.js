var keys = require("./keys.js");

var axios = require("axios");
var fs = require("fs");
var inquirer = require("inquirer");
var Spotify = require('node-spotify-api');
console.log(process.argv, "what we type in terminal");
var commands = process.argv[2]
var title = process.argv[3]
console.log(commands, title)

var spotify = new Spotify({
  id: "55499f1c409f4404aaa1d9b52e318f12",
  secret: "5698115edc194b749a3ba9bd9a583469"
});
function spotifyStuff () {
  spotify
  .search({ type: 'track', query: 'All the Small Things', limit: 5})
  .then(function(response) {
    console.log(response.tracks);
  })
  .catch(function(err) {
    console.log(err);
  });
};

function bandStuff () {
axios.get("https://rest.bandsintown.com/artists/" + "digablePlanets" + "/events?app_id=codingbootcamp")

.then (
  function(response){
    // console.log("what we got back from spotify", response. data);
    console.log("what we got back from spotify", response.data[0].venue.name);
  }
)

};
// bandStuff ();

function movieStuff (){
axios.get("http://www.omdbapi.com/?t=jaws&apikey=trilogy") 

.then (
  function(response){
    console.log("what we got back from ombd", response.data.Title);
    console.log("what we got back from ombd", response.data.Year);
  }
)

}; 
// the thing that makes it go
// movieStuff ();