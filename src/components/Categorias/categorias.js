// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';



const Categorias = () =>{

    return(
       
     <li className="nav-item dropdown">
          <ul className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </ul>
          <ul className="dropdown-menu">
          <li className="dropdown-item" href="#">Smartphones</li>

            <li className="dropdown-item" href="#">Computers</li>

            <li className="dropdown-item" href="#">Tablets</li>
          </ul>
        </li>
      
    )
}

export default Categorias