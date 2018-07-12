require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');
var search = process.argv[2];
var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);

function liriBot(){

if (search === 'my-tweets'){
    let params = {screen_name: 'willyliri'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        for (i = 0; i < tweets.length; i++){
        console.log(JSON.stringify(tweets[i].text, null, 2));
        fs.appendFile('log.txt', function(error) {
          if (error) {
            console.log("Error!");
          }
        });
        }
      }
    });
    }

if (search === '')

}