import LogoBusqueda from './logoBusqueda.png'

const Busqueda = () =>{

    return(
        <div>
          
           <div className="container-fluid">
            <form className="d-flex" role="search">
           <input className="form-control me-2" type="search" placeholder="Busqueda" aria-label="Search"/>
           <button className="btn btn-outline-success" type="submit"><img src={LogoBusqueda} className='LogoBusqueda' alt="LogoBusqueda"/></button>
          </form>
           </div>

        </div>
    )
}

export default Busqueda