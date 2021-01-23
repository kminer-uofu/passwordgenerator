// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H','I','J','K','L','M','N','O','P','Q', 'R', 'S', 'T','U','V','X','Y','Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h','i','j','k','l','m','n','o','p','q', 'r', 's', 't','u','v','x','y','z'];
var character = ['!','#','$', '%','&','*',];
var number = ['1','2','3','4','5','6','7','8','9','0'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function getPasswordOptions() {
  var length = parseInt(prompt("Please provide the length of the password"));
  
  if (isNaN(length)===true){
    alert("I am sorry that is not a number, please provide a number");
    return;
  }

  if (length < 8 && length > 120){
    alert("Password needs to be greater than 8 and less than 120");
    return;
  }

  var characterUse = confirm("Do you want to use Chararcters?");
  var numbersUse = confirm("Do you want to use numbers?");
  var upperCaseUse = confirm("Do you want to use upper case letters?");
  var lowerCaseUse = confirm("Do you want to use lower case letters?");

  if (!characterUse && !numbersUse && !upperCaseUse && !lowerCaseUse){
    alert("You need to have at least one type of character.")
    return;
  }
  
  const passwordOptions = {
    length: length,
    characterUse: characterUse,
    numbersUse: numbersUse,
    upperCaseUse: upperCaseUse,
    lowerCaseUse: lowerCaseUse
  } 
  return passwordOptions;


};

function generatePassword() {
  getPasswordOptions();
  var storePassword = [];
  var storePossibleCharacters = [];
  var storeGuaranteedCharacters = [];

  if (getPasswordOptions.characterUse){
    storePossibleCharacters = storePossibleCharacters.concat(character);
    storeGuaranteedCharacters = storeGuaranteedCharacters.push(getRandom(character));
  }
  if (getPasswordOptions.numbersUse){
    storePossibleCharacters = storePossibleCharacters.concat(number);
    storeGuaranteedCharacters = storeGuaranteedCharacters.push(getRandom(number));
  }if (getPasswordOptions.lowerCaseUse){
    storePossibleCharacters = storePossibleCharacters.concat(lowerCase);
    storeGuaranteedCharacters = storeGuaranteedCharacters.push(getRandom(lowerCase));
  }if (getPasswordOptions.upperCaseUse){
    storePossibleCharacters = storePossibleCharacters.concat(upperCase);
    storeGuaranteedCharacters = storeGuaranteedCharacters.push(getRandom(upperCase));
  }
// loop over number of password length from the options object and select at random from the characters arrays. push possible character to the results array.
for (i=0; i < passwordOptions.length; i++){
  var possibleCharacter = getRandom(storePossibleCharacters);
  result.push(possibleCharacter);
}
// another for loop that loops through guaranteed characters array and sets each character index to the result index.

for (i=0; i< storeGuaranteedCharacters.length; i++)
  var characterIndex = i;
  return result.join("");
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
