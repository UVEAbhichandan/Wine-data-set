import { useEffect, useState, useMemo } from 'react';
import './App.css';
import { alcholSorter, 
         dataParser,
         meanCalculator,
         median,
         medianCalculator,
         modeCalculator
       } from './utils/utils';
import wineDataRaw from './Assets/wineDataSet.json';
import { Table } from './components/Table';

function App() {

  const data = dataParser(wineDataRaw);
  const [alcohols, setAlcohols] = useState({});
  const [tableData, setTableData] = useState({
    mean: [],
    median: [],
    mode: []
  })

  useEffect(() =>{
    if(!Object.keys(alcohols)?.length){
      setAlcohols(alcholSorter(data));
    }
    const mean = [];
    const median = [];
    const mode = [];
    if(Object.keys(alcohols)?.length){
      Object.keys(alcohols).forEach((item)=>{
        mean.push(meanCalculator(alcohols[item]))
        median.push(medianCalculator(alcohols[item]))
      })
    }
    mean.forEach((item, i)=>{
      mode.push(modeCalculator(item, median[i]))
    })
    if(!tableData.mean.length){
      setTableData({
        mean: mean,
        median: median,
        mode: mode
      })
    }
  });

  console.log(alcohols, 4);

  return (
    <div className="App">
      <h1>WINE DATA DISPLAY</h1>
      {/* {JSON.stringify(alcohols)} */}
      {tableData.mean.length &&
        <Table tableData={tableData} />
      }
    </div>
  );
}

export default App;
