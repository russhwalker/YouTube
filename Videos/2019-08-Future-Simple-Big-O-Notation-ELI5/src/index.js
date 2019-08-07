
console.log('Simple-Big-O-Notation-ELI5');

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//O(1) : Constant Time
const arr1Value = arr1[3];
const arr2Value = arr2[7];

//O(N) : Linear Time
let totalArr1 = 0;
for (let i = 0; i < arr1.length; i++) {
    totalArr1 += arr1[i];
}
let totalArr2 = 0;
for (let i = 0; i < arr2.length; i++) {
    totalArr2 += arr2[i];
}

//O(N^2) : Quadratic Time
for (let i = 0; i < arr1.length; i++) {
    var outerItem = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
        var innerItem = arr2[j];
        let someSum = outerItem + innerItem;
    }
}

//O(log N) Logarithmic 
//Binary Search Tree
//https://gist.github.com/alexhawkins/f993569424789f3be5db
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    makeNode(value) {
        var node = {};
        node.value = value;
        node.left = null;
        node.right = null;
        return node;
    }
    add(value) {
        var currentNode = this.makeNode(value);
        if (!this.root) {
            this.root = currentNode;
        }
        else {
            this.insert(currentNode);
        }
        return this;
    }
    insert(currentNode) {
        var value = currentNode.value;
        var traverse = function (node) {
            if (value > node.value) {
                if (!node.right) {
                    node.right = currentNode;
                    return;
                }
                else
                    traverse(node.right);
            }
            else if (value < node.value) {
                if (!node.left) {
                    node.left = currentNode;
                    return;
                }
                else
                    traverse(node.left);
            }
        };
        traverse(this.root);
    }
    remove(node) {
    }
    contains(value) {
        var node = this.root;
        var traverse = function (node) {
            if (!node)
                return false;
            if (value === node.value) {
                return true;
            }
            else if (value > node.value) {
                return traverse(node.right);
            }
            else if (value < node.value) {
                return traverse(node.left);
            }
        };
        return traverse(node);
    }
}

var bst1 = new BinarySearchTree();
bst1.add(40).add(25).add(78).add(10).add(32);
console.log('bst1', bst1);

var bst2 = new BinarySearchTree();
bst2.add(10).add(20).add(30).add(5).add(8).add(3).add(9);
console.log('bst2', bst2);