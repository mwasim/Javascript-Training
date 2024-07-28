/*
    Task
    Given n names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. 
    You will then be given an unknown number of names to query your phone book for. 
    For each name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; 
    if an entry for  is not found, print Not found instead.

    Note: Your phone book should be a Dictionary/Map/HashMap data structure.

    Input Format:
    The first line contains an integer, n, denoting the number of entries in the phone book.
    Each of the  subsequent lines describes an entry in the form of 2 space-separated values on a single line. The first value is a friend's name, and the second value is an 8-digit phone number.

    After the n lines of phone book entries, there are an unknown number of lines of queries. 
    Each line (query) contains a name to look up, and you must continue reading lines until there is no more input.

    Note: Names consist of lowercase English alphabetic letters and are first names only.
*/
function processData(input) {
  //Enter your code here
  const splitLines = input.split(/\r?\n/);
  const noOfEntries = Number(splitLines[0]);

  //console.log(splitLines.length);

  //const phoneBook = new Map();
  const phoneBook = {}; //object based implementation
  let counter = 0;
  while (counter <= noOfEntries) {
    counter++;
    if (counter <= noOfEntries) {
      const [name, phone] = splitLines[counter].split(" ");
      //console.log("line ", splitLines[counter]);
      //phoneBook.set(name, phone);
      phoneBook[name] = phone;
    }
  }

  //print out phone numbers based on given names in the input
  if (splitLines.length <= noOfEntries) return;

  for (let index = noOfEntries + 1; index < splitLines.length; index++) {
    const name = splitLines[index];
    //console.log(name);
    //if (phoneBook.has(name)) console.log(`${name} ${phoneBook.get(name)}`);
    if (phoneBook.hasOwnProperty(name))
      console.log(`${name}=${phoneBook[name]}`);
    else console.log("Not found");
  }
}

const input =
  "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry";
processData(input);
