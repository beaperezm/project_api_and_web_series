import {Link} from 'react-router-dom';
function Navigation (){
    return (
        <div>
            <ul>
                <li>
                    <Link to='/register'>Registro</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;