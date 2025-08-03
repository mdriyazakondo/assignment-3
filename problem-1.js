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
var fileName = "pdfData.jpg";
//write your code here

if (fileName[0] === "#" || fileName === ".pdf" || fileName === ".docx ") {
  console.log("Store");
} else {
  console.log("Delete");
}
