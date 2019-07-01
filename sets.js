// Sets!

// with no duplicate data,

class Set {
	constructor() {
		this.storage = [];
		this.count = 0;
	}

	has(value) {
		return (this.storage.indexOf(value) !== -1);
	}

	add(value) {
		if (!this.has(value)){
			this.storage.push(value);
			return true;
		}
		return false;
	}

	delete(value) {
		if (this.has(value)){
			this.storage.splice(this.storage.indexOf(value), 1);
			return true;
		}
		return false
	}

	values() {
		return this.storage;
	}

	size() {
		return this.storage.length;
	}

	union(other) {
		const n = new Set();

		this.storage.forEach(ele => n.add(ele));
		other.values().forEach(ele => n.add(ele));

		return n;
	}

	intersection(other) {
		const n = new Set();

		this.storage.forEach(ele => {
			if (other.has(ele)){
				n.add(ele);
			}
		});
		return n;
	}

	difference(other) {
		const n = new Set();

		this.storage.forEach(ele => {
			if (!other.has(ele)){
				n.add(ele);
			}
		});
		other.values().forEach(ele => {
			if (!this.has(ele)){
				n.add(ele);
			}
		});
		return n;
	}
}

const setA = new Set();
const setB = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
setA.add(3);
setA.add(2);

setB.add(1);
setB.add(2);
setB.add(3);
setB.add(7);
console.log(setA.union(setB).values());
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());
