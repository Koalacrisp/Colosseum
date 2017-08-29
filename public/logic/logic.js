// Globals
var games = ["570", "730","578080", "440", "611500"];
var titles = [];
var descriptions = [];

// Dependencies
var request = require("request");

// Function for obtaining news information
newsGet = function(){
    for (i=0; i<games.length; i++){
        var queryURL = "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?key=A66515A25DEC193402713FEC996E3CD3&appid=" + games[i] + "&count=3&maxlength=300";
        request(queryURL, function(error, response, body){
            var parseIt = JSON.parse(body);
            titles.push(parseIt.appnews.newsitems[1].title);
            descriptions.push(parseIt.appnews.newsitems[1].contents);
            console.log(titles);
            console.log(descriptions);
        });
    };
};

newsGet();

// Function for appending the information to the page
newsAppend = function(){
    for(i=0; i<titles.length; i++){
        var list = document.createElement("LI");
        var node = document.createTextNode(titles[i]);
        var para = document.createElement("P");
        var desNode = document.createTextNode(descriptions[i]);
        para.appendChild(desNode);
        node.appendChild(para);
        list.appendChild(node);
        document.getElementById("articles").appendChild(list);
    };
};

newsAppend();