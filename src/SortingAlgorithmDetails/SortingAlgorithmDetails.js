// src/SortingAlgorithmDetails/SortingAlgorithmDetails.js
import React from 'react';
import './SortingAlgorithmDetails.css';
import MergeSortDetails from './MergeSortDetails'; // Import the MergeSortDetails component
import SelectionSortDetails from './SelectionSortDetails';
import QuickSortDetails from './QuickSortDetails';
import HeapSortDetails from './HeapSortDetails';
import BubbleSortDetails from './BubbleSortDetails';

const algoDetails = {
  'Merge Sort': {
    component: <MergeSortDetails />, // Assign component to 'Merge Sort'
  },
  'Selection Sort': {
      component: <SelectionSortDetails />, // Assign component to 'Selection Sort'
  },
  'Quick Sort': {
    component: <QuickSortDetails />,
  },
  'Heap Sort': {
    component: <HeapSortDetails />,
  },
  'Bubble Sort': {
    component: <BubbleSortDetails />,
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
