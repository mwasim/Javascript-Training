/*
Complete the preOrder function in the editor below, which has 1 parameter: a pointer to the root of a binary tree.It must print the values in the tree's preorder traversal as a single line of space-separated values.
*/
var Tree = function () {
  this.root = null;
};

Tree.prototype.insert = function (node, data) {
  if (node == null) {
    node = new Node(data);
  } else if (data < node.data) {
    node.left = this.insert(node.left, data);
  } else {
    node.right = this.insert(node.right, data);
  }

  return node;
};

var Node = function (data) {
  this.data = data;
  this.left = null;
  this.right = null;
};

/* head ends */

/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.
// Function to perform preorder traversal of a binary tree
function preOrder(root) {
  // Base case: if the current node is null, return immediately
  if (root === null) {
    return;
  }

  // Print the data of the current node
  process.stdout.write(root.data + " ");

  // Recursively traverse the left subtree
  preOrder(root.left);

  // Recursively traverse the right subtree
  preOrder(root.right);
}

/* tail begins */

function solution() {
  var tree = new Tree();
  var n = parseInt(readLine());
  var m = readLine().split(" ").map(Number);
  for (var i = 0; i < n; i++) {
    tree.root = tree.insert(tree.root, m[i]);
  }

  preOrder(tree.root);
}
