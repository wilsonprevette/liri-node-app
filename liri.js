require("dotenv").config();
require("./keys.js");

var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);