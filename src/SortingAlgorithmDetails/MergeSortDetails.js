// src/SortingAlgorithmDetails/MergeSortDetails.js
import React from 'react';
import './SortingAlgorithmDetails.css';

const MergeSortDetails = () => (
  <div className="algorithm-detailsr">
        <h1>How does Merge Sort work?</h1>
        <p>Merge sort is a popular sorting algorithm known for its efficiency and stability. It follows the divide-and-conquer approach to sort a given array of elements.</p>
        <h2>Step-by-Step Explanation:</h2>
        <ul>
            <li><strong>Divide</strong>: Divide the list or array recursively into two halves until it can no more be divided.</li>
            <li><strong>Conquer</strong>: Each subarray is sorted individually using the merge sort algorithm.</li>
            <li><strong>Merge</strong>: The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged.</li>
        </ul>
        <h2>Algorithm:</h2>
        <ol>
            <li><strong>Step 1: </strong>Create two pointers, one for each sorted half.</li>
            <li><strong>Step 2:</strong>Initialize an empty temporary array to hold the merged result.</li>
            <li>
                <ul>
                    <li>Compare the elements at the pointers of the two halves:</li>
                    <li>Copy the smaller element into the temporary array.</li>
                    <li>Move the pointer of the sublist with the smaller element forward.</li>
                </ul>
            </li>
            <li><strong>Step 3: </strong>Repeat step 3 until one of the sublists is empty.</li>
            <li><strong>Step 4: </strong>Copy the remaining elements from the non-empty sublist to the temporary array.</li>
            <li><strong>Step 5: </strong>Copy the elements back from the temporary array to the original list.</li>
        </ol>
        <h2>Complexity Analysis of Merge Sort:</h2>
        <ul>
            <li><strong>Time Complexity:</strong>
                <ul>
                    <li><strong>Best Case: O(n log n)</strong>, When the array is already sorted or nearly sorted.</li>
                    <li><strong>Average Case: O(n log n)</strong>, When the array is randomly ordered.</li>
                    <li><strong>Worst Case: O(n log n)</strong>, When the array is sorted in reverse order.</li>
                </ul>
            </li>
            <li><strong>Auxiliary Space: </strong>O(n), Additional space is required for the temporary array used during merging.</li>
        </ul>
  </div>
);

export default MergeSortDetails;
