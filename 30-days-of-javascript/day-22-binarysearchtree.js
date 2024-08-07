/*
    Task
    The height of a binary search tree is the number of edges between the tree's root and its furthest leaf. You are given a pointer, root, pointing to the root of a binary search tree. Complete the getHeight function provided in your editor so that it returns the height of the binary search tree.
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

  // Start of function getHeight
  this.getHeight = function (root) {
    if (!root) {
      return -1; // The height of an empty tree is -1
    }

    let leftHeight = this.getHeight(root.left);
    let rightHeight = this.getHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }; // End of function getHeight
} // End of function BinarySearchTree

const main = (input) => {
  var tree = new BinarySearchTree();
  var root = null;

  var values = input.split("\n").map(Number);

  for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }

  console.log(tree.getHeight(root));
};

const input = "7\n3\n5\n2\n1\n4\n6\n7";
main(input);
