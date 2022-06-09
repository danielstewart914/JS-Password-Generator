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

// character sets 
var upperCaseLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowerCaseLetters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
var specialCharacters = [ "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~" ];

function generatePassword () {
  
  // local variables
  var characterSet = [];
  var generatedPassword = "";

  var length;

  var useUpper;
  var useLower;
  var useNumbers;
  var useSpecial;

  length = window.prompt( "Please enter the length you would like for your password.", "" );

  if ( length >= 8 && length <= 128 ) {

    useUpper = window.confirm( "Would you like to use Uppercase Letters? (OK-Yes Cancel-No)" );

    useLower = window.confirm( "Would you like to use Lowercase Letters? (OK-Yes Cancel-No)" );

    useNumbers = window.confirm( "Would you like to use Numbers? (OK-Yes Cancel-No)" );

    useSpecial = window.confirm( "Would you like to use Special Characters? (OK-Yes Cancel-No)" );

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

    window.alert("You must select at least one type of character set.");
    return "Error - Try Again.";
  
  }

  window.alert("Password must be at least 8 Characters and no more than 128 Characters.");
  return "Error - Try Again.";

}