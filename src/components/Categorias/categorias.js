import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Link } from 'react-router-dom';
import './categorias.css'


const Categorias = () =>{

    return(


      <ul className="Categorias">
           <li className='Categoriali'><Link to="/category/telefonos">Telefonos</Link></li>

        <li className='Categoriali'><Link to="/category/tablets">Tablets</Link></li>

       <li className='Categoriali'> <Link to="/category/computadoras">Computadores</Link></li>
      </ul>
       
    //  <li className="nav-item dropdown">
    //       <ul className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //         Categorias
    //       </ul>
    //       <ul className="dropdown-menu">
    //       <li className="dropdown-item" ><Link to="/category/telefonos">Telefonos</Link></li>

    //         <li className="dropdown-item" ><Link to="/category/tablets">Tablets</Link></li>

    //         <li className="dropdown-item" > <Link to="/category/computadores">Computadores</Link></li>
    //       </ul>
    //     </li>
      
    )
}

export default Categorias