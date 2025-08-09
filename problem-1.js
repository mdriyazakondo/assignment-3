// /============= Assignment - 3 ===================/;

/** Problem -01 ( Divide the Asset ) */
var area = -15;
//write your code here

if (area > 0) {
  var divide = area / 2;
  console.log(divide);
}

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here

if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

for (var i = 1; i <= lastDay; i++) {
  if (i <= 30 ) {
    if (i % 3 === 0) {
      console.log(i + " - medicine");
    } else {
      console.log(i + " - rest");
    }
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.padf";
//write your code here

var names = fileName[0] === "#";

var files = fileName.split(".");
var extension = files[files.length - 1];

var pdf = extension === "pdf";
var docx = extension === "docx";

if (names || pdf || docx) {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhanku", roll: 1014, department: "cse" };
//write your code here

var name = student.name.toLowerCase();
var roll = student.roll;
var department = student.department.toLowerCase();
var code = "@ph.ac.bd";

var emailGenerator = name + roll + "." + department + code;
console.log(emailGenerator);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var amount = startingSalary;

for (var i = 0; i < experience; i++) {
  amount = (amount * 5) / 100 + amount;
}
console.log(amount.toFixed(2));
