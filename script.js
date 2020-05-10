// Character Variables
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*-+<>";

// Prompt Function
function promptMe() {

  // Password Length
  var pwdLength = parseInt(prompt("How long should your password be? Pick a number between 8 and 128."));

    if (pwdLength < 8) {
      alert("Bummer! Your password should be at least 8 characters.");
      return

    } else if (pwdLength > 128) {
      alert("Wowza! Your password cannot exceed 128 characters.")
      return

    } else if (isNaN(pwdLength)) {
      alert("Oh dear! Your password must be a number between 8 and 128.")
      return
    }

  // Password Characters
  var isUppercase = confirm("Do you want to include uppercase letters?");
  var isLowercase = confirm("Do you want to include lowercase letters?");
  var isNumber = confirm("Do you want to include numbers?");
  var isSpecial = confirm("Do you want to include special characters?");

  // Console Logs
  console.log("Length: " + pwdLength);
  console.log("Uppercase: " + isUppercase);
  console.log("Lowercase: " + isLowercase);
  console.log("Number: " + isNumber);
  console.log("Special: " + isSpecial);
  console.log("=====================");

  // No Characters Alert
  if (isUppercase === false && isLowercase === false && isNumber === false && isSpecial === false) {
    alert("Jinkies! You didn't pick any characters to include. Please choose at least one character type.");
    return
  }

  // Generate Password
  var randomPwd = "";
  var pwdCharSet = "";

  // Password Character Set
  if (isUppercase) {
    pwdCharSet += uppercase;
  }

  if (isLowercase) {
    pwdCharSet += lowercase;
  }

  if (isNumber) {
    pwdCharSet += number;
  }

  if (isSpecial) {
    pwdCharSet += symbol;
  }

  // Password Complexity
  var complexity = pwdLength;

  // Randomize It
  for (let i = 0; i < complexity; i++) {
    randomPwd += pwdCharSet.charAt(Math.floor(Math.random() * pwdCharSet.length));
  }

  // Show It
  document.getElementById("password").value = randomPwd;
};




  // Assignment Code
  // var generateBtn = document.querySelector("#generate");

  // // Write password to the #password input
  // function writePassword() {
  //   var password = generate();
  //   var passwordText = document.querySelector("#password");
  
  //   passwordText.value = password;
  
  // }
  
  // // Add event listener to generate button
  // generateBtn.addEventListener("click", writePassword);