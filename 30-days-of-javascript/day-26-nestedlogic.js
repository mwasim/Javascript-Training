/*
    Task
    Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

    If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine=0).
    If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 Hackos x (the number of days late).
    If the book is returned after the expected return month but still within the same calendar year as the expected return date, the  fine = 500 Hackos x (the number of months late).
    If the book is returned after the calendar year in which it was expected, there is a fixed fine of 1000 Hackos.

    Example
    d1, m1, y1 = 12312014 returned date
    d2,m2,y2 = 112015 due date

    The book is returned on time, so no fine is applied.

    d1, m1, y1 = 112015 returned date
    d2,m2,y2 = 12312014 due date

    The book is returned in the following year, so the fine is a fixed 10000.


    Input Format

    The first line contains 3 space-separated integers denoting the respective day, month, and year on which the book was actually returned.
    The second line contains 3 space-separated integers denoting the respective day, month, and year on which the book was expected to be returned (due date).


    Output Format

    Print a single integer denoting the library fine for the book received as input.

    Sample Input
    STDIN       Function
    -----       --------
    9 6 2015    day = 9, month = 6, year = 2015 (date returned)
    6 6 2015    day = 6, month = 6, year = 2015 (date due)

    Sample Output
    45
*/

function processData(input) {
  //Enter your code here
  const lines = input.trim().split("\n");
  const returnDate = lines[0];
  const dueDate = lines[1];

  const fine = calculateFine(returnDate, dueDate);
  console.log(fine);
}

function calculateFine(returnDate, dueDate) {
  const [returnDay, returnMonth, returnYear] = returnDate
    .split(" ")
    .map(Number);
  const [dueDay, dueMonth, dueYear] = dueDate.split(" ").map(Number);

  const returnDateObj = new Date(returnYear, returnMonth - 1, returnDay);
  const dueDateObj = new Date(dueYear, dueMonth - 1, dueDay);

  const timeDiff = returnDateObj.getTime() - dueDateObj.getTime();
  const daysDiff = Math.max(0, Math.ceil(timeDiff / (1000 * 3600 * 24)));

  if (returnYear < dueYear) {
    return 0; // No fine if returned before the due year
  } else if (returnYear === dueYear && returnMonth < dueMonth) {
    return 0; // No fine if returned before the due month
  } else if (
    returnYear === dueYear &&
    returnMonth === dueMonth &&
    returnDay <= dueDay
  ) {
    return 0; // No fine if returned on or before the due date
  } else if (
    returnYear === dueYear &&
    returnMonth === dueMonth &&
    returnDay > dueDay
  ) {
    return 15 * daysDiff; // Fine of 15 Hackos per day late
  } else if (returnYear === dueYear && returnMonth > dueMonth) {
    const monthsDiff = returnMonth - dueMonth;
    return 500 * monthsDiff; // Fine of 500 Hackos per month late
  } else {
    return 10000; // Fixed fine of 10000 Hackos
  }
}

const returnedDate = "31 8 2004";
const dueDate = "20 1 2004";

processData(`${returnedDate}\n${dueDate}`);
