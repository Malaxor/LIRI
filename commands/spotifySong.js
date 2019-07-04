const Spotify = require("node-spotify-api");
const { spotifyKeys } = require("../keys");
const spotify = new Spotify(spotifyKeys);
const userInput = process.argv;

module.exports = random => {
   let song = "";

	for(let i = 3; i < userInput.length; i++) {
		if (i > 3) {
			song += " " + userInput[i];
		}
		else {
			song = userInput[i];
		}
   } 
	spotify.search({ type: "track", query: song || random }, (err, data) => {
      if(err) {
			console.log(err);
		}
		else {
			const songData = data.tracks.items;
			console.log("=====================================================================");
			for(let i = 0; i < songData.length; i++) {
				console.log("");
				console.log("Artist: " + songData[i].artists[0].name);
				console.log("Album: " + songData[i].album.name);
				console.log("Name: " + songData[i].name);
				console.log("Preview this track: " + songData[i].preview_url);
				console.log("");
				console.log("=====================================================================");
			}
		}
	});
};