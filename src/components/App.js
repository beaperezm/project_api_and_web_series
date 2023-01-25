import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import getDataPaged from '../services/getDataPaged.js';
import getAllSeries from '../services/getAllSeries.js';
import DetailSeries from '../Views/Series/DetailSeries.jsx';
import ListSeries from '../Views/Series/ListSeries.jsx';
import Register from '../Views/Register/Register.jsx';
import Filter from './Filter/Filter.jsx';
import Option from './Option/OptionSerie.jsx';
import Navigation from '../Views/Navigation/Navigation.jsx';
import Login from '../Views/Login/Login.jsx';
import Loader from '../Views/Loader/Loader.jsx';
import UrlNotFound from '../Views/UrlNotFound/urlNotFound.jsx';
import LoaderContext from '../context/LoaderContext.jsx';
import Profile from '../Views/Login/Profile.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import ModalForm from '../Views/Modal/ModalForm.jsx';
import Footer from './Footer/Footer.jsx';
import '../styles/App.css';
import ModalLogin from '../Views/Modal/ModalLogin.jsx';



function App() {
  //Variable que va a contener el listado de series.
  const [allSeries, setAllSeries] = useState([]);
  //Variable que va a contener las series paginadas.
  const [series, setSeries] = useState([]);
  // Variable para el filtro de Busqueda de la web.
  const [search, setSearch] = useState('');
  // Variable para guardar el campo del Select de la web.
  const [option, setOption] = useState('All');
  // Variable que guarda el numero de página actual.
  const [page, setPage] = useState(1);
  // Variable para controlar si han llegado los datos de la API y ocultar el LOADER.
  const [isLoaded, setIsLoaded] = useState(false);
  // Variable que controla el boton de NEXT para ir a la pagina siguiente.
  const [showNextButton, setShowNextButton] = useState(true);
  // Variable que controla el boton de PREVIOUS para ir a la pagina anterior.
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  // Variable para guardar los datos del usuario.
  const [user, setUser] = useState({
    nickname: '',
    email: '',
    password: '',
    age: ''
  });

  // Variables para guardar el valor del Nickname, Email y Age del usuario Logueado para usarlo en el PROFILE.
  const [userLoggedNickname, setUserLoggedNickname] = useState({
    nickname: ''
  });
  const [userLoggedEmail, setUserLoggedEmail] = useState({
    email: ''
  });
  const [userLoggedAge, setUserLoggedAge] = useState({
    age: ''
  });

  //Variable para controlar si el usuario está Logueado y mostrar el PROFILE
  const [isLogged, setIsLogged] = useState(false);
  // Variable para controlar si el usuario está Registrado y mostrar el MODAL en caso de éxito.
  const [isRegistered, setIsRegistered] = useState(false);
  // Variable para comprobar el MODAL del Login.
  const [isLoggedModal, setIsLoggedModal] = useState(false);

  /*
  Controlamos bloque de codigo con UseEffect en funcion de los valores de page, option, y los botones de pagina.
  Realizamos 2 llamadas a la API para:
    1- Llamar al listado de Series y setear la variable de allSeries con la respuesta.
    2- Llamar al endpoint de la paginacion y setear la variable series con la respuesta de las 3 series.
    En ambos casos, cuando haya respuesta se oculta el LOADER de la web porque ya tenemos los datos. 
  Tambien controlamos el número de pagina para mostrar/ocultar los botones de next/previous.
  Por ultimo, seteamos la variable de estado con la opción elegida. 
  */
  useEffect(() => {
    getAllSeries().then((response) => {
      setAllSeries(response);
      setIsLoaded(true);
    })
    getDataPaged(page).then((response) => {
      const nextPage = response.map((item) => {
        return item.page;
      })
      setSeries(response);
      setIsLoaded(true);
      if (page <= 1) {
        setShowPreviousButton(false);
      } else if (nextPage.includes(null)) {
        setShowNextButton(false);
      }
    })
    setOption(option);
  }, [page, option, showNextButton, showPreviousButton]);

  // Controlamos el numero de pagina siguiente y si hubiera que ocultar el boton de nextPage.
  const nextPage = () => {
    setPage(page + 1)
    setShowPreviousButton(true);
  };
  // Controlamos el numero de pagina anterior y si hubiera que ocultar el boton de previousPage
  const previousPage = () => {
    setPage(page - 1)
    setShowNextButton(true);
  };
  // Recogemos mediante lifting el value del Search Input y lo seteamos a la variable de estado search. 
  const handleSearchInput = (value) => {
    setSearch(value);
  };
  // Recogemos mediante lifting el value del Option Select y lo seteamos a la variable de estado option. 
  const handleOptionInput = (value) => {
    setOption(value)
  };
  // Recogemos mediante lifting el value del Login y lo seteamos a la variable de estado User. 
  const handleChangeLogin = (value) => {
    setUser(value);
  };
  // Recogemos mediante lifting el value del Register y lo seteamos a la variable de estado User. 
  const handleChangeRegister = (value) => {
    setUser(value);
  };
  // Resetea los input del Login para controlarlos.
  const handleResetValueLogin = () => {
    setUser({ email: '', password: '' })
  };
  // Resetea los input del Register para controlarlos
  const handleClickValueRegister = () => {
    setUser({ nickname: '', email: '', password: '', age: '' })
  };
  //Resetea los valores del profile Email
  const handleClickValueLoggedEmail = () => {
    setUserLoggedEmail({ email: '' })
  };
  //Resetea los valores del profile Nickname
  const handleClickValueLoggedNickname = () => {
    setUserLoggedNickname({ nickname: '' })
  }
  //Resetea los valores del profile Age
  const handleClickValueLoggedAge = () => {
    setUserLoggedAge({ age: '' })
  }
  // Codigo que se encarga de filtrar la serie en función del texto de entrada del usuario.
  const filteredSerie = series.filter((serie) => {
    return serie.title.toLowerCase().includes(search);
  });
  // Codigo que filtra la serie en funcion de la eleccion del usuario mediante el Select. 
  const selectedSerie = allSeries.filter((serie) => {
    return option === 'All' ? true : serie.title === option;
  });
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            {isLoggedModal ? <ModalLogin title={'Login'} body={'¡TE HAS LOGUEADO CON ÉXITO!'} setIsLoggedModal={setIsLoggedModal} /> : null}
            {isRegistered ? <ModalForm title={'Registro'} body={'¡TE HAS REGISTRADO CON ÉXITO!'} /> : null}
            <LoaderContext.Provider value={isLoaded}>
              {!isLogged ? <Navigation isLoaded={isLoaded} /> : <Profile setIsLogged={setIsLogged} userLoggedNickname={userLoggedNickname} userLoggedEmail={userLoggedEmail} handleClickValueLoggedEmail={handleClickValueLoggedEmail} handleClickValueLoggedNickname={handleClickValueLoggedNickname} handleClickValueLoggedAge={handleClickValueLoggedAge} />}
              <Filter handleSearchInput={handleSearchInput} />
              <Option series={selectedSerie} handleOptionInput={handleOptionInput} option={option} userLoggedAge={userLoggedAge} />
              <ListSeries series={filteredSerie} nextPage={nextPage} previousPage={previousPage} showNextButton={showNextButton} showPreviousButton={showPreviousButton} userLoggedAge={userLoggedAge} />
              <Loader />
            </LoaderContext.Provider>
          </>
        } />
        <Route path='/register' element={<Register handleOptionInput={handleOptionInput} handleChangeRegister={handleChangeRegister} user={user} handleClickValueRegister={handleClickValueRegister} setIsRegistered={setIsRegistered} />} />
        <Route path='/login' element={<Login handleOptionInput={handleOptionInput} handleChangeLogin={handleChangeLogin} user={user} handleResetValueLogin={handleResetValueLogin} setIsLogged={setIsLogged} userLoggedEmail={userLoggedEmail} setUserLoggedNickname={setUserLoggedNickname} setUserLoggedEmail={setUserLoggedEmail} userLoggedNickname={userLoggedNickname} userLoggedAge={userLoggedAge} setUserLoggedAge={setUserLoggedAge} setIsRegistered={setIsRegistered} setIsLoggedModal={setIsLoggedModal} />} />
        <Route path='/selected/:id' element={<PrivateRoute isLogged={isLogged} component={<DetailSeries series={selectedSerie} handleOptionInput={handleOptionInput} userLoggedAge={userLoggedAge} />} />} />
        <Route path='/detail/:id' element={<PrivateRoute isLogged={isLogged} component={<DetailSeries series={series} handleOptionInput={handleOptionInput} userLoggedAge={userLoggedAge} />} />} />
        <Route path='*' element={<UrlNotFound />} />
      </Routes>
      {isLoaded ? <Footer /> : null}
    </div>
  );
}

export default App;
