// create variables to be used in switch statement
var action = process.argv[2];
var value = process.argv;

// var keys = require("./keys.js");

//switch statement
switch(action) {
	
	case "spotify-this-song":
	spotifySong();
	break;

	case "my-tweets":
	myTweets();
	break;

	case "movie-this":
	omdbMovies();
	break;

	case "do-what-it-says":
	randomTxt();
	break;

} // END switch END //

// function for gathering information on movies
function omdbMovies() {
	// omdb module
	var request = require("request");
	// create a movie varbiable to be used in conjunction with the URL
	// MOVIE EXAMPLE = "Five+Easy+Pieces"
	var movie = "";
	// run for-loop through all the arguments, starting with (media[3])
	for (var i = 3; i < value.length; i++) {
		// if statement will prefix a plus (space) before an argument, but only after the third argument
		if (i > 3 && i < value.length) {
			// incrementally assemble the string ( example: +Easy(value[4])+Pieces(value[5]) )
			movie = movie + "+" + value[i];
		}
		// the third argument (value[3]) will comprise the movie title's first word ( example: Five(value[3]) )
		else {

			movie = value[i] + movie;
		}
	} 

	// exmaple URL: http://www.omdbapi.com/?t=Five+Easy+Pieces&y=&plot=short&apikey=40e9cece
	var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";
	// deploy request function to retrieve information
	request(queryUrl, function(error, response, body) {
		console.log(body);
		// if we don't recieve an error--and the request has succeeded 
		if (!error && response.statusCode === 200) {
			// log the following parameters
			var body = JSON.parse(body);
			console.log("=====================================================================");
			console.log("");
			console.log("Title: " + body.Title);
			console.log("Released : " + body.Year);
			console.log("IMDB Rating : " + body.imdbRating);
			console.log("Rotten Tomatoes Rating: " + body.Ratings[1].Value);
			console.log("Country: " + body.Country);
			console.log("Language: " + body.Language);
			console.log("Plot: " + body.Plot);
			console.log("Actors: " + body.Actors);
			console.log("");
			console.log("=====================================================================");
		}
	}); 
}; 

// function for retrieving information on songs
function spotifySong() {
	// spotify module
	var Spotify = require("node-spotify-api");
	// input the required credentials 
	var spotify = new Spotify ({

		id: "634a520cf1c0429d99fca7b279fcbbfc",
		secret: "a9cf98956a9d4ef0b407672ac143bb39"
	});
	// empty variable for storing the name of a track
	// SONG EXAMPLE "Return+of+the+Mack"
	var song = "";
	// utilize spotify function to collect data
	for (var i = 3; i < value.length; i++) {
		// if statement will prefix a plus (space) before an argument, but only after the third argument
		if (i > 3 && i < value.length) {
			// incrementally assemble the string ( example: +of(value[4])+the(value[5])+Mack(value[6]) )
			song = song + "+" + value[i];
		}
		// the third argument (value[3]) will comprise the song title's first word ( example: Return(value[3]) )
		else {

			song = value[i] + song;
		}
	} 

	spotify.search({type: "track", query: song}, function(error, data) {

		if(error) {
			console.log("Fix this error: " + error);
			return;
		}
		else {
			console.log("=====================================================================");
			console.log("");
			console.log("Artist: " + data.tracks.items[0].artists[0].name);
			console.log("Album: " + data.tracks.items[0].album.name);
			console.log("Track Num: " + data.tracks.items[0].track_number);
			console.log("Name: " + data.tracks.items[0].name);
			console.log("Preview this song: " + data.tracks.items[0].preview_url);
			console.log("");
			console.log("=====================================================================");
		}
	});
};

// function for gathering twitter data
function myTweets() {
	// required twitter package
	var twitter = require("twitter");
	// required authentification variable
	var client = new twitter ({

		consumer_key: "cRp5FeYUT53c1NG66oNcyxQOF",
  		consumer_secret: "NvMOuEhERCKhj5OEvACEgKhlYu2kqunuxZEgew6cBIeBVTynIO",
  		access_token_key: "912733824580124672-h7EzKy5XssDtooeAWTM8bTYYeZdrkMl",
  		access_token_secret: "BU5hBJwQLNwi5QjbhNnzJXKAJ2FW52g7MPsF5UnpqDiFG"
	});
	// variable holds the user's twitter name, and the number of tweets we want to retrieve
	var params = {

		screen_name: "malaxor",
		count: 20
	};
	// depoy get method to collect tweets 
	client.get("statuses/user_timeline", params, function(error, tweets, response) {

		if(!error) {
			
			console.log("=====================================================================");
			console.log("");
			for(var i = 0; i < tweets.length; i++) {
				console.log("You tweeted: " + tweets[i].text);
			}
			console.log("");
			console.log("=====================================================================");
		}
	});
};	
// use this function to read text inside the random.txt file
function randomTxt() {
	
	var fs = require("fs");

	fs.readFile("random.txt", "utf8", function(error, data) {

		if(!error) {
			data = data.split(",")
			console.log(data[1]);
			spotifySong();
		}

	});
};
		





