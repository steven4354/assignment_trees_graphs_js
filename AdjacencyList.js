class LinkedListNode {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.weight = data.weight;
    this.next = null;
  }
}

//an array of headNodes

class List {
  constructor(headNode) {
    this.headNode = headNode;
  }

  insertNextAtEnd(node) {
    let currentNode = this.headNode;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }
}

let edgeList = require("./edgeList");

class AdjacencyList {
  constructor(edgelist) {
    this.array = []; //<< headNodes

    //set up the initial headNodes without lists yet
    edgelist.forEach(arr => {
      let person1 = {};
      person1.id = arr[0].id;
      person1.name = arr[0].name;
      person1.weight = arr[2];

      let person2 = {};
      person2.id = arr[1].id;
      person2.name = arr[1].name;
      person2.weight = arr[2];

      if (!this.array[person1.id]) {
        let headNode = new LinkedListNode(person1);
        this.array[person1.id] = headNode;
      }

      if (!this.array[person2.id]) {
        let headNode = new LinkedListNode(person2);
        this.array[person2.id] = headNode;
      }
    });

    //change all the headNodes in array to a list
    this.array = this.array.map(headNode => {
      return new List(headNode);
    });

    //link the relationships to the list
    edgelist.forEach(arr => {
      let person1 = {};
      person1.id = arr[0].id;
      person1.name = arr[0].name;
      person1.weight = arr[2];

      let person2 = {};
      person2.id = arr[1].id;
      person2.name = arr[1].name;
      person2.weight = arr[2];

      let newNode1 = new LinkedListNode(person1);
      let newNode2 = new LinkedListNode(person2);

      this.array[person1.id].insertNextAtEnd(newNode2);
      this.array[person2.id].insertNextAtEnd(newNode1);
    });
  }

  printAdjList() {
    this.array.forEach(list => {
      let currentNode = list.headNode;
      let str = "";
      while (currentNode.next) {
        str += currentNode.next.name + " " + currentNode.next.weight + " ";
        currentNode = currentNode.next;
      }
      console.log(str);
    });
  }

  edgeWeight(id1, id2) {
    this.array[id1]; //list

    let currentNode = this.array[id1].headNode;
    while (currentNode && currentNode.id !== id2) {
      // if (currentNode.id == idx2) {
      //   break;
      // }
      // if (currentNode.next == null) {
      //   break;
      // }
      currentNode = currentNode.next;
    }

    if (currentNode) {
      return currentNode.weight;
    } else {
      return "not valid";
    }
  }
}

var a = new AdjacencyList(edgeList);
console.log(a.array);
a.printAdjList();
let edgeWeight = a.edgeWeight(1, 2);
console.log(edgeWeight);
