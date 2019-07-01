class PriorityQueue {
	constructor(){
		this.size = 0;
		this.queue = [];
	}

	// only difference is enqueued by priority
	enqueue(value) {
		if (this.size === 0 ){
			this.queue.push(value);
		} else if (this.front()[1] > value[1]){
			this.queue.unshift(value);
		} else if (this.end()[1] <= value[1]){
			this.queue.push(value);
		} else {
			for (let i = 0; i < this.size; i++){
				if (this.queue[i][1] > value[1]){
					this.queue.splice(i, 0, value);
				}
			}
		}

		this.size++;
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

	print() {
		console.log(this.queue);
	}

	size() {
		return this.size;
	}
}

const pq = new PriorityQueue();
pq.enqueue(['beau carnes', 2]);
pq.enqueue(['Quicny Larson', 3]);
pq.enqueue(['Ewa mitulask-wojcik', 1]);
pq.print();
pq.enqueue(['bena wksnwls ', 2]);
pq.print();

