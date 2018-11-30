$(document).ready(function(){

  $("button").on("click", function () {
    var animals = $(this).attr("data-animals");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animals + "&api_key=dc6zaTOxFJmzC&limit=10";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        var results = response.data;
  
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");
  
          var rating = results[i].rating;
  
          var p = $("<p>").text("Rating: " + rating);
  
          var animalsImage = $("<img>");
          animalsImage.attr("src", still);
          animalsImage.attr("data-still", still);
          animalsImage.attr("data-animate", animated);
          animalsImage.attr("animal-image");
          gifDiv.prepend(p);
          gifDiv.prepend(animalsImage);
  
          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  
  
    // function addNewButton() {
    //   $("#newGifs").on("click", function (){
    //     document.getElementById("#newGifs").innerHTML=("#newGifs")
    //   });
  
  
  
  
  });
  
  $("#gifs-appear-here").on("click", function () {
    var state = $(this).attr("data-state");
    console.log("clicking")
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    };
  });

});
