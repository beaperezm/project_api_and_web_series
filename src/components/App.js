import { useState } from 'react';
import { useEffect } from 'react';
import getDataApi from '../services/getDataApi.js';
import '../styles/App.css';
import ListSeries from './ListSeries';
import {Routes, Route, Link} from 'react-router-dom';
import DetailSeries from './DetailSeries.jsx';
import Form from './Form/Form.jsx';
import Filter from './Filter/FilterSerie.jsx';



function App() {
  const [series, setSeries] = useState([]);
  const [foundSeries, setFoundSeries] = useState([]);
  
  useEffect(() => {
    getDataApi().then((res) => setSeries(res))
  }, []);

  const handleInput = (value) => {
    setFoundSeries(value);
    console.log(foundSeries)
  }

  const filteredSerie = series.filter((serie) => {
    return serie.title
  })
  console.log(filteredSerie)
  return (
    <div className="App">
    <Form />
    <Filter foundSeries={foundSeries} handleInput={handleInput}/>
    <Routes>
      <Route path = '/' element = {<ListSeries series={filteredSerie}/>} />
      <Route path='/detail/:id' element={<DetailSeries series={series} />} />
    </Routes>
      
    </div>
  );
}

export default App;
