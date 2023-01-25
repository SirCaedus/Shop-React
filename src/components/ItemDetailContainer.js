import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc , getDoc } from 'firebase/firestore'
import { db } from './FireBase'
import ItemDetail from './ItemDetail'
//import Stock from './datalol.json'

const ItemDetailContainer = () => {
   
   const {id} = useParams()
   const [item,setItem] = useState({})
   
   useEffect( () =>{
        const docRef = doc(db,"items",id)
        const stock = getDoc(docRef)
        stock
        .then((respuesta) =>{
            const productos = respuesta
            return productos
        })
        .then((productos)=>{
           // const itemFind = productos.find((obj) => obj.id === parseInt(id))
            setItem(/*itemFind*/{id:productos.id,nombre:productos.get('nombre'),imagen:productos.get('imagen'),clase:productos.get('clase'),descripcion:productos.get('descripcion'),precio:productos.get('precio')})
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