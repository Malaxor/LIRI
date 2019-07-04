const action = process.argv[2];
const { omdbMovies, spotifySong, randomTxt, myTweets } = require('./commands');

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
		randomTxt(spotifySong);
	break;
}