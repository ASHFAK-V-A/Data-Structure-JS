class Node{
constructor(data){
    this.data =data;
    this.prev=null;
    this.next =null
}

}


// Linkedlist created

class DobleLinkdlist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size =0;
    }


// Node add into linkedlist 


    addNode(data){
        const node = new Node(data)
          if(this.head==null){
            this.head=node
          }else{
            this.tail.next=node
            node.prev=this.tail

          }
          this.tail=node
          this.size++;
    }



// Delete Node at First Last and Certained Value

DeleteNode(data){

let temp= this.head
let prev=null

// Delete frist Node

if(temp!=null && temp.data===data){
    this.head=temp.next
    this.head.prev=null
    this.size--;
    return
     
}
// Looping Node

while(temp!=null && temp.data!=data){
prev=temp
temp=temp.next
}

// Delete Node From Last

if(temp===this.tail){
this.tail=prev
this.tail.next=null;
this.size--;
return
}


// Delete Node from certained value
let nextnode=prev.next=temp.next
let currentnode=temp
nextnode.prev=currentnode.prev
this.size--;

}


// Print Node List
printList(){
    let temp=this.head
    while(temp!=null){
        console.log(temp.data);
        temp=temp.next
    }
    }

    // Print Node List Reverse Order
    printListreverse(){
        let temp=this.tail
        while(temp!=null){
            console.log(temp.data);
            temp=temp.prev
        }
        }




}
 //create a new instance of a doubly linked list

const li = new DobleLinkdlist()
li.addNode(1)
li.addNode(2)
li.addNode(3)
li.addNode(4)
li.addNode(5)
li.addNode(6)
li.addNode(7)
li.addNode(8)
li.addNode(9)
li.addNode(10)


// Delete node
li.DeleteNode(5)


// print node's
console.log(li);

console.log("===========================================");

