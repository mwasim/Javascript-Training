/*
    Complete the postOrder function in the editor below.It received 1 parameter: a pointer to the root of a binary tree.It must print the values in the tree's postorder traversal as a single line of space-separated values.
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

function postOrder(root) {
  // Base case: if the current node is null, return immediately
  if (root === null) {
    return;
  }

  // Recursively traverse the left subtree
  postOrder(root.left);

  // Recursively traverse the right subtree
  postOrder(root.right);

  // Print the value of the current node (postorder traversal)
  process.stdout.write(root.data + " ");
}

/* tail begins */

function solution() {
  var tree = new Tree();
  var n = parseInt(readLine());
  var m = readLine().split(" ").map(Number);
  for (var i = 0; i < n; i++) {
    tree.root = tree.insert(tree.root, m[i]);
  }

  postOrder(tree.root);
}
