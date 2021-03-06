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
var specialCharacters = [ "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~" ];

function generatePassword () {
  
  // password length
  var length;

  length = window.prompt( "Please enter password length:\n\nMust be at least 8 and no more than 128 characters long", "" );

  // check if user hit cancel button
  if ( length === null ) {

    return "!! Operation Canceled - Try again !!";

  }

  // validate that length contains a number
  if ( isNaN( length ) ) {

    window.alert( "!! You must enter a number !!" );
    return "!! Invalid input - Try again !!";

  }

  // validate length meets requested criteria
  if ( length < 8 || length > 128 ) {

    window.alert( "!! Password must be 8 - 128 characters in length !!" );
    return "!! Invalid input - Try Again !!";
  
  }

  // booleans for user selections
  var useUpper;
  var useLower;
  var useNumbers;
  var useSpecial;

  // prompt user on which character sets they would like to use
  useUpper = window.confirm( "Would you like to use Uppercase Letters?\n\nOK - Yes\nCancel - No" );

  useLower = window.confirm( "Would you like to use Lowercase Letters?\n\nOK - Yes\nCancel - No" );

  useNumbers = window.confirm( "Would you like to use Numbers?\n\nOK - Yes\nCancel - No" );

  useSpecial = window.confirm( "Would you like to use Special Characters?\n\nOK - Yes\nCancel - No" );

  // validate that at least one type of character set has been selected
  if ( !useUpper && !useLower && !useNumbers && !useSpecial ) {

    window.alert( "!! You must select at least one character set !!" );
    return "!! Invalid selection - Try Again !!";

  }

  // set of characters to pick from
  var characterSet = [];

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

  var generatedPassword = "";

  // select a random character and add it to the password string until length is reached
  for ( var i = 0; i < length; i++ ) {

    generatedPassword += characterSet[ Math.floor( Math.random() * characterSet.length ) ];

  }

  // Return completed password
  return generatedPassword;

}