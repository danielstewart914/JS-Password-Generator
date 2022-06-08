// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// variables

var upperCaseLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowerCaseLetters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
var specialCharacters = [ "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~" ];

// add generate password function
function generatePassword () {
  
  // local variables
  var characterSet = [];
  var generatedPassword = "";

  var length;

  var useUpper;
  var useLower;
  var useNumbers;
  var useSpecial;

  // prompt for password length
  // assign to length

  if ( length >= 8 && length <= 128 ) {

  // prompt lowercase
  // assign to lower

  // prompt upper case 
  // assign to upper

  // prompt numbers
  // assign to numbers

  // prompt special characters
  // assign to special


    // validate that at least one type of character has been selected
    if ( useUpper || useLower || useNumbers || useSpecial ) {

      // build a character set from selected types
      if ( useUpper ) {

        characterSet = characterSet.concat( upperCaseLetters );

      }
      
      if ( useLower ) {

          characterSet = characterSet.concat( lowerCaseLetters );

      }
      
      if ( useNumbers ) {

          characterSet = characterSet.concat( numbers );

      }
      
      if ( useSpecial ) {

          characterSet = characterSet.concat( specialCharacters );

      }

      // select a random character and add it to the password until length is reached
      for ( var i = 0; i < length; i++ ) {

        generatedPassword += characterSet[ Math.floor( Math.random() * characterSet.length ) ];

      }

      return generatedPassword;

    }
  
  }

}