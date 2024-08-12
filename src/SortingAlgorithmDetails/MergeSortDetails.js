// src/SortingAlgorithmDetails/MergeSortDetails.js
import React from 'react';
import './SortingAlgorithmDetails.css';

const MergeSortDetails = () => (
  <div className="algorithm-detailsr">
        <h1>How does Merge Sort work?</h1>
        <p>Merge sort is a popular sorting algorithm known for its efficiency and stability. It follows the divide-and-conquer approach to sort a given array of elements.</p>
        <h2>Step-by-Step Explanation:</h2>
        <ul>
            <li>Divide: Divide the list or array recursively into two halves until it can no more be divided.</li>
            <li>Conquer: Each subarray is sorted individually using the merge sort algorithm.</li>
            <li>Merge: The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged.</li>
        </ul>
        <h2>Algorithm:</h2>
        <ol>
            <li>Create two pointers, one for each sorted half.</li>
            <li>Initialize an empty temporary array to hold the merged result.</li>
            <li>
                <ul>
                    <li>Compare the elements at the pointers of the two halves:</li>
                    <li>Copy the smaller element into the temporary array.</li>
                    <li>Move the pointer of the sublist with the smaller element forward.</li>
                </ul>
            </li>
            <li>Repeat step 3 until one of the sublists is empty.</li>
            <li>Copy the remaining elements from the non-empty sublist to the temporary array.</li>
            <li>Copy the elements back from the temporary array to the original list.</li>
        </ol>
        <h2>Complexity Analysis of Merge Sort:</h2>
        <ul>
            <li>Time Complexity:
                <ul>
                    <li>Best Case: O(n log n), When the array is already sorted or nearly sorted.</li>
                    <li>Average Case: O(n log n), When the array is randomly ordered.</li>
                    <li>Worst Case: O(n log n), When the array is sorted in reverse order.</li>
                </ul>
            </li>
            <li>Auxiliary Space: O(n), Additional space is required for the temporary array used during merging.</li>
        </ul>
  </div>
);

export default MergeSortDetails;
