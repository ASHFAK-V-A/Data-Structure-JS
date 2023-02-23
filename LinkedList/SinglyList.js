class Node{
    constructor(data){
     this.data= data
     this.next=null
    }
}

class Linkdlist{
    constructor(){
        this.head= null
        this.tail = null;
        this.size =0;
    }


    // Adding Node

perpending(value){
    const node = new Node(value)
  if(this.size ===0){
    this.head =node
  }else{
       this.tail.next =node
  }
   this.tail=node
   this.size++
}
// -----  ///


delete(data){
    console.log(data);

    let temp = this.head
    let prev=null;


// Head position deletion

if(temp !=null && temp.data==data){
    this.head =temp.next;
    this.size--;
    return ;
}

//=========//


// deletion at certained positoin

while(temp !=null && temp.data !=data){

    prev=temp;
    console.log("This is prev",prev);
    temp=temp.next;
    console.log('this is temp',temp);

}

// =================//

if(temp==null){
    return;
}

if(temp==this.tail){
    this.tail=prev;
    this.tail.next=null;
    this.size--;
    return;
}
this.size--;
prev.next = temp.next;
}


insertAfter(nextTwo,data){


const newNode = new Node(data)

let temp= this.head

while(temp!=null && temp.data!= nextTwo){
    temp=temp.next;
    
    
}
if(temp==null){
return;
}
if(temp==this.tail){
    this.tail.next=newNode;
    this.tail=newNode;
    this.size++;
    return;
}

newNode.next = temp.next;
temp.next=newNode;
this.size++;


}




printLIst(){

    let current = this.head
   
       if(current ==null){
        console.log('list are empty');
        return;
       }
  
        while (current!=null){
            console.log("total list",current.data);
            current= current.next;
        }
     
        

}



}

const li = new Linkdlist ()
li.perpending(10)
li.perpending(20)
li.perpending(50)
li.perpending(70)

li.delete(50)

console.log("==================================");
li.printLIst()




