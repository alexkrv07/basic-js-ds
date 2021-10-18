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
              insertNode(node.left, newNode);
          }
      } else {
          if (node.right === null) {
              node.right = newNode;
          } else {
              insertNode(node.right, newNode);
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
      return helpHas(this.tree, data);
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
      return helpFind(this.tree, data);
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

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.tree = this.removeNode(this.tree, data);
  }

  removeNode(node, data) {
    if (node === null) {
        return null;
    // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    // если данные такие как данные корня, удаляем узел
    } else {
        // удаляем узел без потомков (листовой узел (leaf) или крайний)
      if (node.left === null && node.right === null) {
          node = null;
          return node;
      }
      // удаляем узел с одним потомком
      if (node.left === null) {
          node = node.right;
          return node;
      } else if(node.right === null) {
          node = node.left;
          return node;
      }
      // удаляем узел с двумя потомками
      // minNode правого поддерева хранится в новом узле
      let newData = this.min(node.right);
      node.data = newData;
      node.right = this.removeNode(node.right, newData);
      return node;
    }
  }

  min(node = this.tree) {
    if (!node) {
      return null;
    }
    let min = node;

    while (min.left) {
      min = min.left;
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
