# LIRI Bot

<video src="https://youtu.be/CwSIgbelS0Y" width="320" height="200" controls preload></video>

## Instructions
Language Interpretation and Recognition Interface ("LIRI bot") is a low-key, powerful robot similar to iPhone's SIRI. LIRI bot takes in one of the following commands:
    (1) concert-this 
        - Find out where and when your favorite band/singer will perform live at a concert.
        - Type in "node liri.js concert-this halsey". I love Halsey, but you can switch it to Lady Gaga, or other awesome musical artists/band instead ;-) 

    (2) spotify-this-song
        - Type out "node liri.js spotify-this-song eastside" to get a link to listen to the song, artist, song name, and album name. 

    (3) movie-this
        - Type out "node liri.js movie-this moana" or your fave movie to get the title, the release year, IMDB and rotten tomatoes rating, country, language, plot and actors of your fave movie

    4) do-what-it-says
        - Feelin adventurous? Type out "node liri.js do-what-it-says " to get a random message from LIRI bot

### Powered by Node.JS
Technically, LIRI bot is a command line node app that takes in parameters and gives you back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
The requests you send uses axios package to the Bands in Town, Spotify and OMDB APIs. 

* [NODE.js](https://nodejs.org/en/about/) 
* [Javascript (JS)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Author
* **Joey Badua** - [LIRI-Node-App](https://github.com/joannebadua)