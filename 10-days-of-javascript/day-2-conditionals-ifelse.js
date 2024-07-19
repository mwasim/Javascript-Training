"use strict";

function getGrade(score) {
  let grade;
  // Write your code here
  const A_GRADE_MIN_VALUE = 25;
  const B_GRADE_MIN_VALUE = 20;
  const C_GRADE_MIN_VALUE = 15;
  const D_GRADE_MIN_VALUE = 10;
  const E_GRADE_MIN_VALUE = 5;
  //const F_GRADE_MIN_VALUE = 0;

  if (score <= E_GRADE_MIN_VALUE) grade = "F";
  else if (score <= D_GRADE_MIN_VALUE) grade = "E";
  else if (score <= C_GRADE_MIN_VALUE) grade = "D";
  else if (score <= B_GRADE_MIN_VALUE) grade = "C";
  else if (score <= A_GRADE_MIN_VALUE) grade = "B";
  else grade = "A";

  return grade;
}

console.log(getGrade(11));
