import { Route, Routes } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import CartContainer from './CartContainer'
import PageNotFound from './PageNotFound'

const Main = () => {
 
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:categoria' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<CartContainer/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </main>
    )
}

export default Main