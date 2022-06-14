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
  if (lowercaseConfirm) {
    finalPasswordChoices += dataLowercase;
  } else
    finalPasswordChoices != dataLowercase;

  let uppercaseConfirm = confirm("Do you want uppercase characters in your password?")
  if (uppercaseConfirm) {
    finalPasswordChoices += dataUppercase;
  } else
  finalPasswordChoices != dataUppercase;

  let numbersConfirm = confirm("Do you want numeral characters in your password?")
  if (numbersConfirm) {
    finalPasswordChoices += dataNumbers;
  } else
  finalPasswordChoices != dataNumbers;

  let symbolsConfirm = confirm("Do you want symbols in your password?")
  if (symbolsConfirm) {
    finalPasswordChoices += dataSymbols;
  } else
  finalPasswordChoices != dataSymbols;

  if (finalPasswordChoices != dataLowercase && finalPasswordChoices != dataUppercase && finalPasswordChoices != dataNumbers && finalPasswordChoices != dataSymbols) {
    alert("Please choose at least 1 criteria")
    return;
  }

let finalPasswordArray = finalPasswordChoices.split("");

  let newPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    newPassword += finalPasswordArray[Math.floor(Math.random() * finalPasswordArray.length)];
  }

  password.value = newPassword;
}

generateBtn.addEventListener("click", generatePassword);
