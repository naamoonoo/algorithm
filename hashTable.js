//hash table!

class HashTable {
	constructor() {
		this.capacity = 128;
		this.storage = new Array(this.capacity);
	}

	hash(value) {
		let hash = 0;

		for (let i = 0; i < value.length; i++){
			hash += i * value.charCodeAt(i);
		}
		return hash % this.capacity;
	}

	add(value) {
		const key = this.hash(value);

		if (this.storage[key] === undefined){
			this.storage[key] = [
				[key, value]
			];
		} else {
			this.storage[key].forEach(val => {
				if (val[1] === value){
					// console.log('already existed');
					return ;
				}
			})
			this.storage[key].push([key, value]);
		}
	}

	search(value) {
		const key = this.hash(value);

		if (this.storage[key] === undefined){
			return undefined;
		}

		for (let ele of this.storage[key]){
			if (ele && ele[1] == value){
				return ele;
			}
		}
		// not working
		// https://www.competa.com/blog/the-javascript-array-foreach-method-doesnt-return-anything/
		// We where comparing the array.forEach() with the
		// for() loop. The simpelst thing to see (if you
		// already used the forEach() function) is that the
		// forEach() is a bit easier to read. With the for()
		// loop you need a bit more code.

		// One of the major things we didn’t realize, the
		// array.forEach() function is creating a different
		// scope, because it is a function. So when it meets
		// the if statement, and will come’s across the
		// return true, it doesn’t move the return outside
		// of the forEach() function.

		// A second remark of the the forEach() function is:
		// The for() loop will stop with running after you
		// return a something. But the forEach() function
		// will first finish running trough the array, when
		// it is finished it can return something.

		// That was my AHA moment! That I didn’t saw that!
		// Well, that the next question was, how do we get
		// that returned value outside of it’s scope.

		// Pretty simple, declare a variable (in Typescript
		// you can use let) with a false value. When running
		// trough the forEach() function and it meets the if
		// statement, it will assign true to the variable.
		// When the forEach() is done running, it will
		// return the variable. So when you run this
		// function, it will run true or false.

		// this.storage[key].forEach(ele => {
		// 	if (ele && ele[1] == value){
		// 		return ele;
		// 	}
		// })
		return undefined;
	}

	remove(value) {
		if (this.search(value) === undefined){
			return ;
		}

		const key = this.hash(value);
		for (let i = 0; i < this.storage[key].length; i++){
			if (this.storage[key][i][1] === value){
				delete this.storage[key][i];
			}
		}
		// Delete of an unqualified identifier in strict mode.
		for (let ele of this.storage) {
			if (ele && ele[1] === value) {
				delete ele
			}
		}
	}
}

const hash = new HashTable();

hash.add('abc');
hash.add('cde');
hash.add('fwds');
hash.add('fwdsaawd');
// hash.add('fwdsaawd');


console.log(hash.search('abc'));
hash.remove('abc');
console.log(hash.search('abc'));
