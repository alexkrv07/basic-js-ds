const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.root()) {
      this.tree = newNode;
    } else {
      insertNode(this.tree, newNode);
    }

    function insertNode(node, newNode) {
      if (newNode.data < node.data) {
          if (node.left === null) {
              node.left = newNode;
          } else {
              this.insertNode(node.left, newNode);
          }
      } else {
          if (node.right === null) {
              node.right = newNode;
          } else {
              this.insertNode(node.right, newNode);
          }
      }
    }

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.root()) {
      return false;
    } else {
      helpHas(this.tree, data);
    }


    function helpHas(node, data) {
      if (node === null) {
          return false;
      } else if (data < node.data) {
          return helpHas(node.left, data);
      } else if (data > node.data) {
          return helpHas(node.right, data);
      } else {
          return true;
      }
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.root()) {
      return null;
    } else {
      helpFind(this.tree, data);
    }


    function helpFind(node, data) {
      if (node === null) {
          return null;
      } else if (data < node.data) {
          return helpFind(node.left, data);
      } else if (data > node.data) {
          return helpFind(node.right, data);
      } else {
          return node;
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.root()) {
      return null;
    }
    let min = this.tree;

    while (min.left) {
      min = max.left;
    }
    return min.data;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    if (!this.root()) {
      return null;
    }
    let max = this.tree;

    while (max.right) {
      max = max.right;
    }


    return max.data;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}