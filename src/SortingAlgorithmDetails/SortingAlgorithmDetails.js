// src/SortingAlgorithmDetails/SortingAlgorithmDetails.js
import React from 'react';
import './SortingAlgorithmDetails.css';
import MergeSortDetails from './MergeSortDetails'; // Import the MergeSortDetails component

const algoDetails = {
  'Merge Sort': {
    component: <MergeSortDetails />, // Assign component to 'Merge Sort'
  },
  'Selection Sort': {
    timeComplexity: 'O(n^2)',
    description: 'Selection Sort is an in-place comparison-based sorting algorithm that selects the smallest element from the unsorted portion and swaps it with the first unsorted element.',
  },
  'Quick Sort': {
    timeComplexity: 'O(n log n)',
    description: 'Quick Sort is a divide and conquer algorithm that selects a pivot element, partitions the array around the pivot, and recursively sorts the partitions.',
  },
  'Heap Sort': {
    timeComplexity: 'O(n log n)',
    description: 'Heap Sort involves building a heap from the elements, and then repeatedly removing the maximum element from the heap and rebuilding the heap.',
  },
  'Bubble Sort': {
    timeComplexity: 'O(n^2)',
    description: 'Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
  },
};

const SortingAlgorithmDetails = ({ selectedAlgo }) => {
  const details = algoDetails[selectedAlgo] || {};

  return (
    <div className="algorithm-details-container">
      {details.component || (
        <div className="details">
          <h3>{selectedAlgo}</h3>
          <p><strong>Time Complexity:</strong> {details.timeComplexity}</p>
          <p>{details.description}</p>
        </div>
      )}
    </div>
  );
};

export default SortingAlgorithmDetails;
