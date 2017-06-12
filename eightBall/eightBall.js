function eightBall()  {
  var q = ("Ask a question")
  var a = ["Yup!", "Fuhgeddaboudit", "Maybe", "what would your mother do?",
  "what would an Australian do", "then do the opposite", "Go home"]
  var p = Math.floor((Math.random()* 7))
  return a[p]
}; // end of eightBall function

$(".clickball").on("click",
  function(){
    $(".answer").text(eightBall());
  });
