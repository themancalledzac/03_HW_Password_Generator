// ==========================PseudoCode==================================//

// DECLARE a list of 'numbers'
var numbers = [0,1,2,3,4,5,6,7,8,9];

// DECLARE a list of 'lowercaseLetters'
var lcLetters = ["a",bcdefghijklmnopqrstuvwxyz"];

//DECLARE a list of 'uppdercaseLetters'
var ucLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

//DECLARE a list of 'specialCharacters'
var spCharacters = ["!@#$%^&*()~`<,>.?/:;'"];

// DECLARE a new list of 'charactersToUse'
var characterToUse = [];

// DECLARE a new 'password' string
var password = "";

// Variable for button
var button = document.querySelector(".generate");


function generatePassword() {

    //PROMPT the user for a 'passwordLength'
    var passwordLength = onclick("Please choose a password length between 8 and ");

    // IF NOT ( passwordLength >= 9 || passwordLength <= 128)
    if !((passwordLength >= 9 || passwordLength <= 128)) {
    // THEN ALERT to the user that they need to provide a correct length  
    alert("Wrong!");    
    // AND EXIT FUNCTION (throw a return; at the end of the function to EXIT the function, and stop ANY code below from running)      
    return;
}



    // how do we do not? (!)






 

    // Confirm if the Password generator 'isUsingNumbers'

        // IF 'isUsingNumbers'
        // THEN push 'numbers' into 'characterToUse'
        // AND APPEND on random number from the 'numbers' list

    //Confirm if the Password generator 'isUsingLowercaseLetters'

        // IF 'isUsingLowercaseLetters'
        // THEN push 'lowercaseLetters' into 'characterToUse'

    //Confirm if the Password generator 'isUsingUppercaseLetters'

        // IF 'isUsingUppercaseLetters'
        // THEN push 'uppdercaseLetters' into 'characterToUse'

    //Confirm if the Password generator 'isUsingSpecialCharacters'

        // IF 'isUsingspecialCharacters'
        // THEN push 'specialCharacters' into 'characterToUse'

    // if charactersToUse.length === 0,
        // then ALERT to the user that they need to provide a correct function
        // AND EXIT FUNCTION

    // what about a WHILE loop

    // WHILE password.length < passwordLength
    while( password.length < passwordLength ) {

        // SELECT 'randomCharacter' a character from 'characterToUse'
        // APPEND 'randomCharacter' to 'password' string
    }

    // RETURN 'password'
    return password;
    // 
// Write password to the #password input

function writePassword {

    var password = generatePassword();
    var passwordText = document.querySelector("Password");

    passwordTexxt.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}


// pick one of each character
//  pick each one at a time, first number, then lc, uc, sp, and then start over


// pushing the full array list as a 'sub array', or 4 sub arrays
// percent division to get a remainder (?)
// randomize once the characters are within the array




// START FROM SCRATCH. START OVER. GO THROUGH ALL THE STEPS, HOW WOULD WE CREATE THESE STEPS
//