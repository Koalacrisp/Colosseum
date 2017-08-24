"use strict";
// API Key
var apiKey = "ek5jw2l4w4l862xwyzmwlta09aewyd";
// User API URL
var userAPI = "https://api.twitch.tv/kraken/oauth2/authorize?client_id=" + apiKey + "&redirect_uri=https://swong87.github.io/test/&response_type=id_token&scope=openid user_subscriptions";
// Top Video URL Query
var topVideoURL = "https://api.twitch.tv/kraken/videos/top?client_id=" + apiKey + "&sort=time";
// Number to state which video in the top videos api should be played
var count = 0;
// Grabbing data from the top videos api
$.ajax({
  	url: topVideoURL,
  	method: "GET"
}).done(function(selected) {
	// Sets the video to use from the api as videoID
	var videoID = selected.videos[0]._id;
	// Embeds the twitch video stream
    new Twitch.Embed("twitchStream", {
   		width: 640,
   		height: 420,
   		video: videoID
	});
});