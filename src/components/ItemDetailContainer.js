import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Stock from '../components/data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    
    const {id} = useParams()
    const [producto,setProducto] = useState({})

    useEffect ( () => {
        const stock = fetch(Stock)

            stock
                .then((respuesta) =>{
                    const productos = Stock
                    return productos
                })
                .then((productos)=>{
                    productos = productos.find((obj) => obj.id === parseInt(id)) 
                    setProducto(productos)
                })
                .catch((error) =>{
                    console.log(error)
                })

    },[id])

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer