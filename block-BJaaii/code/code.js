class Stack {
    constructor(stack) {
        this.stack = stack;
    }
    push(value) {
        this.stack = this.stack.push(value);
    }
    pop() {
        this.stack = this.stack.pop();
    }
    peek(para) {
        if(para === "undefined") {
            return this.stack[this.stack.length - 1];
        } 
        else return this.stack[para];
    }
    reverse() {
        return this.stack = this.stack.reverse();
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    displayStack() {
        return this.stack.toString();
    }
}