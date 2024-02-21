import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import CardWidget from '../CartWidget/CartWidget.js'
import Categorias from '../Categorias/categorias.js';
import Logo from '../Logo/logo.png'

import Busqueda  from '../Busqueda/busqueda.js';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="NavBar">
           
           <div className='NavBarContainer'>
         <h3><img src={Logo} className='Logo' alt="Logo"/><Link to="/">Ecommerce</Link></h3>
        <div> <Busqueda/></div>
        <div><Categorias/></div> 
        <div><CardWidget/></div>
           </div>
        </nav>

     

       
    )
    
}

export default NavBar