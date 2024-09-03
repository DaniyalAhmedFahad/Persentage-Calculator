var RESULT = ("");
var subject1 = +prompt("English Marks");
var subject2 = +prompt("Urdu Marks");
var subject3 = +prompt("Maths Marks");
var subject4 = +prompt("Cumputer Science Marks");
var subject5 = +prompt("Islamiat Marks");

var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
var maxMarks = 500;
var percentage = (totalMarks / maxMarks) * 100;
var grade;

if (percentage >= 100) {
    grade = 'A+';
}
else if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else {
    grade = 'You are fail';
}
document.write("RESULT" + RESULT + "<br />" + "<br />")
document.write("Subject English Marks is " + subject1 + "<br />")
document.write("Subject Urdu Marks is " + subject2 + "<br />")
document.write("Subject Maths Marks is " + subject3 + "<br />")
document.write("Subject Cumputer Science Marks is " + subject4 + "<br />")
document.write("Subject Islamiat Marks is " + subject5 + "<br />")
document.write("Your's Total Marks is " + totalMarks + "<br />")
document.write("Your's Percentage is " + percentage + "<br />")
document.write("" + grade)