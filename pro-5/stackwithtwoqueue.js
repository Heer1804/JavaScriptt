class StackWithTwoQueue {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(element) {
      // enqueue in the first queue
      this.queue1.push(element);
    }
  
    pop() {
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
      const poppeditem = this.queue1.shift();
      return poppeditem;
    }
  }
  
  let obj = new StackWithTwoQueue();
  
  obj.push(100);
  obj.push(200);
  obj.push(300);
  console.log(obj.queue1);
  console.log(obj.queue2);
  console.log(obj.pop());
  console.log(obj.queue2);
  