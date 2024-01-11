import {Link} from 'react-router-dom';
import "./navBar-Panel.css"
import logo from "./logo.svg"

const NavBar = ()=>{
    return(
        <div>
            <div className='panel'>
                <div className='links'>
                    <Link className="link" to="/">Mi Perfil</Link>
                    <Link className="link" to="/inicio">Inicio</Link>
                    <Link className="link" to="/my-stars">Stars</Link>
                    <Link className="link" to="/ajustes">Ajustes</Link>
                </div>
            </div>
             <div className='nav-bar'> 
                <Link className="link-logo" to="/"><img className="logo" src={logo} alt='logo'></img></Link>
            </div>  
        </div>
    )
} 
export default NavBar;