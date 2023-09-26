const ItemListContainer = (props) => {
    
    return(
        <main className="main">
            <h2>
               <strong> Bienvenido {props.nombre}!!!</strong>
               </h2>
            <p>Aca encontraras los mejores productos y precios en ropa deportiva</p>
            <div className="imagen">
                <img src="./src/imagenes/gym.jpg" alt="" />
            </div>

        </main>
    )
}
export default ItemListContainer

//prop greeting
//mostrar mensaje el mensaje dentro del contenedor con estilismo 