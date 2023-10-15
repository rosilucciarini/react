import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import ItemList from './ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {categoria}= useParams()
    useEffect(()=> {
        if(categoria){
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prods => prods.categoria === categoria)
                const productsList = ItemList({products})
                console.log(productsList)
                setProductos(productsList)
            })
        } else {
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
                const productsList = ItemList({products})
                console.log(productsList)
                setProductos(productsList)
            })
        }
    }, [categoria])
    return (
        <div className='cardProductos'>
            {productos}
        </div>
    );
}

export default ItemListContainer;