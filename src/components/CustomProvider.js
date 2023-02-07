import { createContext, useContext, useState } from 'react'

const contexto = createContext()
const Provider = contexto.Provider

export const useCarrito = () => {
    const valorDelContexto = useContext(contexto)
    return valorDelContexto
}

const CustomProvider = ({children}) => {
    const [carrito,setCarrito] = useState([])
    const [totalProductos,setTotalProductos] = useState(0)

    const agregarProducto = (contador,id) =>{
        const copy = [...carrito]
        if (copy.some(item => item.id === id)){
            for (const productos of copy) {
                if (productos.id === id){
                    productos.cantidad += contador
                }
            }
        } else {
            copy.push({id: id, cantidad: contador})
        }  
        console.log(copy)
        setCarrito(copy)
        setTotalProductos(totalProductos + contador)
    }
    
    const eliminarProducto = () => {

    }

    const vaciarCarrito = () =>{
        setCarrito([])
    }

    const valorDelContexto = {
        carrito: carrito,
        totalProductos: totalProductos,
        setTotalProductos: setTotalProductos,
        agregarProducto: agregarProducto,
        eliminarProducto: eliminarProducto,
        vaciarCarrito: vaciarCarrito
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider