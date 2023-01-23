import { useContext } from 'react';
import Button from '../components/Button/Button';
import LoaderContext from '../context/LoaderContext';
import '../styles/Navigation.scss';

function Navigation({isLogged}) {
    const isLoaded = useContext(LoaderContext)
    return (
        <div>
            <nav className={`navigation ${!isLoaded ? "display" : null}`}>
                <ul className='navigation__list'>
                {!isLogged ? <Button /> : null}
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;