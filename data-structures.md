# Data Structures

- A Data Structure:
  - Is a collection of values that can have relationships among them and can have functions applied to them.
  - Each one is different in what it can do and what it is best for.
- Operations on Data Structures:
  1. Insertion
  2. Deletion
  3. Traversal
  4. Sorting
  5. Searching
  6. Access/Lookup

## Arrays

- Types of Arrays:
  1. Static array
  2. Dynamic array
- Access: O(1) ✔️
- Ordered ✔️
- Insertion: O(n) 🔴
- Deletion: O(n) 🔴
- The 'push' or 'append' methods could be O(n) 🔴

## Linked Lists

- Types of Linked Lists:
  1. Singly
  2. Doubly
- Insertion: O(n) but faster than arrays ✔️
- Deletion: O(n) but faster than arrays ✔️
  because no need to reallocate memory or shift/unshift items
- Ordered ✔️
- Lookup: O(n) 🔴
  No random access

## Trees

- Types of Trees:
  1. Binary tree: Each node can have 0, 1, or 2 child nodes
     1. Perfect Binary Tree
        - Each node can have 0, or 2 child nodes
        - All bottom nodes have 2 child nodes
        - The number of nodes on each level doubles for each level down ✔️
        - The number of nodes on the last level equals the total number of nodes above it plus 1 ✔️
     2. Full Binary Tree
        - Each node can have 0, or 2 child nodes
  2. Heap
     1. Binary Heap
        - Types of Binary Heap
          1. Max Heap
          2. Min Heap
        - Insertion: O(log n) ✔️
        - Deletion: O(log n) ✔️
        - Lookup: O(n) 🔴
        - Priority
  3. Trie
     - Use Cases:
       - Searching words in a dictionary
       - Providing auto suggestions
     - Lookup of a word: O(length of the word)
- Binary Search Tree:
  - Balanced (AVL - Red Black):
    - Lookup/Insertion/Deletion: O(log n) ✔️
  - Unbalanced:
    - Lookup/Insertion/Deletion: O(n) 🔴
  - Keeps relationships among nodes and make it easy to search through them ✔️
  - Ordered ✔️

## Graphs

- Types of Graphs:
  1. Directed VS Undirected
  2. Weighted VS Unweighted
  3. Cyclic VS Acyclic
- Graph Data:
  1. Edge List: An array of arrays where each subarray has two values [nodeValue, connection].
  2. Adjacent List: An array/object where each index represents the node value on the graph, and the value of this index is an array that includes the node connections. Example: {0: [1,2], 1: [0,2,4]}.
  3. Adjacent Matrix:
     {
     0: [0, 0, 1, 0], node 0 is connected to node 2
     1: [0, 0, 1, 1], node 1 is connected to node 2 / 3
     2: [1, 1, 0, 1], node 2 is connected to node 0 / 1 / 3
     3: [0, 1, 1, 0], node 3 is connected to node 1 / 2
     }

## BFS VS DFS

- DFS:
  - Used to determine whether a path exists between two nodes
  - It uses less memory than BFS
- BFS:
  - Used to find the shortest path
