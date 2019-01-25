# Liri-node-app

This app allows you to search Spotify for songs, Bands In Town for concerts and OMBD for movies.
For a short walk thru video click here: https://drive.google.com/open?id=1hsVpp46Miqv-QcqNZyP8tcqmJVreuJK_

# How to use
Use node liri.js then run one of the following comands with the search parameters:

* concert-this '(artist/band name)'
* spotify-this-song '(song name)'
* movie-this '(movie name)'
* do-what-it-says
* When running a command follow it by desired text/search wrapped with '' or "". 
* These rules apply to all except do-what-it-says, this will read from a txt file and input the command with in it.
* Example: node liri.js movie-this "deadpool"

# When concert-this command is used you will be provided with:
* Venue Name
* Venue location
* Date of the Event

# When spotify-this-song command is used you will be provided with:
* Artist(s)
* The song's name
* A link to the song in Spotify
* The album name
* If no song is provided then your program will default to "The Sign" by Ace of Base.

# When movie-this command is used you will be provided with:
* Movie Title.
* Year the movie came out.
* IMDB Rating.
* Rotten Tomatoes.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.

# When do-what-it-says command:
* Will read a file named random.txt that has a spotify-this-song command in it. This will give you the spotify results of "I want it that way."

# Technologies Used
* JavaScript
* Node.js
* Spotify API
* Bands in Town API
* OMDB API