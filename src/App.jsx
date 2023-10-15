import NavBar from "./component/NavBar";

import ItemListContainer from './component/ItemListContainer'
import ItemDetailContainer from './component/ItemDetailContainer';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

 //import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
        </Routes>

    </BrowserRouter> 
  )
}
export default App

