class Queue {
    constructor() {
        this.items = [];
    }
    
   
    enqueue(element) {
        return this.items.push(element);
    }
    
 
    dequeue() {
        if(this.items.length == 0)
        return("Underflow");
        else(this.items.length > 0) 
            return this.items.shift();
        }
    
    
    isEmpty(){
       return this.items.length == 0;
    }
   
   
    size(){
        return this.items.length;
    }
 
  
    clear(){
        this.items = [];
    }
}

let queue = new Queue();
console.log(queue.dequeue());
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
queue.enqueue(8);
queue.enqueue(10);
console.log("Elements inserted into the queue= ");
console.log(queue.items);

queue.dequeue();
console.log("Queue after an element is deleted= ");
console.log(queue.items);
console.log
console.log(queue.isEmpty());
console.log("Size of the queue= ");
console.log(queue.size());

queue.clear();
console.log(queue.items);
