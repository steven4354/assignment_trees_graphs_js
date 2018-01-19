class BinaryTree {
  constructor(array) {
    this.root = new Node(null, null, array[0]);
    for (let i = 1; i < array.length; i++) {
      this.insertNode(new Node(null, null, array[i]));
    }
  }

  insertNode(node) {
    let currentNode = this.root;
    while (currentNode) {
      if (node.data > currentNode.data) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = node;
          break;
        }
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = node;
          break;
        }
      }
    }
  }

  printTree() {
    let stack = [];
    let currentNode = this.root;
    stack.push(currentNode);

    while (stack.length) {
      currentNode = stack.shift();
      if (currentNode.left) {
        stack.push(currentNode.left);
      }
      if (currentNode.right) {
        stack.push(currentNode.right);
      }

      console.log(currentNode.data);
    }
  }
}

class Node {
  constructor(left, right, data) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

const binary_tree = new BinaryTree([8, 10, 3, 1, 6, 14, 4, 7, 13]);

binary_tree.printTree();
