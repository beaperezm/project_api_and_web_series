import { Link } from 'react-router-dom';
import '../styles/Navigation.scss'
function Navigation() {
    return (
        <div>
            <nav className='navigation'>
                <ul className='navigation__list'>
                    <li className='navigation__list_item'>
                        <Link to='/register' className='css-button-fully-rounded--grey'>Registro</Link>
                    </li>
                    <li className='navigation__list_item'>
                        <Link to='/login' className='css-button-fully-rounded--grey'>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;