/*
    This problem is about unit testing.

    Your company needs a function that meets the following requirements:

    For a given array of  integers, the function returns the index of the element with the minimum value in the array. If there is more than one element with the minimum value, it returns the smallest one.
    If an empty array is passed to the function, it raises an exception. A colleague has written this method. The implementation in TypeScript is listed below.

    function minimumIndex(seq: number[]): number {
        if (seq.length === 0) {
            throw new Error("Cannot get the minimum value index from an empty sequence");
        }

        let minIdx: number = 0;
        for (let i: number = 1; i < seq.length; i++) {
            if (seq[i] < seq[minIdx]) {
                minIdx = i;
            }
        }

        return minIdx;
    }

    A coworker has prepared functions that will perform the tests and validate return values. Finish the implementation of  classes to provide data and expected results for the tests.

    Complete the following methods.

    In the class TestDataEmptyArray:

    get_array() returns an empty array
    In the class TestDataUniqueValues:

    get_array() returns an array of size at least 2 with all unique elements
    get_expected_result() returns the expected minimum value index for this array
    In the class TestDataExactlyTwoDifferentMinimums:

    get_array() returns an array where the minimum value occurs at exactly 2 indices
    get_expected_result() returns the expected index
    Take a look at the code template to see the exact implementation of functions that your colleague already implemented.

    Note: The arrays are indexed from 0.
*/

class TestDataEmptyArray {
  get_array(): number[] {
    return [];
  }
}

class TestDataUniqueValues {
  get_array(): number[] {
    return [5, 2, 8, 1, 9];
  }

  get_expected_result(): number {
    return 3;
  }
}

class TestDataExactlyTwoDifferentMinimums {
  get_array(): number[] {
    return [5, 3, 2, 1, 1, 4];
  }

  get_expected_result(): number {
    return 3;
  }
}

function minimumIndex(seq: number[]): number {
  if (seq.length === 0) {
    throw new Error(
      "Cannot get the minimum value index from an empty sequence"
    );
  }

  let minIdx: number = 0;
  for (let i: number = 1; i < seq.length; i++) {
    if (seq[i] < seq[minIdx]) {
      minIdx = i;
    }
  }

  return minIdx;
}

function TestInput() {
  /*
  //Tested on https://www.hackerrank.com/challenges/30-testing/problem?isFullScreen=true
  const t: number = parseInt(readLine().trim(), 10);

  for (let tItr: number = 0; tItr < t; tItr++) {
    const firstMultipleInput: string[] = readLine()
      .replace(/\s+$/g, "")
      .split(" ");

    const n: number = parseInt(firstMultipleInput[0], 10);

    const k: number = parseInt(firstMultipleInput[1], 10);

    const a: number[] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((aTemp) => parseInt(aTemp, 10));
  }*/

  console.log("OK");
}
