class Node {
    constructor (value) {
        this.value = value
        this.left = value
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node (value)
        if(this.isEmpty()){
            this.root = newNode
        }
       else {
        this.insertNode(this.root,newNode) 
       }
    }
    insertNode(root,newNode) {
        if(newNode.value< this.root.value){
            if(this.root.left === null) {
                this.root.left = newNode
            }else {
                this.insertNode(root.left , newNode)
            }
        } else {
            if(root.right === null) {
                root.right = newNode
            }else {
                this.insertNode(root.right  , newNode )
            }
            
        }

    }
}

const bst = new BinarySearchTree() 
console.log(bst.isEmpty());
bst.insert(5)
bst.insert(10)
bst.insert(20)