# graphs_trees

Rise over run.

[A Data Structures and Algorithms Ruby Assignment from the Viking Code School using Trees and Graphs](http://www.vikingcodeschool.com)

What are the advantages and disadvantages of using an Adjacency Matrix vs an Adjacency List relative to size and speed of common operations?

```
Adjacency Matrix -
pro: fast way to search if two nodes are connected
con: space complexity
Adjacency List -
pro: saves a lot of space
con: takes longer to find if a connection exists (requires linked list traversal)
```

What would the Big O be of inserting a new EDGE to:

```
An Edge List? O(1)
An Adjacency Matrix? O(1)
An Adjacency List? O(n) where n = linked list size
```

What would the Big O be of inserting a new VERTEX to:

```
An Edge List? only tracks edges, not applicable
An Adjacency Matrix? O(n) insert new array and fill the array
An Adjacency List? O(1)
```

What would the Big O be of REMOVING a vertex or edge from:

```
An Edge List? O(n) where n = number of edges
An Adjacency Matrix? O(n) go through the vertex's column and row
An Adjacency List?

O(e) where e = # of edges
O(a \* n) where a = number of lists and n = avg. number of nodes in each list

worst case:
O(n^2) where every user is connected and n = # of connection
```

How would you find all the nodes connected to a particular vertex in:

```
An Edge List?

* scan all the edges

An Adjacency Matrix?

* scan the row for the particular vertex
* scan the column for the particular vertex (unnecessary if graph edges are undirected)

An Adjacency List?

* undirected: scan the list of the vertex
* directed: scan all nodes in all lists (of the array)
```
