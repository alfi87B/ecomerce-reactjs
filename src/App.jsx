import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'BIENVENIDOS'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Listado de Productos filtrados'}/>}/>
          <Route path="/category/buzos" element={<ItemListContainer greeting={'Proximamente nuevos productos'}/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer />}/>  
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
