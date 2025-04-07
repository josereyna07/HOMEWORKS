class DoubleNode {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  export class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.current = null;
    }
  
    visit(value) {
      const node = new DoubleNode(value);
      if (!this.head) {
        this.head = this.tail = this.current = node;
      } else {
        if (this.current && this.current !== this.tail) {
          this.current.next = null;
          this.tail = this.current;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.current = node;
      }
    }
  
    back() {
      if (this.current?.prev) {
        this.current = this.current.prev;
      }
    }
  
    forward() {
      if (this.current?.next) {
        this.current = this.current.next;
      }
    }
  
    getCurrent() {
      return this.current?.value ?? "No page";
    }
  }
  