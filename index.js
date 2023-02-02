import { printPerformance } from "./01-scalability.js";
// printPerformance();

import JArray from "./02-array.js";
// const arr = new JArray();
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);
// arr.push(6);
// arr.delete(2);
// arr.printValues();
// arr.printEntries();
// console.log("Length:", arr.length);
// arr.insert(2, 3);
// arr.printValues();
// arr.printEntries();
// console.log("Length:", arr.length);
// arr.splice(2, 2, ["a", "b", "c", "d"]);
// arr.splice(2, 2, ["a", "b"]);
// arr.splice(2, 3, ["a", "b"]);
// arr.printValues();
// arr.printEntries();
// console.log("Length:", arr.length);

import JSinglyLinkedList from "./03-singlyLinkedList.js";
// const singlyLinkedList = new JSinglyLinkedList(10);
// singlyLinkedList.append(20);
// singlyLinkedList.append(30);
// singlyLinkedList.append(40);
// singlyLinkedList.prepend(5);
// singlyLinkedList.insert(4, 25);
// singlyLinkedList.delete(2);
// singlyLinkedList.printList();
// console.log(singlyLinkedList.traverse(1).value);
// singlyLinkedList.reverse();
// singlyLinkedList.printList();

import JDoublyLinkedList from "./04-doublyLinkedList.js";
// const doublyLinkedList = new JDoublyLinkedList(10);
// doublyLinkedList.append(20);
// doublyLinkedList.append(30);
// doublyLinkedList.append(40);
// doublyLinkedList.append(50);
// doublyLinkedList.prepend(5);
// doublyLinkedList.printList();

import JStack from "./05-stack.js";
// const stack = new JStack(10);
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// stack.push(60);
// console.log(stack.peek());
// stack.pop();
// console.log(stack.peek());
// console.log(stack.printStack());

import JQueue from "./06-queue.js";
// const queue = new JQueue();
// queue.enqueue(5);
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.dequeue();
// console.log(queue.printQueue());
// console.log(queue);

import JBinarySearchTree from "./07-binarySearchTree.js";
const tree = new JBinarySearchTree();
tree.insert(10);
tree.insert(30);
tree.insert(20);
tree.insert(50);
tree.insert(40);
tree.insert(15);
tree.insert(25);
tree.insert(100);
tree.insert(55);
// console.log(tree.lookup(10));
// console.log(tree.lookup(20));
// console.log(tree.lookup(100));
// console.log(tree.lookup(55));
// console.log(tree.lookup(500));
// console.log(tree.bfs());
// console.log(tree.bfsRecursive());
// console.log(tree.dfsInOrder());
// console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
// console.log(JSON.stringify(tree));

import { fibonacciRecursive, fibonacci, fibonacciCached } from "./fibonacci.js";
// console.log(fibonacciRecursive(20));
// console.log(fibonacci(5));
// const fib = fibonacciCached();
// console.log(fib(20));

import { findFactorialRecursive, findFactorial } from "./findFactorial.js";
// console.log(findFactorialRecursive(5));
// console.log(findFactorial(5));

import bubbleSort from "./bubbleSort.js";
// console.log(bubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));

import mergeSort from "./mergeSort.js";
// console.log(mergeSort([12, 3, 16, 6, 5, 1]));

import selectionSort from "./selectionSort.js";
// console.log(selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));

import insertionSort from "./insertionSort.js";
// console.log(insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));

import binarySearch from "./binarySearch.js";
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 0, 7, 10));
