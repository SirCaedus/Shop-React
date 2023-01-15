import { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import Stock from './data.json'



const ItemListContainer = () => {

    const {categoria} = useParams()
    const [carga,setCarga] = useState(false)
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
                    console.log('holi')
                    productos = productos.filter((obj) => obj.clase === categoria) 
                }
                console.log(productos)
                setProductos(productos)
                setCarga(true)
            })
            .catch((error) =>{
                console.log('f')
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