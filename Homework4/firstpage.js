var person = prompt("Please enter your name", "Bad boy")

if (hasNumber(person)) {
  insertToContainer(person.split("").reverse().join(""));
} else {
  insertToContainer(toGamelKeys(person));
}

function hasNumber(string) {
  if (/\d/.test(string)) {
    return true;
  }
}

function insertToContainer(string) {
  document.getElementById("container").innerHTML = string;
}

function isOddNumber(number) {
  if (number % 2 == 0) {
    return true;
  }
}

function toGamelKeys(string) {
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (isOddNumber(i)) {
      result += string[i].toLowerCase();
    } else {
      result += string[i].toUpperCase();
    }
  }
  return result;
}