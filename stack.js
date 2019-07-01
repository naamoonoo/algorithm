// stacks!

// First in Last out
// function: push, pop, peek, length(size)
// pelindrome problem is easily solved with stack!

// In basic, we can use array as an stack with push and pop function
const letters = [];

const word = 'abcdcba';
const len = word.length;

let reversed = '';

for (let i = 0; i < len; i++){
	letters.push(word[i]);
}

for (let i = 0; i < len; i++){
	reversed += letters.pop();
}

console.log(reversed);

if (reversed === word){
	console.log("It's pelindrome");
} else {
	console.log("it's not pelindrome");
}

// without using array, implement Stack

class Stack {
	constructor(){
		this.storage = [];
		this.count = 0;
	}

	push(value) {
		this.storage[this.count] = value;
		this.count++;
	}

	pop(){
		if (this.count == 0){
			return undefined;
		}

		this.count--;
		const value = this.storage[this.count];
		delete this.storage[this.count]
		return value;
	}

	isEmpty(){
		if (this.count == 0){
			return true;
		}
		return false;
	}

	peek(){
		if (this.count == 0){
			return undefined;
		}
		return this.storage[this.count - 1];
	}

	size(){
		return this.count;
	}
}

const stk = new Stack();

stk.push(1);
stk.push(2);
console.log(stk.peek());
stk.push(3);
console.log(stk.size());
console.log(stk.peek());
stk.pop();
console.log(stk.peek());
stk.pop();
stk.pop();
console.log(stk.isEmpty());

