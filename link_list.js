class link_list {

    // first node
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.size = 1;
    }

    // new node
    addNextNode(noteData) {
        let newNode = {
            value: noteData,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.size += 1;
    }

    // reading data
    traversing(){
        let counter = 1
        let current_note = this.head

        while(counter < this.size){
            console.log(current_note)
            current_note = current_note.next
            counter++
        }
    }

    // deleting
    deleteNode(index){
        let counter = 1
        let lead = this.head

        if(index===1)
            this.head = this.head.next
        else{
            while(counter < index-1){
                lead = lead.next
                counter++
            }
            let next = lead.next.next
            lead.next = next
        }
    }
}

let linkedList = new link_list(100);
linkedList.addNextNode(200);
linkedList.addNextNode(300);
linkedList.addNextNode(400);

linkedList.deleteNode(2);

linkedList.traversing()

console.log(linkedList);

