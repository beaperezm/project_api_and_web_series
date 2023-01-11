import { useState, useEffect } from 'react';
import getDataApi from '../services/getDataApi.js';
import getAllSeries from '../services/getAllSeries.js';
import '../styles/App.css';
import ListSeries from './ListSeries';
import { Routes, Route } from 'react-router-dom';
import DetailSeries from './DetailSeries.jsx';
import Form from './Form/Form.jsx';
import Filter from './Filter/FilterSerie.jsx';
import Option from './Option/OptionSerie.jsx';
import SelectedSerie from './SelectedSerie.jsx';
import Navigation from './Navigation.jsx';
import Login from './Login/Login.jsx';



function App() {
  const [allSeries, setAllSeries] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState('');
  const [option, setOption] = useState('All');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllSeries().then((response) => {
      setAllSeries(response)
    })
    getDataApi(page).then((response) => {
      setSeries(response)
    })
    setOption(option)
  }, [page, option]);


  const nextPage = () => {
    setPage(page + 1)
  }
  const previousPage = () => {
    if (page <= 0) {
      console.log('No existe la pagina');
    } else {
      setPage(page - 1)
    }
  }

  const handleInput = (value) => {
    setSearch(value);
  }

  const handleOption = (value) => {
    setOption(value)
  }
  const filteredSerie = series.filter((serie) => {
    return serie.title.toLowerCase().includes(search);
  })
  const selectedSerie = allSeries.filter((serie) => {
    return option === 'All' ? true : serie.title === option;
  })
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Navigation />
            <Filter handleInput={handleInput} search={search} series={filteredSerie} />
            <Option series={selectedSerie} handleOption={handleOption} option={option} />
            <ListSeries series={filteredSerie} nextPage={nextPage} previousPage={previousPage} />
          </>
        } />
        <Route path='/register' element={<Form />} />
        <Route path='/login' element={<Login />} />
        <Route path='/selected/:id' element={<DetailSeries series={selectedSerie} />} />
        <Route path='/detail/:id' element={<DetailSeries series={series} handleOption={handleOption} />} />
        <Route path='*' element={`Página no encontrada, 404`} />
      </Routes>
    </div>
  );
}

export default App;
