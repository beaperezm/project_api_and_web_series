import '../styles/Loader.scss';
import {useContext} from 'react';
import LoaderContext from '../context/LoaderContext';


function Loader (){
    const loader = useContext(LoaderContext);
    return(
        <div className={`loader ${loader ? "display" : null}`}></div>
    )
}

export default Loader;