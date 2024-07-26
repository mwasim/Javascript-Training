/*
    Task
    Write a Person class with an instance variable, age, and a constructor that takes an integer, initialAge, as a parameter. 
        The constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative; 
        if a negative argument is passed as initialAge, the constructor should set age to 0 and print Age is not valid, setting age to 0.. 
        In addition, you must write the following instance methods:

    yearPasses() should increase the age instance variable by 1.
    amIOld() should perform the following conditional actions:
        If age < 13, print You are young..
        If age >= 13 and age < 18, print You are a teenager..
        Otherwise, print You are old..
*/

class Person {
  constructor(initialAge) {
    if (initialAge > 0) {
      this.age = initialAge;
    } else {
      this.age = 0;
      console.log("Age is not valid, setting age to 0.");
    }
  }

  yearPasses() {
    this.age++; //should increase the age instance variable by 1
  }

  amIOld() {
    if (this.age < 13) {
      console.log("You are young.");
    } else if (this.age >= 13 && this.age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  }
}

function main() {
  const ages = [4, -1, 10, 16, 18];

  for (i = 0; i < ages.length; i++) {
    var age = ages[i];
    var p = new Person(age);
    p.amIOld();
    for (j = 0; j < 3; j++) {
      p.yearPasses();
    }
    p.amIOld();
    console.log("");
  }
}

main();
