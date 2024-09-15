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

function inOrder(root) {
  // Base case: if the current node is null, return immediately
  if (root === null) {
    return;
  }

  // Recursively traverse the left subtree
  inOrder(root.left);

  // Print the value of the current node (postorder traversal)
  process.stdout.write(root.data + " ");

  // Recursively traverse the right subtree
  inOrder(root.right);
}

/* tail begins */

process.stdin.resume();
process.stdin.setEncoding("ascii");

var _stdin = "";
var _stdin_array = "";
var _currentline = 0;

process.stdin.on("data", function (data) {
  _stdin += data;
});

process.stdin.on("end", function () {
  _stdin_array = _stdin.split("\n");
  solution();
});

function readLine() {
  return _stdin_array[_currentline++];
}

function solution() {
  var tree = new Tree();
  var n = parseInt(readLine());
  var m = readLine().split(" ").map(Number);
  for (var i = 0; i < n; i++) {
    tree.root = tree.insert(tree.root, m[i]);
  }

  inOrder(tree.root);
}
