import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"




const NavBar = () => {
    return (
        <header className="header">
            
            <h1>TOTAL DEPORTES</h1>
           
            <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/categoria/indumentaria">Ropa</NavLink>
            <NavLink to="/categoria/calzado">Calzado</NavLink>
            <NavLink to="/categoria/accesorios">Accesorios</NavLink>

                <CartWidget/>

            </nav>
             </header>
    )
}
export default NavBar

