export class BookStack {
    constructor() {
      this.items = [];
    }
  
    push(book) {
      this.items.push(book);
    }
  
    pop() {
      return this.items.length > 0 ? this.items.pop() : null;
    }
  
    peek() {
      return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      return this.items.slice().reverse();
    }
  }
  