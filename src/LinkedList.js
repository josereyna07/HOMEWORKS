class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  export class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
    }
  
    toArray() {
      const result = [];
      let current = this.head;
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      return result;
    }
  }
  