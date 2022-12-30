import { useState, useEffect } from 'react';
import getDataApi from '../services/getDataApi.js';
import '../styles/App.css';
import ListSeries from './ListSeries';
import { Routes, Route } from 'react-router-dom';
import DetailSeries from './DetailSeries.jsx';
import Form from './Form/Form.jsx';
import Filter from './Filter/FilterSerie.jsx';
import Option from './Option/OptionSerie.jsx';
import SelectedSerie from './SelectedSerie.jsx';



function App() {
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState('');
  const [option, setOption] = useState('All');

  useEffect(() => {
    getDataApi().then((res) => setSeries(res))
  }, []);

  const handleInput = (value) => {
    setSearch(value);
  }

  const handleOption = (value) => {
    setOption(value)
  }
  const filteredSerie = series.filter((serie) => {
    return serie.title.toLowerCase().includes(search);
  })
  const selectedSerie = series.filter((serie) => {
    return option === 'All' ? true : serie.title === option;
  })
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={
          <>
            <Form />
            <Filter handleInput={handleInput} search={search} series={filteredSerie} />
            <Option series={selectedSerie} handleOption={handleOption} option={option} />
            <ListSeries series={filteredSerie} />
          </>
        } />
        <Route path='/selected/:id' element={<DetailSeries series={selectedSerie} />} />
        <Route path='/detail/:id' element={<DetailSeries series={series} handleOption={handleOption} />} />
        <Route path='*' element={`Página no encontrada, 404`} />
      </Routes>
    </div>
  );
}

export default App;
