class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	add(data) {
		const node = this.root

		if (node === null){
			this.root = new Node(data);
			return ;
		} else {
			const searchTree = node => {
				if (data < node.data) {
					if (node.left === null) {
						node.left = new Node(data);
						return ;
					} else if (node.left !== null){
						return searchTree(node.left);
					}
				} else if (data > node.data) {
					if (node.right === null) {
						node.right = new Node(data);
						return ;
					} else if (node.right !== null){
						return searchTree(node.right);
					}
				} else {
					return null;
				}
			};
			return searchTree(this.root);
		}
	}

	findMin() {
		let curr = this.root;
		while (curr.left !== null)
			curr = curr.left;
		return curr.data;
	}

	findMax() {
		let curr = this.root;
		while (curr.right !== null)
			curr = curr.right;
		return curr.data;
	}

	search(data) {
		let curr = this.root;
		while (curr.data !== data){
			if (curr.data < data) {
				curr = curr.right;
			} else {
				curr = curr.left;
			}
		}
		return curr;
	}

	isPresent(data) {
		let curr = this.root;
		while (curr !== null) {
			if (curr.data === data) {
				return true;
			} else if (curr.data < data) {
				curr = curr.right;
			} else {
				curr = curr.left;
			}
		}
		return false;
	}

	remove(data) {
		if (this.isPresent(data) === false || this.root === null) {
			return ;
		}

		const removeNode = (node, data) => {
			if (node === null) {
				return null;
			}

			if (node.data === data) {
				if (node.left === null && node.right === null) {
					return null;
				}
				if (node.left === null) {
					return node.right;
				}
				if (node.right === null) {
					return node.left;
				}
				// node has two child

				let tmp = node.right;
				while (tmp.left !== null) {
					tmp = tmp.left;
				}
				node.data = tmp.data;
				node.right = removeNode(node.right, tmp.data);
				return node;
			} else if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			} else {
				node.right = removeNode(node.right, data);
				return node;
			}
		};
		this.root = removeNode(this.root, data);
	}

	getRoot() {
		return this.root;
	}

	// basic
	// height
	getMaxHeight(node = this.root) {
		if (node === null){
			return 0;
		}
		const left = this.getMaxHeight(node.left);
		const right = this.getMaxHeight(node.right);
		return (left > right ? left : right) + 1;
	}

	getMinHeight(node = this.root) {
		if (node === null) {
			return 0;
		}
		const left = this.getMinHeight(node.left);
		const right = this.getMinHeight(node.right);
		return (left < right ? left : right) + 1;
	}

	isBalanced() {
		return (this.getMaxHeight() - this.getMinHeight() <= 1);
	}

	inOrder() {
		if (this.root === null) {
			return null;
		}

		const res = [];
		const traverseInOrder = node => {
			node.left && traverseInOrder(node.left);
			res.push(node.data);
			node.right && traverseInOrder(node.right);
		}
		traverseInOrder(this.root);
		return res;
	}

	preOrder() {
		if (this.root === null) {
			return null;
		}

		const res = [];
		const traversePreOrder = node => {
			res.push(node.data);
			node.left && traversePreOrder(node.left);
			node.right && traversePreOrder(node.right);
		}
		traversePreOrder(this.root);
		return res;
	}

	postOrder() {
		if (this.root === null) {
			return null;
		}

		const res = [];
		const traversePostOrder = node => {
			node.left && traversePostOrder(node.left);
			node.right && traversePostOrder(node.right);
			res.push(node.data);
		}
		traversePostOrder(this.root);
		return res;
	}

	// BFS(Breath First Search)
	levelOrder() {
		if (this.root === null) {
			return null;
		}

		const res = [];
		const que = [];
		que.push(this.root);
		while (que.length > 0){
			const node = que.shift();
			res.push(node.data);
			node.left && que.push(node.left);
			node.right && que.push(node.right);
		}
		return res;
	}
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(3);
bst.add(17);
bst.add(22);
bst.add(20);
bst.add(6);
bst.add(7);
bst.add(5);
bst.add(3);

// console.log(bst.findMax());
// console.log(bst.findMin());
// console.log(bst.isPresent(3));
// bst.remove(3);
// console.log(bst.isPresent(3));
// bst.printBst(bst.getRoot());

console.log(bst.getMaxHeight());
console.log(bst.getMinHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.getMaxHeight());
console.log(bst.getMinHeight());
console.log(bst.isBalanced());

console.log(`inOrder : ${bst.inOrder()}`);
console.log(`preOrder : ${bst.preOrder()}`);
console.log(`postOrder : ${bst.postOrder()}`);
console.log(`levelOrder : ${bst.levelOrder()}`);




