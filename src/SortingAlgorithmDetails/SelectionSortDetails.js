// src/SortingAlgorithmDetails/SelectionSortDetails.js
import React from 'react';
import './SortingAlgorithmDetails.css';

const SelectionSortDetails = () => (
  <div className="algorithm-details">
    <h1>How does Selection Sort work?</h1>
    <p>Selection sort is a simple and intuitive sorting algorithm. It works by repeatedly selecting the smallest (or largest, depending on sorting order) element from the unsorted part of the list and swapping it with the first unsorted element.</p>
    <h2>Step-by-Step Explanation:</h2>
    <ul>
      <li><strong>Step 1:</strong> Start with the first element in the list. This element is considered the sorted part of the list.</li>
      <li><strong>Step 2:</strong> Search through the unsorted part of the list to find the smallest element.</li>
      <li><strong>Step 3:</strong> Swap the smallest element found in the unsorted part with the first unsorted element.</li>
      <li><strong>Step 4:</strong> Move the boundary between the sorted and unsorted parts one element to the right.</li>
      <li><strong>Step 5:</strong> Repeat steps 2-4 until the entire list is sorted.</li>
    </ul>
    <h2>Algorithm:</h2>
    <ol>
      <li><strong>Step 1:</strong> Initialize the sorted part of the list to be empty and the unsorted part to be the entire list.</li>
      <li><strong>Step 2:</strong> Repeat the following until the unsorted part of the list is empty:
        <ul>
          <li>Find the smallest element in the unsorted part of the list.</li>
          <li>Swap it with the first unsorted element.</li>
          <li>Move the boundary between the sorted and unsorted parts one element to the right.</li>
        </ul>
      </li>
    </ol>
    <h2>Complexity Analysis of Selection Sort:</h2>
    <ul>
      <li><strong>Time Complexity:</strong>
        <ul>
          <li><strong>Best Case: O(n^2)</strong>, because the algorithm always performs the same number of comparisons.</li>
          <li><strong>Average Case: O(n^2)</strong>, because the algorithm always performs the same number of comparisons.</li>
          <li><strong>Worst Case: O(n^2)</strong>, because the algorithm always performs the same number of comparisons.</li>
        </ul>
      </li>
      <li><strong>Auxiliary Space:</strong> O(1), because it only requires a constant amount of additional space.</li>
    </ul>
  </div>
);

export default SelectionSortDetails;