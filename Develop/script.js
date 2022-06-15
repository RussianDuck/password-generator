var generateBtn = document.querySelector("#create");
const password = document.querySelector("#password");
const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const dataNumbers = "0123456789";
const dataSymbols = "!@#$%?&*";
let finalPasswordChoices = "";

function generatePassword() {
  let passwordLength = parseInt(prompt("What length do you want your password to be?"))
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Invalid length. Please input a number between 8 and 128.")
    return;
  }

  let lowercaseConfirm = confirm("Do you want lowercase characters in your password?")
  console.log(lowercaseConfirm)
  if (lowercaseConfirm) {
    finalPasswordChoices += dataLowercase;
    console.log("This is true")
  } 

  let uppercaseConfirm = confirm("Do you want uppercase characters in your password?")
  console.log(uppercaseConfirm)
  if (uppercaseConfirm) {
    finalPasswordChoices += dataUppercase;
    console.log("This is true")
  } 

  let numbersConfirm = confirm("Do you want numeral characters in your password?")
  console.log(numbersConfirm)
  if (numbersConfirm) {
    finalPasswordChoices += dataNumbers;
    console.log("This is true")
  } 

  let symbolsConfirm = confirm("Do you want symbols in your password?")
  console.log(symbolsConfirm)
  if (symbolsConfirm) {
    finalPasswordChoices += dataSymbols;
    console.log("This is true")
  } 

  if (!uppercaseConfirm && !lowercaseConfirm && !numbersConfirm && !symbolsConfirm) {
    alert("Please choose at least 1 criteria")
    console.log(finalPasswordChoices)
    return;
  }

let finalPasswordArray = finalPasswordChoices.split("");

  let newPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    newPassword += finalPasswordArray[Math.floor(Math.random() * finalPasswordArray.length)];
  }

  password.value = newPassword;
  finalPasswordChoices = "";
}

generateBtn.addEventListener("click", generatePassword);
