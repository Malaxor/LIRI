const twitter = require('twitter');
const { twitterKeys } = require('../keys');
const client = new twitter(twitterKeys);
const userInput = process.argv;

module.exports = () => {
	let userName = "";

	for (let i = 3; i < userInput.length; i++) {
		if (i > 3) {
			userName += " " + userInput[i];
		}
		else {
			userName = userInput[i];
		}
   }
	const params = {
		screen_name: userName,
		count: 10
	};
	client.get("statuses/user_timeline", params, (err, tweets, response) => {

		if(!err) {
			console.log("=====================================================================");
			console.log("");
			for(let i = 0; i < tweets.length; i++) {
				console.log((i+1) + ": You tweeted: " + tweets[i].text + "\nCreated: " + tweets[i].created_at);
				console.log("");
			}
			console.log("");
			console.log("=====================================================================");
		}
	});
};