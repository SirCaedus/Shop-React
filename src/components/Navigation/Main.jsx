import { Route, Routes } from 'react-router-dom'
import ItemListContainer from '../Items/ItemListContainer'
import ItemDetailContainer from '../Items/ItemDetailContainer'
import CartContainer from '../Cart/CartContainer'
import PageNotFound from './PageNotFound'
import CartCheckout from '../Cart/CartCheckout'

const Main = () => {

    return (
        <main className='bgMain fontWhite'>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:categoria' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<CartContainer/>}/>
                <Route path='/checkout' element={<CartCheckout/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </main>
    )
}

export default Main