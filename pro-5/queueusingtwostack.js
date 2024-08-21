class QueueUsingTwoStacks {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(element) {
      this.stack1.push(element);
    }
  
    dequeue() {
      // it stack 2 is empty , move element from stack 1 to stack 2
      if (this.stack2.length == 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      // if stact2 is still empty
      if (this.stack2.length == 0) {
        throw new Error("Queue is empty");
      }
  
      return this.stack2.pop();
    }
  
    peek() {
      if (this.stack2.length === 0) {
        throw new Error("Queue is empty");
      }
      return this.stack2[this.stack2.length - 1];
    }
  
    empty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  }
  
  let obj = new QueueUsingTwoStacks();
  obj.enqueue(100);
  obj.enqueue(200);
  console.log(obj.dequeue());
  obj.enqueue(300);
  console.log(obj.peek());
  console.log(obj.dequeue());
  console.log(obj.empty());