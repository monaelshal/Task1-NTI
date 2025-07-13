
var userName = prompt("Please, Enter your name ");
var userBirthYear = +prompt("Please, Enter your birth year");
var isStudent = confirm("Are you a student? ");

var currentYear = new Date().getFullYear();
var userAge = currentYear - userBirthYear
// console.log(userAge)

var category=""

 if (userAge < 13) {
      category = "Kid";
} else if (userAge >= 13 && userAge <= 17) {
      category = "Teen";
} else if (userAge >= 18 && userAge <= 59) {
      category = "Adult";
} else {
      category = "Senior";
}

var message = `Hello ${userName} , you are ${userAge} years old.\n`;
    message += ` Category : ${category} . \n`;
    if (isStudent) {
      message += "Don't forget to study hard !!";
    }
console.log(message);
window.alert(message);
document.getElementById("screenResult").innerText = message;