// $ = JQ land
// 4(stuff in here) = js selector (same as css)
// document = DOM, O for object
// .ready() is a method() for the document.
// stuff inside the .ready () = parameter
// this stuff: function(){} ... IIFE, immediatley invoked f/n expression
//

$(document).ready(function () {
  // code goes here

  $("#newGame").on("click", function () {
    //call f/n
    let statusText = underConstruction("not ready");
    //update the status
    $("#newGame").text("Not yet working").prop("disabled", true);
  });

  //pass a status (ready or not ready) and get back a message for user
  //rn, not ready

  function underConstruction(status) {
    return "Not yet ready, bruh";
  }
});

//  document.body.style.backgroundColor = "magenta";
//  var el = document.getElementById("firstGame");
//  el.interText = "Who cares about my first game";

//  $("body").css("background-color", "teal");
//  $("#firstGame").css("background-color", "pink");