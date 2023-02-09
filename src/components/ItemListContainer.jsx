import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection , getDocs, query, where } from 'firebase/firestore'
import { db } from '../Firebase'
import { toast } from 'react-toastify'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const {categoria} = useParams()
    const [carga, setCarga] = useState(false)
    const [productos, setProductos] = useState([])
  
    useEffect(() => {
        const productosCollection = collection(db, 'items')
        let filtro
  
        if (categoria) {
            filtro = query(productosCollection, where('clase', '==', categoria))
        } else {
            filtro = productosCollection
        }
  
        const stock = getDocs(filtro)
          stock
            .then((respuesta)=>{
                const productos = respuesta.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }))
                setProductos(productos)
                setCarga(true)
            })
            .catch((error) =>{
                toast.dismiss()
                toast.error('¡Ups! parece que hubo un error. ¡Vuelve a intentarlo!')
            }) 

    }, [categoria])

   return (
        <>
        {carga ? <ItemList productos={productos}/> : 'Cargando...'}
        </>
    )
}

export default ItemListContainer