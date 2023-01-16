import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import ItemDetailContainer from './ItemDetailContainer'
import Stock from './data'

const ItemListContainer = () => {

    const {categoria,id} = useParams()
    const [carga,setCarga] = useState()
    const [productos,setProductos] = useState([])

    useEffect( () => {
        const stock = fetch(Stock)

            stock
                .then((respuesta) =>{
                    const productos = Stock
                    return productos
                })
                .then((productos)=>{
                    if (categoria === undefined || id === undefined){
                        setCarga(true)
                    }

                    if (categoria === 'Ball' || categoria === 'Med'){
                        productos = productos.filter((obj) => obj.clase === categoria)
                        setCarga(true) 
                    }
                    if (id !== undefined){
                        productos = productos.find((obj) => obj.id === parseInt(id))
                        setCarga(false) 
                    }
                    
                    setProductos(productos)
                })
                .catch((error) =>{
                    console.log(error)
                })

   },[categoria,id])

   return (
        <div>
            {carga ? <ItemList productos={productos}/> : <ItemDetailContainer productos={productos}/>}
        </div>
   )

}

export default ItemListContainer