var rand;
var tries = 3;
var counter = 0;

$(document).keypress(function(e) {
    if(e.which == 13) {
      hiLow();
      decrease();
    }
});
function randNum() {
  rand = Math.floor(Math.random()*10 + 1);
  console.log(rand);
  $("#tries").addClass("alert alert-info");
  $("#tries").text(tries);

}

function decrease() {
  tries--;
  if(tries === 2){
    $("#tries").addClass("alert alert-warning")
    $("#tries").text(tries)
  }
  else {
    $("#tries").addClass("alert alert-danger")
    $("#tries").text(tries)
  };
}

function reset(){
  tries = 3;
  counter = 0;
  $("#numInput").val();
  $("#result").text("").removeClass();
  $("#tries").removeClass();
}

function hiLow () {
  let userGuess = +$("#numInput").val();
  console.log("guess: " + userGuess);
  if(tries > counter) {
     if(rand === userGuess) {
      $("#result").text("You Won!").addClass("alert alert-success");
    } else if (rand < userGuess) {
      $("#result").text("You guessed too high...").addClass("alert alert-info");
    } else if (rand > userGuess) {
      $("#result").text("You guessed too low...").addClass("alert alert-warning");
    }
  }
  if (tries === 1) {
    $("#result").text("You LOSSSSSSE!").addClass("alert alert-danger");
  }
}
