// Assignment Code
var generateBtn = document.querySelector("#generate");

//array list of numbers

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//array list of special characters

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", ................]

//array list of lowercase letters
//array list of uppercase letters
//object with all included? Let's look into that.



function generatePassword() {

 // variable on password length
  //      const passwordLength = prompt("a;lskjdf");
// confirm use number
  //      const numberS = confirm("Use numbers?");
// confirm use lowercase
  //      const lowercaseS = confirm("Use numbers?");

// confirm use UPPERCASE
  //      const numbers = confirm("Use numbers?");

// confirm use Special characters
  //      const numbers = confirm("Use numbers?");

 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (this is a call-back function)
generateBtn.addEventListener("click", writePassword);


// here is an example of a random color generator for a background color, where a button is pressed to produce random numbers to associate to the color
//

// <button>Change color</button>
// The JavaScript looks like so:

// const btn = document.querySelector('button');

// function random(number) {
//   return Math.floor(Math.random() * (number+1));
// }

// btn.onclick = function() {
//   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// }

