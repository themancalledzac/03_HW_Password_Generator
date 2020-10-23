var button = document.querySelector("#generate");
var passwordLength = [];

console.log("button");

function passwordParts() {



    // maybe need to be NOT variables, and should instead be numbers: [] instead.
    numbers: [0,1,2,3,4,5,6,7,8,9];
    lowercaseLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    uppercaseLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    specialLetters:= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", "<", ">", ":", ";", "[", "]", "{", "}"]
    var charactersToUse = [];
}



function generatePassword() {

    var passwordLength = prompt("GoGood day. Please select a length for your password, in numerical value, between 8 and 128.");
    var isUsingNumbers = confirm("Do you want to include Numbers?");
    var isUsingLowerCaseLetters = confirm("Do you want to include lowercase letters?");
    var isUsingUpperCaseLetters = confirm("Do you want to include uppercase letters?");
    var isUsingSpecialCharacters = confirm("Do you want to include special characters?");
    if (passwordLength >= 8 || passwordLength <= 128) {
        else (alert)
    } else {
        alert
    }
}


button.onclick = function() {

    var passwordLength = prompt("Good day. Please select a length for your password, in numerical value, between 8 and 128.");

    // if (passwordLength >= 9 || passwordLength <= 128) {
    //     //then alert the user that 
    // }

    var isUsingNumbers = confirm("Do you want to include Numbers?"); {
        // if isUsingNumbers
            // then add to charactersToUse;
    }

    var isUsingLowercaseLetters = confirm("Do you want to include lowercase letters?"); {
        // if isUsingLowercaseLetters
            // then add to charactersToUse;
    }
        
}

