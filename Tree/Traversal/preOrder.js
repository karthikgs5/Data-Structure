class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return !this.root;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < this.root.value) {
      if (this.root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(value, root) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    }
    if (root.value < value) {
      return this.search(value, root.left);
    } else {
      return this.search(value, root.right);
    }
  }
  
  
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
}

const bst = new BinarySearchTree()

console.log(bst.isEmpty());

bst.insert(5)
bst.insert(10)
bst.insert(15)
// bst.insert(20)
// bst.insert(25)

console.log(bst.search(10,bst.root));

bst.preOrder(bst.root)