
class Node {
  constructor (value) {
      this.value = value;
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
constructor () {
  this.root = null
}
isEmpty() {
  return this.root === null
}
insert(value) {
  const newNode = new Node(value);
  
  if(this.isEmpty()){
    this.root = newNode
  }
  else {
    this.insertOne(this.root , newNode)
  }
}
insertOne(root , newNode) {
  if(newNode.value < this.root.value) {
    if(this.root.left === null ) {
      this.root.left = newNode
    } else {
      this.insertOne(root.left , newNode )
    }
  } else {
    if(root.right === null){
      root.right = newNode 
    } else {
      this.insertOne(root.right , newNode)
    }
  }
}
search(value,root) {
  if(!root) {
    return false
  }
  if(this.root.value === value) {
    return true
  }
  if(this.root.value < value){
    this.search(this.root.left , value)
  } else {
    this.search(this.root.right , value)
  }
}

preOrder(root) {
  if(root) {
    console.log(root.value);
    this.preOrder(root.left)
    this.preOrder(root.right)
  }
}
inOrder(root) {
  if(root){
    this.inOrder(root.left )
    console.log(root.value);
    this.inOrder(root.right)
  }
}

}


const bst = new BinarySearchTree()

console.log(bst.isEmpty())
bst.insert(10)
bst.insert(20)
bst.insert(30)
// bst.insert(3)
// bst.insert(5)
console.log(bst.isEmpty())
console.log(bst.search(10,bst.root))
bst.inOrder(bst.root)