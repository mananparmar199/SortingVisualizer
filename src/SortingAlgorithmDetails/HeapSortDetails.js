// src/SortingAlgorithmDetails/HeapSortDetails.js
import React from 'react';
import './SortingAlgorithmDetails.css';

const HeapSortDetails = () => (
  <div className="algorithm-details">
    <h1>How does Heap Sort work?</h1>
    <p>Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure. It works by first converting the array into a max-heap, then repeatedly extracting the maximum element from the heap and rebuilding the heap until the array is sorted.</p>
    <h2>Step-by-Step Explanation:</h2>
    <ul>
      <li><strong>Build a Max-Heap:</strong> Convert the array into a max-heap, where the largest element is at the root of the heap.</li>
      <li><strong>Extract the Maximum:</strong> Swap the root of the heap (the maximum element) with the last element of the heap, reduce the heap size by one, and then heapify the root to maintain the heap property.</li>
      <li><strong>Repeat:</strong> Repeat the extraction process until the heap is empty and the array is sorted.</li>
    </ul>
    <h2>Algorithm:</h2>
    <ol>
      <li><strong>Step 1:</strong> Build a max-heap from the given array. This involves rearranging the array elements to satisfy the heap property, where each parent node is greater than or equal to its children.</li>
      <li><strong>Step 2:</strong> Swap the root of the heap (the maximum element) with the last element in the heap.</li>
      <li><strong>Step 3:</strong> Reduce the heap size by one and heapify the root of the heap to maintain the heap property.</li>
      <li><strong>Step 4:</strong> Repeat steps 2 and 3 until the heap size is reduced to one.</li>
      <li><strong>Step 5:</strong> The array is now sorted in ascending order.</li>
    </ol>
    <h2>Complexity Analysis of Heap Sort:</h2>
    <ul>
      <li><strong>Time Complexity:</strong>
        <ul>
          <li><strong>Best Case: O(n log n)</strong>, since building the max-heap takes O(n) and extracting elements from the heap takes O(log n) for each of the n elements.</li>
          <li><strong>Average Case: O(n log n)</strong>, for the same reason as the best case.</li>
          <li><strong>Worst Case: O(n log n)</strong>, since the heap operations are consistently O(log n) for each of the n elements.</li>
        </ul>
      </li>
      <li><strong>Auxiliary Space:</strong> O(1), as heap sort is an in-place sorting algorithm and does not require additional space beyond the original array.</li>
    </ul>
  </div>
);

export default HeapSortDetails;
