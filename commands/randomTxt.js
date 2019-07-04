const fs = require("fs");

module.exports = fn => {
	fs.readFile("random.txt", "utf8", (err, data) => {
		if(err) {
		   console.log(err);
		}	
		const output = data.split(",");
		const songs = [];
		for(let i = 1; i < output.length; i++) {
			let song = output[i].replace(/"/g, "");
			songs.push(song); 
		}
		const randomIndex = Math.floor(Math.random() * songs.length);
		const randomSong = songs[randomIndex];
		fn(randomSong);
	});
};