$("#submit").click(function(event){

    event.preventDefault();
    console.log("click working");

    var comment = $("#comment").val();

    console.log(comment);

    $("#appendComment").append(comment);

   $("#comment").attr("placeholder", "Place Comment Here").val("").focus().blur();

})