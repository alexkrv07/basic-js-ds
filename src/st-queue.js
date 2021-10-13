// const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require("../extensions/list-node");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
    // throw new NotImplementedError('Not implemented');
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.queue) {
      this.queue = newNode;
    } else {
      let tail = this.queue;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
    // throw new NotImplementedError('Not implemented');
  }

  dequeue() {
    const value = this.queue.value;    
    this.queue = this.queue.next;
    return value;
    // throw new NotImplementedError('Not implemented');
  }

}
