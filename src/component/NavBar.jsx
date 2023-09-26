import CartWidget from "./CartWidget"



const NavBar = () => {
    return (
        <header className="header">
            
            <h1>TOTAL DEPORTES</h1>
           
            <nav className="navbar">
                <a href="">Inicio</a>
                <a href="">Productos</a>
                <a href="">Contacto</a>

                <CartWidget/>

            </nav>
             </header>
    )
}
export default NavBar

//titulo nombre de la tienda
//listado de categrias clickeables
//estilos cpn taiwin