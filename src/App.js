import { useEffect, useState, useMemo } from 'react';
import './App.css';
import { alcholSorter, 
         dataParser,
         median
       } from './utils/utils';
import wineDataRaw from './Assets/wineDataSet.json';

function App() {
  console.log(median([{Flavanoids: 2},{Flavanoids: 3},{Flavanoids: 1},{Flavanoids: 4}]),1);

  const data = dataParser(wineDataRaw);
  const [alcohols, setAlcohols] = useState({});

  useEffect(() =>{
    console.log(2);
    setAlcohols(alcholSorter(data));
    console.log(3);
  }, [data]);

  console.log(alcohols, 4);

  return (
    <div className="App">
      <h1>WINE DATA DISPLAY</h1>
      {JSON.stringify(alcohols)}
    </div>
  );
}

export default App;
