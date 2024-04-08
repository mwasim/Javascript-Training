/*
    O(1) = Constant Time

    No matter how big is the boxes array, the number of operations is going to be 2
    We don't care about O(2), O(3), O(4) etc. We round it down and simply say O(1)

    Keep in mind, inputs can be any type of data, not just arrays.

    O(1) refers to constant time complexity. 
        It means that the time required to perform an operation or solve a problem remains constant, 
        regardless of the size of the input. In other words, the execution time does not depend on the input size.

    Examples:
        1). Accessing an element in an array at a specific index (it doesn't matter array has 10 or 10K elements, accessing the element will take same amount of time)
        2). Inserting or deleting an element from a HashSet takes constant time - A HashSet is a data structure that allows efficient insertion, deletion, and retrieval of elements.
        3). Checking if a number is even or odd (it doesn't matter number is 1 or 1 million.)
        4). Retrieving the head (first element) of a linked list 
        5). Performing bitwise operations - such as AND, OR, XOR, and shifting, typically take constant time. The number of bits in the operands does not affect the execution time.
        - Accessing elements in a hash table with a good hash function.
        - Pushing and popping elements from the top of a stack.
        - Enqueuing and dequeuing elements from the ends of a deque (double-ended queue).
        - Performing arithmetic operations on fixed-size integers.
        - Swapping the values of two variables
        - 
*/

const boxes = [0, 1, 2, 3, 4, 5];

const logFirstBox = (arr) => {
  console.log(arr[0]);
};

const logFirstTwoBoxes = (arr) => {
  console.log(arr[0]);
  console.log(arr[1]);
};

/*
    No matter how big is the boxes array, the number of operations is going to be 2
    We don't care about O(2), O(3), O(4) etc. We round it down and simply say O(1)
*/
logFirstTwoBoxes(boxes); //O(2); -
