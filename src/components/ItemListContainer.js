import { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import Stock from './data.json'



const ItemListContainer = () => {

    const {categoria,id} = useParams()
    const [carga,setCarga] = useState()
    const [productos,setProductos] = useState([])
    useEffect( () =>{

        const stock = fetch(Stock)

            stock
                .then((respuesta) =>{
                    const productos = Stock
                    return productos
                })
                .then((productos)=>{
                    if ((categoria === 'Ball') || (categoria === 'Med')){
                        productos = productos.filter((obj) => obj.clase === categoria) 
                    }
                    setProductos(productos)
                    setCarga(true)
                })
                .catch((error) =>{
                    console.log(error)
                })



   },[categoria])

   return (
        <div>
            {carga ? 'CARGADOS' : 'Cargando...'}
            <ItemList productos={productos}/>
        </div>
   )


}

export default ItemListContainer