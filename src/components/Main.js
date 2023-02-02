import { Route, Routes } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import CartContainer from './CartContainer'
const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:categoria' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<CartContainer/>}/>
                <Route path='*' element={<div>404</div>}/>
            </Routes>
        </main>
    )
}

export default Main