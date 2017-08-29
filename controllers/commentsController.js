var moment = require("moment");
var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the comments
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Comment.findAll({}).then(function(dbComment) {
      var hbsObject = {
        comments: dbComment
      };
      res.render("index", hbsObject);
    });
  });

  app.get("/games1", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Comment.findAll({}).then(function(dbComment) {
      var hbsObject = {
        comments: dbComment
      };
      res.render("games1", hbsObject);
    });
  });

  app.get("/games2", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Comment.findAll({}).then(function(dbComment) {
      var hbsObject = {
        comments: dbComment
      };
      res.render("games2", hbsObject);
    });
  });

  app.get("/games3", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Comment.findAll({}).then(function(dbComment) {
      var hbsObject = {
        comments: dbComment
      };
      res.render("games3", hbsObject);
    });
  });

  // GET route for getting all of the comments
  app.get("/twitch", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Comment.findAll({}).then(function(dbComment) {
      var hbsObject = {
        comments: dbComment
      };
      res.render("twitch", hbsObject);
    });
  });

  // POST route for saving a new comment
  app.post("/", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    console.log("THIS RIGHT HERE: " + currentTime);
    db.Comment.create({
      userName: req.body.userName,
      comment: req.body.comment,
      time: currentTime
    }).then(function(dbComment) {
      // We have access to the new comment as an argument inside of the callback function
      res.redirect("/twitch");
    });

  });

  // DELETE route for deleting comments. We can get the id of the comment to be deleted
  // from req.params.id
  app.delete("/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the comments we want to destroy
    db.Comment.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbComment) {
      res.redirect("/");
    });

  });
};
