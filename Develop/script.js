var generateBtn = document.querySelector("#create");
const password = document.querySelector("#password");
const dataLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const dataUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const dataNumbers = "0123456789".split("");
const dataSymbols = "!@#$%?&*".split("");

function generatePassword() {
  const data = [].concat (
    lowercase.checked ? dataLowercase : [],
    uppercase.checked ? dataUppercase : [],
    numbers.checked ? dataNumbers : [],
    symbols.checked ? dataSymbols: [],
  )
// Need to fix the value part of this statement
  let passwordLength = parseInt(document.querySelector("display-password-length").value);
  let newPassword = "";

  if (data.length === 0) {
    alert("Please select at least one criteria");
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    newPassword += data[Math.floor(Math.random() * data.length)];
  }

  password.value = newPassword;
}

generateBtn.addEventListener("click", generatePassword);
















// Assignment code here


// Get references to the #generate element
// var generateBtn = document.querySelector("#create");

// Write password to the #password input
// function writePassword() {
// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// var divHeader = document.querySelector(".card-header");

// let lengthInputQuestion = window.prompt("What is the length of your password?")
// let arrayOfChoices = [];

// for (let index = 0; index < 5; ++index) {
//   let userPrompt = window.prompt()
// }
//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// generateBtn.addEventListener("click", function() {
//   document.querySelector("create").removeAttribute("hidden")
// })
