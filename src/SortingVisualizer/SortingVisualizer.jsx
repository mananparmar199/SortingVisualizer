import React from 'react';
import './SortingVisualizer.css';
import LinkedInLogo from './Images/Logo/LinkedIn-Logo.png';
import { getMergeSortAnimation } from '../Sorting Algorithm/mergeSort'; 

export class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      barWidth: 2,
      arraySize: 50,
      speed: 10,
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
    this.setState({ array, arraySize: size }, () => {
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
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * (100 / speed));   
        }
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOne = arrayBars[barOneIdx];
          if (barOne) {
            const barOneStyle = barOne.style;
            barOneStyle.height = `${newHeight}px`;
          }
        }, i * (100 / speed));
      }
    }
  }

  render() {
    const { array, barWidth, arraySize, speed} = this.state;
    const minSize = 10;
    const maxSize = 150;
    const step = 10;

    return (
      <>
        <div className="top-navbar">
          <div className="title">Sorting Visualizer</div>
          <div className="sort-buttons">
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          </div>
          <div className="creator">
            Created by Manan Parmar
            <a href="https://www.linkedin.com/in/mananparmar/" target="_blank" rel="noreferrer noopener">
                <img src={LinkedInLogo} alt="LinkedIn" className="linkedin-logo" />
            </a>
          </div>
        </div>

        <div className="container">
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

          <div className="bottom-content">
            <button onClick={() => this.resetArray()} className="bn31">Generate new Array</button>
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
            />
          </div>
        </div>
      </>
    );
  }
}

function randomFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
