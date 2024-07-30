/*
    Task
    You are given two classes, Person and Student, where Person is the base class and Student is the derived class. 
    Completed code for Person and a declaration for Student are provided for you in the editor. 
    Observe that Student inherits all the properties of Person.

    Complete the Student class by writing the following:

    A Student class constructor, which has 4 parameters:
    A string, firstName.
    A string, lastName.
    An integer, idNumber.
    An integer array (or vector) of test scores, scores.
    A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:

    Sample Input
    Heraldo Memelli 8135627
    2
    100 80

    Sample Output
    Name: Memelli, Heraldo
    ID: 8135627
    Grade: O
*/

class Person {
  constructor(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
  }

  printPerson() {
    console.log(
      "Name: " + this.lastName + ", " + this.firstName + "\nID: " + this.id
    );
  }
}

class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  calculate() {
    const average = this.calculateAverageScore();

    return this.gradeByAvarageScore(average);
  }

  calculateAverageScore() {
    let scoreTotal = 0;
    for (let i = 0; i < this.scores.length; i++) {
      scoreTotal += this.scores[i];
    }

    const average = scoreTotal / this.scores.length;

    return average;
  }

  gradeByAvarageScore(averageScore) {
    if (averageScore >= 90 && averageScore <= 100) {
      return "O";
    } else if (averageScore >= 80 && averageScore <= 90) {
      return "E";
    } else if (averageScore >= 70 && averageScore <= 80) {
      return "A";
    } else if (averageScore >= 55 && averageScore <= 70) {
      return "P";
    } else if (averageScore >= 40 && averageScore <= 55) {
      return "D";
    } else if (averageScore < 40) {
      return "T";
    }
  }
}

function main() {
  let firstName = "Memelli";
  let lastName = "Heraldo";
  let id = 8135627;
  let numScores = 2;
  let testScores = new Array(numScores);
  testScores[0] = 100;
  testScores[1] = 80;

  let s = new Student(firstName, lastName, id, testScores);
  s.printPerson();
  s.calculate();
  console.log("Grade: " + s.calculate());
}

main();
