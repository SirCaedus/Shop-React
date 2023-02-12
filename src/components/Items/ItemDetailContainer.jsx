import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { doc , getDoc } from 'firebase/firestore'
import { db } from '../../Firebase'
import { toast } from 'react-toastify'
import ItemDetail from './ItemDetail'
import PageNotfound from '../Navigation/PageNotFound'

const ItemDetailContainer = () => {
   
   const {id} = useParams()
   const [carga,setCarga] = useState(false)
   const [item,setItem] = useState({})
   const [idExists,setIdExists] = useState(true)

   
   useEffect( () => {
        const docRef = doc(db,"items",id)
        const stock = getDoc(docRef)
        stock
        .then((respuesta) =>{
            const productos = respuesta
            return productos               
        })
        .then((productos)=>{
            if (productos.exists()){
                setItem({
                    id:productos.id,
                    nombre:productos.get('nombre'),
                    imagen:productos.get('imagen'),
                    clase:productos.get('clase'),
                    descripcion:productos.get('descripcion'),
                    precio:productos.get('precio')
                })
            } else {
                setIdExists(false)
            }
            setCarga(true)
        })
        .catch((error) =>{
            console.log(error)
            toast.dismiss()
            toast.error('¡Ups! parece que hubo un error. ¡Vuelve a intentarlo!')
        })

   },[id])
   
    return (
        <>
            {carga  
                ?   idExists ? <ItemDetail item={item}/> : <PageNotfound/>
                :   <Container className='loadingPages'>Cargando...</Container>
            }
        </>
    )
}

export default ItemDetailContainer