// src/SortingAlgorithmDetails/BubbleSortDetails.js
import React from 'react';
import './SortingAlgorithmDetails.css';

const BubbleSortDetails = () => (
  <div className="algorithm-details">
    <h1>How does Bubble Sort work?</h1>
    <p>Bubble sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is sorted.</p>
    <h2>Step-by-Step Explanation:</h2>
    <ul>
      <li><strong>Compare Adjacent Elements:</strong> Start at the beginning of the list and compare each pair of adjacent elements.</li>
      <li><strong>Swap if Necessary:</strong> If the elements are in the wrong order (i.e., the first element is greater than the second), swap them.</li>
      <li><strong>Repeat:</strong> Move to the next pair of adjacent elements and repeat the comparison and swap if necessary.</li>
      <li><strong>Passes:</strong> After each pass through the list, the largest unsorted element will have bubbled up to its correct position.</li>
      <li><strong>Continue Until Sorted:</strong> Continue making passes through the list until no more swaps are needed, indicating that the list is sorted.</li>
    </ul>
    <h2>Algorithm:</h2>
    <ol>
      <li><strong>Step 1:</strong> Start at the beginning of the array.</li>
      <li><strong>Step 2:</strong> Compare each pair of adjacent elements.</li>
      <li><strong>Step 3:</strong> Swap the elements if they are in the wrong order.</li>
      <li><strong>Step 4:</strong> Move to the next pair of adjacent elements and repeat the process.</li>
      <li><strong>Step 5:</strong> Continue the process until no swaps are needed, meaning the array is sorted.</li>
    </ol>
    <h2>Complexity Analysis of Bubble Sort:</h2>
    <ul>
      <li><strong>Time Complexity:</strong>
        <ul>
          <li><strong>Best Case: O(n)</strong>, when the array is already sorted, and no swaps are needed.</li>
          <li><strong>Average Case: O(n^2)</strong>, when the array is in random order.</li>
          <li><strong>Worst Case: O(n^2)</strong>, when the array is sorted in reverse order.</li>
        </ul>
      </li>
      <li><strong>Auxiliary Space:</strong> O(1), as bubble sort is an in-place sorting algorithm and does not require additional space beyond the original array.</li>
    </ul>
  </div>
);

export default BubbleSortDetails;