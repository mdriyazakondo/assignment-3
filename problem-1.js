/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

if (area > 0) {
  const divide = area / 2;
  console.log(divide);
}

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 30;
//write your code here

for (let i = 0; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(i + "-medicine");
  } else {
    console.log(i + "-rest");
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.padf";
//write your code here
var names = fileName[0] === "#";
var pdf = fileName.includes(".pdf");
var docx = fileName.includes(".docx");

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

var total = name + roll + "." + department + code;
console.log(total);
