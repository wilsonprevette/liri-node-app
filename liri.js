require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');
var search = process.argv[2];
var songTitle = process.argv[3];
var Spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

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

if (search === 'spotify-this-song') {
    spotify.search({ type: 'track', query: songTitle, limit: 1 }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
     
        console.log("Title: " + JSON.stringify(data.tracks.items[0].name, null, 2));
        console.log("Artists: " + JSON.stringify(data.tracks.items[0].artists[0].name, null, 2)); 
        console.log("Album Title: " + JSON.stringify(data.tracks.items[0].album.name, null, 2));
        console.log("Preview: " + JSON.stringify(data.tracks.items[0].external_urls.spotify, null, 2)); 
    
        fs.appendFile('log.txt', function(err) {
    
            if (err) {
              console.log("Error!");
            }
            else {
              console.log("Success!");
            }
            
            });
    
        });
    }

}
