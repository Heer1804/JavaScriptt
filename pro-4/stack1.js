class Stack {
    constructor() {
      this.item = [];
      this.top = -1; // stack is empty
    }
  
    push(element) {
      this.top++; // 0
      this.item[this.top] = element;
    }
  
    pop() {
      if (this.top < 0) {
        console.log("Stack is underflow");
        return undefined;
      }
      let popedItem = this.item[this.top]; // top poped
      this.top--;
      return popedItem;
    }
  
    peek() {
      if (this.top < 0) {
        console.log("Stack is underflow");
        return undefined;
      }
      return this.item[this.top];
    }
  
    isEmpty() {
      return this.top < 0;
    }
  }
  
  let stack = new Stack();
  
  stack.push(100);
  stack.push(200);
  stack.push(300);
  stack.push(400);
  stack.push(500);
  console.log(stack.item);
  console.log(stack.item);
  console.log(stack.peek());
  console.log(stack.isEmpty());