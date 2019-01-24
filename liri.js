var request = require('request');
var fs = require('fs');
var Spotify = require('node-spotify-api');

var dotenv = require("dotenv").config();
var keys = require("./keys.js");

//moment js
var moment = require('moment');
// moment().format();

//spotify keys
var spotify = new Spotify(keys.spotify);

//variable for input
var command = process.argv[2];
var input = process.argv[3];

//    * `concert-this`
https://rest.bandsintown.com/artists/adel/events?app_id=codingbootcamp#
function concertThis(bandQuery) {

    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "https://rest.bandsintown.com/artists/" + bandQuery + "/events?app_id=codingbootcamp#";
    // This line is just to help us debug against the actual URL.
    // console.log(queryUrl);

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            var concertData = JSON.parse(body);


            for (i = 0; i < concertData.length && i < 5; i++) {

                var momentDT = moment(concertData[i].datetime).format('L');
                // console.log(concertData);
                console.log("===============================");
                console.log("Venue Name : " + concertData[i].venue.name +
                    "\nVenue Location: " + concertData[i].venue.city + "," + concertData[i].venue.country +
                    "\nDate of the Event: " + momentDT +
                    "\n===============================");
            }
        };
    });
}
//     * `spotify-this-song`
function spotifyThis(musicSearch) {

    //  * If no song is provided then your program will default to "The Sign" by Ace of Base.
    if (musicSearch === undefined) {
        musicSearch = "The Sign Ace of Base";
    }

    spotify.search({ type: 'track', query: musicSearch }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        else {
            for (i = 0; i < data.tracks.items.length && i < 1; i++) {

                var musicQuery = data.tracks.items[i];
                // console.log(musicQuery);
                console.log("===============================");
                console.log("Artist: " + musicQuery.artists[0].name +
                    "\nSong Name: " + musicQuery.name +
                    "\nLink to Song: " + musicQuery.external_urls.spotify +
                    "\nAlbum Name: " + musicQuery.album.name +

                    "\n===============================");
            }
        };
    });
}


// * `movie-this`
function movieThis(movieQuery) {

    // * If the user doesn't type a movie in, the program will output data for the movie 'Mr.Nobody.'
    if (movieQuery === undefined || null) {
        movieQuery = "Mr.Nobody";
    }

    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieQuery + "&y=&plot=short&apikey=trilogy";

    // console.log(queryUrl);

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
            // JSON.parse for legibility
            var movieData = JSON.parse(body);

            //  console.log(movieData);                  
            console.log("===============================");
            console.log("Movie Title: " + movieData.Title +
                "\nYear: " + movieData.Year +
                "\nIMDB Rating: " + movieData.imdbRating +
                "\nRotten Tomatoes Rating: " + movieData.Ratings[1].Value +
                "\nCountry: " + movieData.Country +
                "\nLanguage: " + movieData.Language +
                "\nPlot: " + movieData.Plot +
                "\nActors: " + movieData.Actors +
                "\n===============================");
        };
    });
}

// Switch for commands for all functions
var ask = function (commands, Data) {
    switch (commands) {
        case "concert-this":
            concertThis(Data);
            break;
        case "movie-this":
            movieThis(Data);
            break;
        case 'spotify-this-song':
            spotifyThis(Data);
            break;
        case 'do-what-it-says':
            doWhatItSays();
            break;
        default:
            console.log("**** Invalid command **** \nPlease try again");
    }
};

//Do what it says reads text from random.txt file, command is ran
var doWhatItSays = function () {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) throw err;
        var randomText = data.split(",");

        if (randomText.length == 2) {
            ask(randomText[0], randomText[1]);
        }
        else if (randomText.length == 1) {
            ask(randomText[0]);
        }
    });
}
// asigns args to ask for switch case
ask(command, input);





