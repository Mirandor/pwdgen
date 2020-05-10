// Prompts
var pwdLength = parseInt(prompt("How long should your password be? Pick a number between 8 and 128."));
var isUppercase = confirm("Do you want to include uppercase letters?");
var isLowercase = confirm("Do you want to include lowercase letters?");
var isNumber = confirm("Do you want to include numbers?");
var isSpecial = confirm("Do you want to include special characters?");

// Character Variables
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*-+<>";

// Generate Password Function
function generate(){

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

  // Password Length
  var complexity = pwdLength;

  // Random Password Creation
  for (let i = 0; i < complexity; i++) {
    randomPwd += pwdCharSet.charAt(Math.floor(Math.random() * pwdCharSet.length));
  }

  // Validation Failed Alerts
  if (pwdLength < 8) {
    alert("Bummer! Your password should be at least 8 characters.");
    return pwdLength
  } else if (pwdLength > 128) {
    alert("Wowza! Your password cannot exceed 128 characters.")
    return pwdLength
  } else if (isNaN(pwdLength)) {
    alert("Oh dear! Your password must be a number between 8 and 128.")
    return pwdLength
  }
  if (isUppercase === false && isLowercase === false && isNumber === false && isSpecial === false) {
    alert("Jinkies! You didn't pick any characters to include. Please say 'ok' to at least one character type.");
    return
  }

  // Display the Random Password
  document.getElementById("password").value = randomPwd;
};

// Console Logs
console.log("Length: " + pwdLength);
console.log("Uppercase: " + isUppercase);
console.log("Lowercase: " + isLowercase);
console.log("Number: " + isNumber);
console.log("Special: " + isSpecial);