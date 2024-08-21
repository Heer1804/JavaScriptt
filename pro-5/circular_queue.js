class circularQueue {
    constructor(value) {
      this.value = value;
      this.item = new Array(value);
      this.front = -1;
      this.rear = -1;
    }
    enqueue(element) {
      if ((this.rear + 1) % this.value === this.front) {
        return "full";
      }
      if (this.front === -1) {
        this.front = 0;
      }
  
      this.rear = (this.rear + 1) % this.value;
      this.item[this.rear] = element;
    }
  
    dequeue() {
      if (this.front === -1) {
        return "empty";
      }
  
      let item = this.item[this.front]; 
  
      if (this.front === this.rear) {
        this.front = -1;
        this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.value;
      }
      return item;
    }
  
    frontItem() {
      if (this.front === -1) {
        return "empty";
      }
      return this.item[this.front];
    }
  
    isEmpty() {
      return this.front === -1;
    }
  
    isFull() {
      return (this.rear + 1) % this.value === this.front;
    }
  }
  
  let cir = new circularQueue(3)
  cir.enqueue(100)
  cir.enqueue(200)
  cir.enqueue(300)
  cir.enqueue(400)
  console.log(cir.item)
  console.log(cir.isFull())
  console.log(cir.item)
  console.log(cir.frontItem()) 
  console.log(cir.dequeue())
  console.log(cir.item)
  console.log(cir.frontItem()) 
  console.log(cir.rear)
  console.log(cir.isEmpty()) 
  