// var query = "https://api.pandascore.co/some-url?token=";
// var authKey = "P4d_hRb3PlaBco7fuvpHRHLer08aIhFZxI09YiqRJgGejv8S7y0";
// var queryURL = query + authKey;





// var authKeyGB = "954d6fc874d3054e3aaddad992618621b28c2097";
// var queryURLGB = "http://www.giantbomb.com/api/game/3030-4725/?api_key=" + authKeyGB;

// console.log(queryURLGB);
// //function newsAPI()
// function runQuery(numArticles, queryURL) {

//   // The AJAX function uses the queryURL and GETS the JSON data associated with it.
//   // The data then gets stored in the variable called: "NYTData"
// 	console.log("hello");
//   $.ajax({
//     url: queryURLGB,
//     method: "GET"
//   }).done(function(response) {

//     // Logging the URL so we have access to it for troubleshooting
//     console.log("------------------------------------");
//     console.log("finished");
//     console.log("URL: " + queryURLGB);
//     console.log("------------------------------------");

   
//     console.log();
//     console.log("------------------------------------");
//     //console.log(esportData);
//     console.log(response);


   
//   });

// }

// runQuery();



var apikey = "954d6fc874d3054e3aaddad992618621b28c2097";
var baseUrl = "http://www.giantbomb.com/api";

// construct the uri with our apikey
var GamesSearchUrl = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&json_callback=data';
var query = "Batman";

$(document).ready(function() {

  // send off the query
  $.ajax({
    url: GamesSearchUrl + '&query=' + encodeURI(query),
    dataType: "json",
    success: searchCallback
  });


    // callback for when we get back the results
    function searchCallback(data) {
        // $('body').append('Found ' + data.total + ' results for ' + query);
        var games = data.game;
        console.log(data);
        // $.each(games, function(index, game) {
        //     $('body').append('<h1>' + game.name + '</h1>');
        //     $('body').append('<p>' + game.description + '</p>');
        //     $('body').append('<img src="' + game.posters.thumbnail + '" />');
        // });
    }
});