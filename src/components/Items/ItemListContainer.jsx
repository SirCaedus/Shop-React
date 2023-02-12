import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { collection , getDocs, query, where } from 'firebase/firestore'
import { db } from '../../Firebase'
import { toast } from 'react-toastify'
import ItemList from './ItemList'
import PageNotFound from '../Navigation/PageNotFound'

const ItemListContainer = () => {

    const {categoria} = useParams()
    const [carga, setCarga] = useState(false)
    const [productos, setProductos] = useState([])
    const [categoriaExists,setCategoriaExists] = useState(true)
  
    useEffect( () => {
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

                if (!(productos.length === 0)){
                    setProductos(productos)
                    setCategoriaExists(true) 
                } else {
                    setCategoriaExists(false)  
                }
                setCarga(true)
            })
            .catch((error) =>{
                toast.dismiss()
                toast.error('¡Ups! parece que hubo un error. ¡Vuelve a intentarlo!')
            }) 

    }, [categoria])

   return (
        <>
        {carga 
            ? categoriaExists ? <ItemList productos={productos}/> : <PageNotFound/>
            : <Container className='loadingPages'>Cargando...</Container>}
        </>
    )
}

export default ItemListContainer