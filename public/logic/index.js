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
   		width: 440,
   		height: 250,
   		video: videoID
	});
});

$("#lol").on("click", function(event){
  event.preventDefault();
  $("#twitchStream").empty();
  var lolURL = "https://api.twitch.tv/kraken/videos/top?client_id=ek5jw2l4w4l862xwyzmwlta09aewyd&game=League%20of%20Legends";
  $.ajax({
      url: lolURL,
      method: "GET"
  }).done(function(selected) {
    // Sets the video to use from the api as videoID
    var videoID = selected.videos[0]._id;
    // Embeds the twitch video stream
      new Twitch.Embed("twitchStream", {
        width: 440,
        height: 250,
        video: videoID
    });
  });
})

$("#dota").on("click", function(event){
  event.preventDefault();
  $("#twitchStream").empty();
  var dotaURL = "https://api.twitch.tv/kraken/videos/top?client_id=ek5jw2l4w4l862xwyzmwlta09aewyd&game=Dota%202";
  $.ajax({
      url: dotaURL,
      method: "GET"
  }).done(function(selected) {
    // Sets the video to use from the api as videoID
    var videoID = selected.videos[0]._id;
    // Embeds the twitch video stream
      new Twitch.Embed("twitchStream", {
        width: 440,
        height: 250,
        video: videoID
    });
  });
})

$("#pubg").on("click", function(event){
  event.preventDefault();
  $("#twitchStream").empty();
  var pubgURL = "https://api.twitch.tv/kraken/videos/top?client_id=ek5jw2l4w4l862xwyzmwlta09aewyd&game=PLAYERUNKNOWN%27S%20BATTLEGROUNDS";
  $.ajax({
      url: pubgURL,
      method: "GET"
  }).done(function(selected) {
    // Sets the video to use from the api as videoID
    var videoID = selected.videos[0]._id;
    // Embeds the twitch video stream
      new Twitch.Embed("twitchStream", {
        width: 440,
        height: 250,
        video: videoID
    });
  });
})

$("#hero").on("click", function(event){
  event.preventDefault();
  $("#twitchStream").empty();
  var heroURL = "https://api.twitch.tv/kraken/videos/top?client_id=ek5jw2l4w4l862xwyzmwlta09aewyd&game=Heroes%20of%20the%20Storm";
  $.ajax({
      url: heroURL,
      method: "GET"
  }).done(function(selected) {
    // Sets the video to use from the api as videoID
    var videoID = selected.videos[0]._id;
    // Embeds the twitch video stream
      new Twitch.Embed("twitchStream", {
        width: 440,
        height: 250,
        video: videoID
    });
  });
})

$("#cs").on("click", function(event){
  event.preventDefault();
  $("#twitchStream").empty();
  var csURL = "https://api.twitch.tv/kraken/videos/top?client_id=ek5jw2l4w4l862xwyzmwlta09aewyd&game=Counter-Strike:%20Global%20Offensive";
  $.ajax({
      url: csURL,
      method: "GET"
  }).done(function(selected) {
    // Sets the video to use from the api as videoID
    var videoID = selected.videos[0]._id;
    // Embeds the twitch video stream
      new Twitch.Embed("twitchStream", {
        width: 440,
        height: 250,
        video: videoID
    });
  });
})