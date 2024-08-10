import './App.css';
import { SortingVisualizer } from './SortingVisualizer/SortingVisualizer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
     <Helmet>
      <title>SortingVisualizer</title>
    </Helmet>
    <div className="App">
       <SortingVisualizer></SortingVisualizer>
    </div>
    </>
  );
}

export default App;
