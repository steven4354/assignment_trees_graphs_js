class LinkedListNode {
  constructor(id, weight) {
    this.id = id;
    this.weight = weight;
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
      let personId1 = arr[0].id;
      let personId2 = arr[1].id;
      let weight = arr[2];

      if (!this.array[personId1]) {
        let headNode = new LinkedListNode(personId1, weight);
        this.array[personId1] = headNode;
      }

      if (!this.array[personId2]) {
        let headNode = new LinkedListNode(personId2, weight);
        this.array[personId2] = headNode;
      }
    });

    //change all the headNodes in array to a list
    this.array = this.array.map(headNode => {
      return new List(headNode);
    });

    //link the relationships to the list
    edgelist.forEach(arr => {
      let personId1 = arr[0].id;
      let personId2 = arr[1].id;
      let weight = arr[2];

      let newNode1 = new LinkedListNode(personId1, weight);
      let newNode2 = new LinkedListNode(personId2, weight);

      this.array[personId1].insertNextAtEnd(newNode2);
      this.array[personId2].insertNextAtEnd(newNode1);
    });
  }
}

var a = new AdjacencyList(edgeList);
console.log(a.array);
