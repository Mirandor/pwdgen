var uppercaseChar = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberChar = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ['!','@','#','$','%','&'];

var pwdLength = parseInt(prompt("How long should your password be? Pick a number between 8 and 128."));
var isUppercase = confirm("Do you want to include uppercase?");
var isLowercase = confirm("Do you want to include lowercase?");
var isNumber = confirm("Include numbers?");
var isSpecial = confirm("Include special characters?");

function pwdCriteria(){
  
  if (isNaN(pwdLength) === true){
    alert ("Please enter a number");
    return
  }
  if (pwdLength < 8) {
    alert("Must be at least 8 characters");
    return
   
   } else if (pwdLength < 128) {
    alert("Must be less than 128 characters");
    return
   }

if (isUppercase === false && isLowercase === false && isNumber === false && isSpecial === false) {
  alert ("Please say yes to at least one option.");
  return
}
};
console.log(pwdCriteria);
console.log(pwdLength);
console.log(isUppercase);
console.log(isNumber);
console.log(isSpecial);

var password = {
  length: pwdLength,
  Uppercase: isUppercase,

};

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
