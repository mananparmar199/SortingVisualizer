import React from 'react';
import './SortingVisualizer.css';
import LinkedInLogo from './Images/Logo/LinkedIn-Logo.png';
import SortingAlgorithmDetails from '../SortingAlgorithmDetails/SortingAlgorithmDetails'; // Import the new component
import { getMergeSortAnimation } from '../Sorting Algorithm/mergeSort'; 
import { getSelectionSortAnimation } from '../Sorting Algorithm/selectionSort';
import { getQuickSortAnimation } from '../Sorting Algorithm/quickSort';

export class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      barWidth: 2,
      arraySize: 50,
      speed: 10,
      selectedAlgo: 'Merge Sort', // State to manage selected algorithm
      isRunning: false, // State to manage if the sorting is running
      selectedPivot: '',
    };
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.resetArray();
    this.calculateBarWidth();
    window.addEventListener('resize', this.calculateBarWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateBarWidth);
  }

  resetArray(size = this.state.arraySize) {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(randomFromInterval(5, 500));
    }
    this.setState({ array, arraySize: size, isRunning: false }, () => {
      this.calculateBarWidth();
      this.resetBarColors(); // Reset the colors after the array is regenerated
    });
  }

  resetBarColors() {
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < arrayBars.length; i++) {
      const barStyle = arrayBars[i].style;
      barStyle.backgroundColor = 'rgb(198, 226, 226)'; // Set the original color
    }
  }

  calculateBarWidth = () => {
    if (!this.containerRef.current) return;
    const containerWidth = this.containerRef.current.clientWidth;
    const { array } = this.state;
    const numberOfBars = array.length;
    const margin = 2; 
    const maxBarWidth = 90; 

    const calculatedWidth = (containerWidth / numberOfBars) - margin;
    const barWidth = Math.min(Math.max(calculatedWidth, 2), maxBarWidth);
    this.setState({ barWidth });
  }

  setSpeed(value) {
    this.setState({speed: value});
  }

  handleArraySizeChange = (event) => {
    const size = Number(event.target.value);
    this.resetArray(size);
  }

  mergeSort() {
    const animations = getMergeSortAnimation(this.state.array);
    const speed = this.state.speed;
    const timeouts = [];
  
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
  
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOne = arrayBars[barOneIdx];
        const barTwo = arrayBars[barTwoIdx];
  
        if (barOne && barTwo) {
          const barOneStyle = barOne.style;
          const barTwoStyle = barTwo.style;
          const color = i % 3 === 0 ? 'red' : 'turquoise';
  
          const timeout = setTimeout(() => {
            if (!this.state.isRunning) {
              timeouts.forEach(clearTimeout);
              return;
            }
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            if (i === animations.length - 1) {
              this.setState({ isRunning: false });
            }
          }, i * (100 / speed));
  
          timeouts.push(timeout);
        }
      } else {
        const timeout = setTimeout(() => {
          if (!this.state.isRunning) {
            timeouts.forEach(clearTimeout);
            return;
          }
          const [barOneIdx, newHeight] = animations[i];
          const barOne = arrayBars[barOneIdx];
  
          if (barOne) {
            const barOneStyle = barOne.style;
            barOneStyle.height = `${newHeight}px`;
          }
          if (i === animations.length - 1) {
            this.setState({ isRunning: false });
          }
        }, i * (100 / speed));
  
        timeouts.push(timeout);
      }
    }
  }
  

  selectionSort() {
    var animations = getSelectionSortAnimation(this.state.array);
    const speed = this.state.speed;
    const { isRunning } = this.state;
    const timeouts = [];
  
    for (let i = 0; i < animations.length; i++) {
      if (!isRunning) {
        break;
      }
      const arrayBars = document.getElementsByClassName('array-bar');        
      const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight, barOneColor, barTwoColor] = animations[i];
      const barOne = arrayBars[barOneIdx];
      const barTwo = arrayBars[barTwoIdx];
      
      if (barOne && barTwo) {
        const barOneStyle = barOne.style;
        const barTwoStyle = barTwo.style;
        
        const timeout = setTimeout(() => {
          if (!this.state.isRunning) {
            // Clear all timeouts if sorting is stopped
            timeouts.forEach(clearTimeout);
            return;
          }
          barOneStyle.backgroundColor = barOneColor;
          barTwoStyle.backgroundColor = barTwoColor;
          if(barOneHeight !== -1) {
            barOneStyle.height = `${barOneHeight}px`;
            barTwoStyle.height = `${barTwoHeight}px`;
          }
          if(i === animations.length-1) {
            this.setState({isRunning : false});
          }
        }, i * (100 / speed));
        
        timeouts.push(timeout);
      }
    }
  }
  

  quickSort() {
    var animations = getQuickSortAnimation(this.state.array, this.state.selectedPivot);
    const speed = this.state.speed;
    const { isRunning } = this.state;
    const timeouts = [];
  
    for (let i = 0; i < animations.length; i++) {
      if (!isRunning) {
        break;
      }
      const arrayBars = document.getElementsByClassName('array-bar');        
      const [pivotIdx, lowIdx, highIdx, pivotHeight, lowHeight, highHeight, pivotColor, lowColor, highColor] = animations[i];
      const pivot = arrayBars[pivotIdx];
      const low = arrayBars[lowIdx];
      const high = arrayBars[highIdx];
      
      if (pivot && low && high) {
        const pivotStyle = pivot.style;
        const lowStyle = low.style;
        const highStyle = high.style;
        
        const timeout = setTimeout(() => {
          if (!this.state.isRunning) {
            // Clear all timeouts if sorting is stopped
            timeouts.forEach(clearTimeout);
            return;
          }
          pivotStyle.backgroundColor = pivotColor;
          lowStyle.backgroundColor = lowColor;
          highStyle.backgroundColor = highColor;
          if(lowHeight !== -1) {
            lowStyle.height = `${lowHeight}px`;
            highStyle.height = `${highHeight}px`;
          }
          if(pivotHeight !== -1) {
            pivotStyle.height = `${pivotHeight}px`;
            highStyle.height = `${highHeight}px`;
          }
          if(i === animations.length-1) {
            this.setState({isRunning : false});
          }
        }, i * (100 / speed));
        
        timeouts.push(timeout);
      }
    }
  }

  heapSort() {
    alert("Work in progress for heapSort. Currently only MERGE SORT is LIVE :)");
  }

  bubbleSort() {
    alert("Work in progress for bubbleSort. Currently only MERGE SORT is LIVE :)");
  }

  handleSortButtonClick = (algo) => {
    this.setState({ selectedAlgo: algo });
  }

  handleRunButtonClick = () => {
    const { selectedAlgo, isRunning } = this.state;
    if (isRunning) {
      // Stop the execution
      this.resetArray();
    } else {
      // Start the execution
      this.setState({ isRunning: true }, () => {
        if (selectedAlgo === 'Merge Sort') this.mergeSort();
        if (selectedAlgo === 'Selection Sort') this.selectionSort();
        if (selectedAlgo === 'Quick Sort') this.quickSort();
        if (selectedAlgo === 'Heap Sort') this.heapSort();
        if (selectedAlgo === 'Bubble Sort') this.bubbleSort();
      });
    }
  }

  handlePivotChange = (event) => {
    this.setState({ selectedPivot: event.target.value });
  };

  render() {
    const { array, barWidth, arraySize, speed, selectedAlgo, isRunning} = this.state;
    const minSize = 10;
    const maxSize = 150;
    const step = 10;

    return (
      <>
        <div className="top-navbar">
          <div className="title">Sorting Visualizer</div>
          <div className="sort-buttons">
            <button onClick={() => this.handleSortButtonClick('Merge Sort')} disabled={isRunning}>Merge Sort</button>
            <button onClick={() => this.handleSortButtonClick('Selection Sort')} disabled={isRunning}>Selection Sort</button>
            <button onClick={() => this.handleSortButtonClick('Quick Sort')} disabled={isRunning}>Quick Sort</button>
            <button onClick={() => this.handleSortButtonClick('Heap Sort')} disabled={isRunning}>Heap Sort</button>
            <button onClick={() => this.handleSortButtonClick('Bubble Sort')} disabled={isRunning}>Bubble Sort</button>
          </div>
          <div className="creator">
            Created by Manan Parmar
            <a href="https://www.linkedin.com/in/mananparmar/" target="_blank" rel="noreferrer noopener">
              <img src={LinkedInLogo} alt="LinkedIn" className="linkedin-logo" />
            </a>
          </div>
        </div>

        <div className="container">
          <div className="algorithm-name">
            <h2>{selectedAlgo}</h2> {/* Display selected algorithm name */}
          </div>
          <div className="array-container" ref={this.containerRef}>
            {array.map((value, idx) => (
              <div 
                className="array-bar" 
                key={idx}
                style={{ 
                  height: `${Math.min(value, 1000)}px`,
                  width: `${barWidth}px` 
                }}>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center min-h-screen">
          <div className="bottom-content">
            {isRunning && <div className="loader"></div>}
            <button onClick={this.handleRunButtonClick} className="bnRun">
              {isRunning ? 'Stop' : 'Run'}
            </button>
            <button onClick={() => this.resetArray()} className="bn31" disabled={isRunning}>Generate new Array</button>
            <span className="range-label">Array Size</span>
            <div className="range-controls">
              <span id="rangeValue" className="range-value">{arraySize}</span>
              <input
                type="range"
                min={minSize}
                max={maxSize}
                step={step}
                value={arraySize}
                onChange={this.handleArraySizeChange}
                className="range"
                disabled={isRunning}
              />
            </div>
            <span className="range-label">Speed</span>
            <input
              type="range"
              min="1"
              max="100"
              value={speed}
              onChange={(e) => this.setSpeed(e.target.value)}
              className="range"
              disabled={isRunning}
            />
            {selectedAlgo === "Quick Sort" && (
              <div className="select">
                <select name="format" id="format" onChange={this.handlePivotChange}>
                  <option selected disabled>Pivot Position</option>
                  <option value="low">Low (First Element)</option>
                  <option value="high">High (Last Element)</option>
                  <option value="random">Random</option>
                </select>
              </div>
            )}
          </div>
        </div>
        </div>

        <SortingAlgorithmDetails selectedAlgo={selectedAlgo} /> {/* Render the algorithm details */}
      </>
    );
  }
}

function randomFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
