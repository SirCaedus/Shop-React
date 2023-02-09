import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc , getDoc } from 'firebase/firestore'
import { db } from '../Firebase'
import { toast } from 'react-toastify'
import ItemDetail from './ItemDetail'

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
            setItem({
                id:productos.id,
                nombre:productos.get('nombre'),
                imagen:productos.get('imagen'),
                clase:productos.get('clase'),
                descripcion:productos.get('descripcion'),
                precio:productos.get('precio')
            })
        })
        .catch((error) =>{
            console.log(error)
            toast.dismiss()
            toast.error('¡Ups! parece que hubo un error. ¡Vuelve a intentarlo!')
        })

   },[id])
   
    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer