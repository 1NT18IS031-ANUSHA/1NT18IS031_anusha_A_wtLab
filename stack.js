class Stack {
    constructor()
    {
     this.items = [];
    }
       push(element)
       {
        this.items.push(element);
       }
       pop()
       {
        if (this.items.length == 0)
         return ("Underflow");
        return this.items.pop();
       }
       front()
       {
        return this.items[this.items.length - 1];
       }
       isEmpty()
       {
           return this.items.length == 0;
       }
       size(){
        return this.items.length;
    }
 
  
    clear(){
        this.items = [];
    }
       printStack()
       {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
         str += this.items[i] + " ";
        return str;
       }
   }
   var stack = new Stack();
   console.log(stack.printStack());
   console.log(stack.pop());

   stack.push(2);
   stack.push(4);
   stack.push(6);
   stack.push(8);
   stack.push(10);
   console.log("Elements pushed into the stack are=");
   console.log(stack.printStack());
   console.log("The front element of the stack=");
   console.log(stack.front());
   console.log("The element popped from the stack=");
   console.log(stack.pop());
   console.log("The stack after popping=")
   console.log(stack.printStack());
   console.log(stack.isEmpty());
   console.log("Size of the stack= ");
console.log(stack.size());
stack.clear();
console.log(stack.items);
