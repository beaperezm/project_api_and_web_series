import '../styles/Loader/Loader.scss';
import {useContext} from 'react';
import LoaderContext from '../context/LoaderContext';


function Loader (){
    const isLoaded = useContext(LoaderContext);
    return(
        <div className={`loader ${isLoaded ? "display" : null}`}></div>
    );
};

export default Loader;