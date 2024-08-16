/*
    Task
    Consider a database table, Emails, which has the attributes First Name and Email ID. Given N rows of data simulating the Emails table, print an alphabetically-ordered list of people whose email address ends in .

    Input Format
    The first line contains an integer, N, total number of rows in the table.
    Each of the N subsequent lines contains 2 space-separated strings denoting a person's first name and email ID, respectively.

    Constraints
    2 <= N <= 30
    Each of the first names consists of lower case letters [a-z] only.
    Each of the email IDs consists of lower case letters [a-z], @ and . only.
    The length of the first name is no longer than 20.
    The length of the email ID is no longer than 50.

    Output Format
    Print an alphabetically-ordered list of first names for every user with a gmail account. Each name must be printed on a new line.
*/

function main_printGMailUsers() {
  const N = parseInt(readLine().trim(), 10);
  let gmailUsers = [];

  for (let NItr = 0; NItr < N; NItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const firstName = firstMultipleInput[0];

    const emailID = firstMultipleInput[1];

    if (emailID.endsWith("@gmail.com")) {
      gmailUsers.push(firstName);
    }
  }

  gmailUsers.sort();

  for (let user of gmailUsers) {
    console.log(user);
  }
}

const input =
  "6\nriya riya@gmail.com\njulia julia@julia.me\njulia sjulia@gmail.com\njulia julia@gmail.com\nsamantha samantha@gmail.com\ntanya tanya@gmail.com";
