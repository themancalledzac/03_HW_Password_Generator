var passwordLength = [];

function generatePassword() {

   
    numbers = [0,1,2,3,4,5,6,7,8,9];
    lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    specialLetters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", "<", ">", ":", ";", "[", "]", "{", "}"]
    var charactersToUse = []; 





    var passwordLength = prompt("GoGood day. Please select a length for your password, in numerical value, between 8 and 128.");
        if ( !(passwordLength > 7 || passwordLength < 129 || passwordLength === NaN)) {
            alert("Please select the proper length.");
            return;
        }  else {

        } 

    var isUsingNumbers = confirm("Do you want to include Numbers?");
        if (isUsingNumbers === true) {
            charactersToUse.push(...numbers);
            //AND APPEND on random number from the 'numbers' list
        };

    var isUsingLowerCaseLetters = confirm("Do you want to include lowercase letters?");
        if (isUsingLowerCaseLetters === true) {
            charactersToUse.push(...lowercaseLetters);
        };

    var isUsingUpperCaseLetters = confirm("Do you want to include uppercase letters?");
        if (isUsingUpperCaseLetters === true) {
            charactersToUse.push(...uppercaseLetters);
        };

    var isUsingSpecialCharacters = confirm("Do you want to include special characters?");
        if (isUsingSpecialCharacters === true) {
            charactersToUse.push(...specialLetters);
        };
    

        var length = passwordLength.length
        for (let i=0; i<length; i++) {
            Math.floor(Math.random() * length)
        }

 // if no character type is chosen
 //if (!isUsingNumbers && !isUsingLowerCaseLetters && !isUsingUpperCaseLetters && !isUsingSpecialCharacters) {
 //        THEN ALERT user to pick at least one
 //        alert("You must pick at least one of the criteria.")
 //        return; 
// }

var password = "";
 
while ( password.Length < passwordLength ) {
    //SELECT 'randomCharacter' a characcter from 'charactersToUse'
    let randomCharacter = charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
    //APPEND 'randomCharacter' to 'password' string.
    // password = password + randomCharacter
    password += randomCharacter
}

//return password;

return password;
}

var generateBtn = document.querySelector("#generate");

                    // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

                    // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}