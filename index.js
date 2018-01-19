const edgeList = require("./edgeList");

//convert edgeList to adjacencyMatrix;

class AdjacencyMatrix {
  constructor(edgeList) {
    let people = [];
    edgeList.forEach(connection => {
      if (!people.includes(connection[0].id)) {
        people.push(connection[0].id);
      }
      if (!people.includes(connection[1].id)) {
        people.push(connection[1].id);
      }
    });

    this.matrix = new Array(people.length);
    this.matrix.fill([]);
    this.matrix = this.matrix.map(array => {
      let newArray = new Array(people.length);
      return newArray.fill(undefined);
    });

    edgeList.forEach(connection => {
      this.matrix[connection[0].id][connection[1].id] = connection[2];
      this.matrix[connection[1].id][connection[0].id] = connection[2];
    });
  }

  printMatrix() {
    let firstString = "  ";
    this.matrix.forEach((firstArray, idx) => {
      firstString += ` ${idx}`;
      if (idx < 10) {
        firstString += " ";
      }
    });
    console.log(firstString);
    this.matrix.forEach((firstArray, idx) => {
      let string = `${idx}: `;
      firstArray.forEach(element => {
        if (element) {
          string += element + " ";
          if (element < 10) {
            string += " ";
          }
        } else {
          string += "  ";
        }
        string += " ";
      });
      console.log(`${string} `);
    });
  }
}

const printEdgeList = () => {
  let lines = [" -- Edge List -- "];
  EDGE_LIST.forEach(e => {
    lines.push(`${e[0].name} <-${e[2]}-> ${e[1].name}`);
  });
  console.log(lines.join("\n"));
};

let matrix = new AdjacencyMatrix(edgeList);
matrix.printMatrix();
