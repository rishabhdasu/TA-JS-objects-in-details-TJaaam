class Stack {
    constructor() {
        this.stack = [];
    }
    push(value) {
        this.stack.push(value);
        return this.stack;
    }
    pop() {
        this.stack.pop();
        return this.stack;
    }
    peek(index = this.stack.length - 1) {
        return this.stack[index]
    }
    reverse() {
        return this.stack = this.stack.reverse();
    }
    isEmpty() {
        return this.stack.length === 0;
        // !(this.stack.length > 0)
    }
    displayStack() {
        return this.stack.toString();
        // this.stack.join(" ");
    }
    get length() {
        return this.stack.length;
    }
}

let myStack = new Stack();
myStack.push('One');
myStack.push('Two');
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); 


class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
        return this.queue;
    }
    dequeue() {
        this.queue.splice(0, 1);
        return this.queue;
    }
    peek(index = 0) {
        return this.queue[index];
    }
    isEmpty() {
        return this.queue.length === 0;
        // !(this.stack.length > 0)
    }
    displayQueue() {
        return this.queue.toString();
        // this.stack.join(" ");
    }
    get length() {
        return this.queue.length;
    }
}

let atmQueue = new Queue();
atmQueue.enqueue('Aman');
atmQueue.enqueue('John');
atmQueue.enqueue('Rohan');
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true