// Queue

// First in First out
// Queue with basic array method

const que = [];

que.push('first in'); // enqueue
que.push('a'); // enqueue
que.push('b'); // enqueue
console.log(que);

que.shift(); // dequeue -> first in out
console.log(que);

class Queue {
	constructor(){
		this.size = 0;
		this.queue = [];
	}

	enqueue(value) {
		this.queue[this.size++] = value;
	}

	dequeue() {
		if (this.size == 0){
			return undefined;
		}

		this.size--;
		const value = this.queue[0];
		delete this.queue[0];
		return value;
	}

	isEmpty() {
		return this.size === 0;
	}

	front() {
		return this.queue[0];
	}

	end() {
		return this.queue[this.size - 1];
	}

	size() {
		return this.size;
	}
}
