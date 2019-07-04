const request = require('request');
const value = process.argv;

module.exports = () => {
	// MOVIE EXAMPLE = "Five+Easy+Pieces"
	let movie = "";
	// start this for loop at the third process.arg argument
	for(let i = 3; i < value.length; i++) {
		if(i > 3) {
			movie += "+" + value[i];
		}
		else {
			movie = value[i];
		}
	} 
	const queryUrl = `http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=40e9cece`;
	// deploy request function to retrieve information
	request(queryUrl, (err, res, body) => {
		if (!err && res.statusCode === 200) {
			const data = JSON.parse(body);
			// if there's no value input or an incorrect movie name search
			if (data.Response === "False") {
				console.log("=====================================================================")
				console.log("");
				console.log("Movie not found! While you're verifying the spelling... check out: ");
				console.log("");
				// the default URL stored in variable
				const defaultMovie = "http://www.omdbapi.com/?t=Jurassic+Park&y=&plot=short&apikey=40e9cece";
				// deploy request function with defaultMovie variable as search paramater
				request(defaultMovie, (err, res, body) => {
					// if we don't recieve an error--and the request has succeeded 
					if(!err && res.statusCode === 200) {
						// log the the default movie's follwing properties:
						const { Title, Year, imdbRating, Ratings, Country, Language, Plot, Actors } = JSON.parse(body);
						console.log("Title: " + Title);
						console.log("Released: " + Year);
						console.log("IMDB Rating: " + imdbRating);
						console.log("Rotten Tomatoes Rating: " + Ratings[1].Value);
						console.log("Country: " + Country);
						console.log("Language: " + Language);
						console.log("Plot: " + Plot);
						console.log("Actors: " + Actors);
						console.log("");
						console.log("=====================================================================");
					}
				});
			}
			else {
				console.log("=====================================================================");
				console.log("");
				console.log("Title: " + data.Title);
				console.log("Released: " + data.Year);
				console.log("IMDB Rating: " + data.imdbRating);
				console.log("Rotten Tomatoes Rating: " + data.Ratings[1].Value);
				console.log("Country: " + data.Country);
				console.log("Language: " + data.Language);
				console.log("Plot: " + data.Plot);
				console.log("Actors: " + data.Actors);
				console.log("");
				console.log("=====================================================================");
			}	
		}
	});
};
