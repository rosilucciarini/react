import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="card-container">
            <div className="cardBody"> 
                <img src={`../imagenes/${item.imagen}`} className="card-img" alt={"producto"} height={320}/>
                <h5 className="cardTitle">{item.nombre}</h5>
                <p className="card-text">Stock: {item.stock}</p>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <button className="boton"><Link className="nav-link" to={`/product/${item.id}`}>Ver Producto</Link></button>
            </div>
        </div>
    );
}

export default Item;