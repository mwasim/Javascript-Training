/*
    There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
*/

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */

function matchingStrings(stringList, queries) {
  // Write your code here
  /*
  let results = [];
  for (let query of queries) {
    //console.log(query);
    let matchCount = 0;
    for (const str of stringList) {
      if (query === str) matchCount++;
    }
    //console.log(matchCount);
    results.push(matchCount);
  }

  //console.log(results);

  return results;*/
  //Optimized code below
  // Create a map to store the count of each string in the stringList
  const stringCount = new Map();

  // Count the occurrence of each string in the stringList
  for (const str of stringList) {
    if (stringCount.has(str)) {
      stringCount.set(str, stringCount.get(str) + 1);
    } else {
      stringCount.set(str, 1);
    }
  }

  // Count the occurrence of each query string in the stringList
  const results = [];
  for (const query of queries) {
    if (stringCount.has(query)) {
      results.push(stringCount.get(query));
    } else {
      results.push(0);
    }
  }

  return results;
}

function main_matchingStrings(stringList, queries) {
  /*  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const stringListCount = parseInt(readLine().trim(), 10);

  let stringList = [];

  for (let i = 0; i < stringListCount; i++) {
    const stringListItem = readLine();
    stringList.push(stringListItem);
  }

  const queriesCount = parseInt(readLine().trim(), 10);

  let queries = [];

  for (let i = 0; i < queriesCount; i++) {
    const queriesItem = readLine();
    queries.push(queriesItem);
  }*/

  const result = matchingStrings(stringList, queries);
  //console.log(result);
  console.log(result.join("\n") + "\n");

  //ws.end();
}

const stringListInput = ["aba", "baba", "aba", "xzxb"];
const queryListInput = ["aba", "xzxb", "ab"];

main_matchingStrings(stringListInput, queryListInput);
