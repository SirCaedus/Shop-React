import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Stock from './datalol'

const ItemListContainer = () => {

    const {categoria} = useParams()
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
            {carga ? <ItemList productos={productos}/> : 'Cargando...'}
        </div>
   )

}

export default ItemListContainer