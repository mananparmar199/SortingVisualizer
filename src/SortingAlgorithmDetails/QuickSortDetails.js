// src/SortingAlgorithmDetails/QuickSortDetails.js
import React from 'react';
import './SortingAlgorithmDetails.css';

const QuickSortDetails = () => (
  <div className="algorithm-details">
    <h1>How does Quick Sort work?</h1>
    <p>Quick sort is an efficient sorting algorithm that follows the divide-and-conquer approach. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.</p>
    <h2>Step-by-Step Explanation:</h2>
    <ul>
      <li><strong>Choose a Pivot:</strong> Select an element from the array to be the pivot.</li>
      <li><strong>Partition:</strong> Reorder the array so that all elements with values less than the pivot come before the pivot, and all elements with values greater than the pivot come after the pivot. The pivot is placed in its final position.</li>
      <li><strong>Recursively Apply:</strong> Recursively apply the above steps to the sub-arrays of elements with smaller values and elements with greater values.</li>
    </ul>
    <h2>Algorithm:</h2>
    <ol>
      <li><strong>Step 1:</strong> Choose a pivot element from the array. Various strategies can be used to choose the pivot (e.g., first element, last element, middle element, or a random element).</li>
      <li><strong>Step 2:</strong> Partition the array into two sub-arrays:
        <ul>
          <li>Elements less than the pivot.</li>
          <li>Elements greater than the pivot.</li>
        </ul>
      </li>
      <li><strong>Step 3:</strong> Recursively apply the above steps to the sub-arrays.</li>
      <li><strong>Step 4:</strong> Combine the sorted sub-arrays and the pivot to form the final sorted array.</li>
    </ol>
    <h2>Complexity Analysis of Quick Sort:</h2>
    <ul>
      <li><strong>Time Complexity:</strong>
        <ul>
          <li><strong>Best Case: O(n log n)</strong>, when the pivot divides the array into nearly equal halves.</li>
          <li><strong>Average Case: O(n log n)</strong>, when the pivot is not always the best choice but still divides the array into reasonably balanced parts.</li>
          <li><strong>Worst Case: O(n^2)</strong>, when the pivot is the smallest or largest element and results in highly unbalanced partitions.</li>
        </ul>
      </li>
      <li><strong>Auxiliary Space:</strong> O(log n) on average, due to the recursion stack; can be O(n) in the worst case with a poor pivot choice.</li>
    </ul>
  </div>
);

export default QuickSortDetails;
