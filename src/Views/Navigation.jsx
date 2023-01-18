import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import '../styles/Navigation.scss';

function Navigation({isLogged}) {
    return (
        <div>
            <nav className='navigation'>
                <ul className='navigation__list'>
                {!isLogged ? <Button /> : null}
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;