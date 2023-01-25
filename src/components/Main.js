import ItemListContainer from './ItemListContainer.js'
import ItemDetailContainer from './ItemDetailContainer.js'
import {Route, Routes} from 'react-router-dom'

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:categoria' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='*' element={<div>404</div>}/>
            </Routes>
        </main>
    )
}

export default Main