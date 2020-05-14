LIRI stands for Language Interpretation and Recognition Interface; it is a command line node app that accepts a user's input and returns data from the node-spotify api, twitter api and OMDB api.

Technology used: Node.js

Type the commands below in your GitBash CLI while in this project's root folder: 
+ node app.js my-tweets 'user name': will return a list of your past 20 tweets

+ node app.js spotify-this-song 'song name': requires a song name as the fourth argument, and returns information about the searched song

+ node app.js movie-this 'movie name':  requires a movie name as a fourth argument, and returns information about that movie. NOTE: OMDB api is inconsistent so the API used here 'movieDB' does not return as comprehensive movie data

+ node app.js do-what-it-says: will spotify a song's name chosen at random from a list located in a pregenerated .txt file.

I've uploaded a demo video for those short on time but curious enough to see this app in action.

View demo video here: https://www.youtube.com/watch?v=ZBpw2yvVb3M
