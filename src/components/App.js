import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import getDataApi from '../services/getDataApi.js';
import getAllSeries from '../services/getAllSeries.js';
import DetailSeries from './Views/DetailSeries.jsx';
import ListSeries from './Views/ListSeries.jsx';
import Register from './Register/Register.jsx';
import Filter from './Filter/FilterSerie.jsx';
import Option from './Option/OptionSerie.jsx';
import Navigation from './Views/Navigation.jsx';
import Login from './Login/Login.jsx';
import '../styles/App.css';
import Loader from './Views/Loader.jsx';



function App() {
  const [allSeries, setAllSeries] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState('');
  const [option, setOption] = useState('All');
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getAllSeries().then((response) => {
      setAllSeries(response);
      setLoader(true);
    })
    getDataApi(page).then((response) => {
      setSeries(response);
      setLoader(true);
    })
    setOption(option)
  }, [page, option]);


  const nextPage = () => {
    if (page > 7){

    }else{
      setPage(page + 1)
    }
    
  }
  const previousPage = () => {
    if (page <= 0) {
  
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
            <Filter loader={loader} handleInput={handleInput} search={search} series={filteredSerie} />
            <Option loader={loader} series={selectedSerie} handleOption={handleOption} option={option} />
            <ListSeries loader={loader} series={filteredSerie} nextPage={nextPage} previousPage={previousPage} />
            <Loader loader={loader}/>
          </>
        } />
        <Route path='/register' element={<Register handleOption={handleOption}/>} />
        <Route path='/login' element={<Login handleOption={handleOption}/>} />
        <Route path='/selected/:id' element={<DetailSeries series={selectedSerie} />} />
        <Route path='/detail/:id' element={<DetailSeries series={series} handleOption={handleOption} />} />
        <Route path='*' element={`Página no encontrada, 404`} />
      </Routes>
    </div>
  );
}

export default App;
