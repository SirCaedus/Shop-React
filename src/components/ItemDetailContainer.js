import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Stock from './datalol.json'

const ItemDetailContainer = () => {
   
   const {id} = useParams()
   const [item,setItem] = useState({})
   
   useEffect( () =>{
        const stock = fetch(Stock)
        stock
        .then((respuesta) =>{
            const productos = Stock
            return productos
        })
        .then((productos)=>{
            const itemFind = productos.find((obj) => obj.id === parseInt(id))
            setItem(itemFind)
        })
        .catch((error) =>{
            console.log(error)
        })

   },[id])
   
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer