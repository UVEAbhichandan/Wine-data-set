import { useEffect, useState } from 'react';
import './App.css';
import {
  alcholSorter,
  createTable,
  dataParser,
} from './utils/utils';
import wineDataRaw from './Assets/wineDataSet.json';
import { Table } from './components/Table';

function App() {
  // parsed data
  const data = dataParser(wineDataRaw);
  const [alcohols, setAlcohols] = useState({});

  const [flavanoidsData, setFlavanoidsData] = useState({
    mean: [],
    median: [],
    mode: []
  })

  const [GammaData, setGammaData] = useState({
    mean: [],
    median: [],
    mode: []
  })


  useEffect(() => {
    if (!Object.keys(alcohols)?.length) {
      setAlcohols(alcholSorter(data));
    }
    //flavanoidsData set
    if (!flavanoidsData.mean.length) {
      setFlavanoidsData(createTable(alcohols, "Flavanoids"))
    }
    //GammaData set
    if (!GammaData.mean.length) {
    setGammaData(createTable(alcohols, "Gamma"))
    }
  }, [alcohols, flavanoidsData.mean.length, GammaData.mean.length, data]);

  return (
    <div className="App">
      <h1>WINE DATA DISPLAY</h1>
      {flavanoidsData.mean.length &&
        <Table tableData={flavanoidsData} type={"Flavanoids"}/>
      }
      <div className='spacer' />
      {GammaData.mean.length &&
        <Table tableData={GammaData} type={"Gamma"} />
      }
    </div>
  );
}

export default App;
