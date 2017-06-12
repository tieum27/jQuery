//user id and password verify



// document.onkeyup = function(e){
// var keypressed = "";
// $("#inputUserName").keyup(function(event){
//
// if (typeof event !== 'undefined') {
//     keypressed = event.keyCode;
//   }
//   else if (event) {
//     keypressed = event.which;
//   }
//   console.log(keypressed);
// return false;   // Prevents the default action
//
// })
var xTriggered = 0;
$( "#inputUserName" ).keyup(function( event ) {
  xTriggered++;
  var msg = "Handler for .keyup() called " + xTriggered + " time(s).";
  $.print( msg, "html" );
  console.log( event );
}).keydown(function( event ) {
  if ( event.which == 13 ) {
    event.preventDefault();
  }
});

// // $( "#inputUserName").click(function() {
// //   $( "#target" ).keyup();
// });

 function same(id, pwd) {
   return !(id === pwd)
 }

 function lengthId(id) {
   return id.length >= 6
 }

function lengthPwd(pwd) {
  return pwd.length >= 6
}

function idContain(id) {
  return !id.includes("!") && !id.includes("#") && !id.includes("$")
}

function passwordContain(pwd) {
  return pwd.includes("!") || pwd.includes("#") || pwd.includes("$")
}

function pwdNotPwd(pwd) {
  return pwd !== "password"
}

function inputCheck(id) {
  return same(id) && lengthId(id) && idContain(id)
}

function passwordCheck(pwd) {
  return same(pwd) && lengthPwd(pwd) && passwordContain(pwd) && pwdNotPwd(pwd)
}

function run(){
  var user = $("#inputUserName").val();
  var password = $("#inputPassword").val();

  if(inputCheck(user) && passwordCheck(password)) {
    alert("You entered a correct user ID and password!")
  } else if((!inputCheck(user) && !passwordCheck(password))) {
    alert("BOTH of those suck. Quit while you're ahead!")
  } else if(!inputCheck(user)) {
    alert("Bad user ID! Try again.")
  } else if(!passwordCheck(password)) {
    alert("Bad password! Try again.")
  }
}


// ("What is your name?\nMinimum 6 chars")
// ("Enter your password: \nMust contain '!' or '#' or '$'\nNot be 'password'")
