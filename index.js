const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const noSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let password1El = document.getElementById("password1-div");
let password2El = document.getElementById("password2-div");
let characterNum = document.getElementById("characters-num");
let toggleSymbol = false;
let renderedButton = document.getElementById("button-el");
let mainHeading = document.getElementById("main-head");
let themeButton = document.getElementById("lightOrDark");
let theme = "dark";
let captionText = document.getElementById("caption");


/* code to ensure: console.log('will run changeTheme')
changeTheme(); */

function lightTheme() {
  theme = "light"
  mainHeading.style.color = "#111827"
  document.body.style.backgroundColor = "#ECFDF5"
  themeButton.style.boxShadow = "#55F991"
  themeButton.textContent = "☀️ mode"
  captionText.style.color = "#6B7280"

}

function darkTheme () {
  theme = "dark"
  mainHeading.style.color = "white"
  document.body.style.backgroundColor = "#1F2937"
  themeButton.style.boxShadow = "#066f4c"
  themeButton.textContent = "🌑 mode"
  captionText.style.color = "#D5D4D8"
}

function changeTheme () {
  if (theme === "dark") {
    lightTheme();
    
  }
  else if (theme === "light") {
    darkTheme();
    console.log("i'm being changed to dark");
  }
}

function changeToggle() {
  if (toggleSymbol === true) {
  toggleSymbol = false;
  }
  else {
    toggleSymbol = true;
  }
  console.log(toggleSymbol)
}

function renderedButtonError () {
  renderedButton.style.backgroundColor = "red";
  renderedButton.textContent= "Choose a password length of 20 or less"
}

function renderedNormalButton () {
  renderedButton.style.backgroundColor = "#10B981";
  renderedButton.textContent = "Generate passwords"
}


// function generates a random password with the requested length
function makePassword(){
  let generatedPassword = ""
  if (characterNum.value<=20) {
    renderedNormalButton();
  if (toggleSymbol === true) {
// utilizes the "characters" array to generate random password
  for (let i=0; i<characterNum.value; i++) {
    let number = Math.floor(Math.random() * allCharacters.length);
    generatedPassword += allCharacters[number];
  }
  }
  else {
    for (let i=0; i<characterNum.value; i++) {
      let number = Math.floor(Math.random() * noSymbols.length);
      generatedPassword += noSymbols[number];

    }
  }
  return generatedPassword
}

else {
  renderedButtonError();
}
}

// make an array of passwords

function addPassword () {
  password1El.textContent = makePassword();
  password2El.textContent = makePassword();
}

