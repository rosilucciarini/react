import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="card-container">
            <div className="cont">
                <img src={`../imagenes/${item.imagen}`} className="card-img" alt={`imagen de ${item.imagen}`} />
            </div>
            <div className="itemDetail">
                <h5 className="cardTitle">{item.nombre}</h5>
                
                <p className="card-text">Stock: {item.stock}</p>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <div className="botonItem">
                    <ItemCount valInicial={1} stock={item.stock}/>
                    <button className="boton">Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;