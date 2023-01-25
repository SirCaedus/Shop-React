import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection , getDocs } from 'firebase/firestore'
import { db } from './FireBase'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const {categoria} = useParams()
    const [carga,setCarga] = useState()
    const [productos,setProductos] = useState([])

    useEffect( () =>{
        const productosCollection = collection(db,"items")
        const stock = getDocs(productosCollection)

            stock
                .then((respuesta) =>{
                    const productos = respuesta
                    const array = []
                    productos.forEach((doc)=>{
                        array.push({id:doc.id,nombre:doc.get('nombre'),imagen:doc.get('imagen'),clase:doc.get('clase'),descripcion:doc.get('descripcion'),precio:doc.get('precio')})
                    })
                    return array
                })
                .then((array)=>{
                    if (categoria !== undefined){
                        array = array.filter((obj) => obj.clase === categoria) 
                    }
                    setProductos(array)
                    setCarga(true)
                })
                .catch((error) =>{
                    console.log(error)
                })

   },[categoria])

   return (
        <div>
            {carga ? <ItemList productos={productos}/> : 'Cargando...'}
        </div>
   )

}

export default ItemListContainer