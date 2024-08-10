/*
    Task
    A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes from left to right, top to bottom. You are given a pointer, root, pointing to the root of a binary search tree. Complete the levelOrder function provided in your editor so that it prints the level-order traversal of the binary search tree.

    Hint: You'll find a queue helpful in completing this challenge.
*/
// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  // Start of function levelOrder
  this.levelOrder = function (root) {
    if (!root) return; // Handle the case of an empty tree

    // Use a queue to perform the level-order traversal
    const queue = [root];
    const nodesDataItems = [];

    while (queue.length > 0) {
      // Get the number of nodes at the current level
      const levelSize = queue.length;

      // Process all the nodes at the current level
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        //console.log(`${node.data} `); // Print the current node's data
        nodesDataItems.push(node.data);

        // Add the left and right child nodes to the queue, if they exist
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      // Move to the next level
      //console.log();
    }

    const spacedDataItems = nodesDataItems.join(" ");
    console.log(spacedDataItems);
  }; // End of function levelOrder
} // End of function BinarySearchTree

const main = (input) => {
  var tree = new BinarySearchTree();
  var root = null;

  var values = input.split("\n").map(Number);

  for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }

  tree.levelOrder(root);
};

const input = "6\n3\n5\n4\n7\n2\n1";
main(input);
