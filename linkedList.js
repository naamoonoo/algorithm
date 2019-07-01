// Linked List!!

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	add(data) {
		const node = new Node(data);
		if (this.isEmpty()){
			this.head = node;
		} else {
			let tmp = this.head;
			while (tmp.next !== null){
				tmp = tmp.next;
			}
			tmp.next = node;
		}
		this.size++;
	}

	remove(data) {
		if (this.isEmpty()){
			return undefined;
		}
		if (this.head.data === data){
			this.head = this.head.next;
		} else {
			let tmp = this.head;
			while (tmp.next.data !== data){
				tmp = tmp.next;
			}
			tmp.next = tmp.next.next;
		}
		this.size--;
	}

	isEmpty() {
		return this.size === 0;
	}

	indexOf(data) {
		if (this.isEmpty()) {
			return undefined;
		}

		let tmp = this.head;
		for (let i = 0; i < this.size; i++){
			if (tmp.data === data){
				return i;
			}
			tmp = tmp.next;
		}
	}

	dataAt(index) {
		if (this.isEmpty()) {
			return undefined;
		}

		let tmp = this.head;
		for (let i = 0; i < index; i++){
			tmp = tmp.next;
		}
		return tmp.data;
	}

	print() {
		let tmp = this.head;
		const res = []
		while (tmp !== null){
			res.push(tmp.data);
			tmp = tmp.next;
		}
		console.log(res);
	}
}

const ll = new LinkedList();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);

ll.print();

ll.remove(3);
ll.print();

ll.add(3);
ll.add(5);
ll.print();
console.log(ll.dataAt(ll.indexOf(3)));

