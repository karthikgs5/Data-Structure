
class Node {
     constructor(value) {
        this.value = value 
        this.left = null 
        this.right = null
     }
}

class BinarySearchInsert {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if(this.isEmpty()) {
            this.root = newNode
        }
        else{
            this.insertOne(this.root,newNode)
        }
    }
    insertOne(root,newNode) {
        if(newNode.value < this.root.value) {
            if(this.root.left === null) {
                this.root.left = newNode
            }
            else {
                this.insertOne(root.left , newNode)
            }
        }else {
            if(this.root.right === null) {
                this.root.right = newNode
            }else {
                this.insertOne(root.right  , newNode )
            }
        }
    }
}


const bst = new BinarySearchInsert()

bst.isEmpty()
bst