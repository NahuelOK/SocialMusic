import {Link} from 'react-router-dom';
import "./navBar.css"

const NavBar = ()=>{
    return(
        <div className='nav-bar'> 
           <li className='links'>
            <Link className='link' to="/mi-cuenta">Inicio</Link>
            <Link className='link' to="/mi-cuenta">Explorar</Link>
            <Link className='link' to="/mi-cuenta">Recomendaciones Semanales</Link>
            <Link className='link' to="/mi-cuenta">Yo</Link>
           </li>
        </div>
    )
}
export default NavBar;