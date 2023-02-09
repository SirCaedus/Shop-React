import { createContext, useContext, useState } from 'react'

const contexto = createContext()
const Provider = contexto.Provider

export const useContexto = () => {
    const valorDelContexto = useContext(contexto)
    return valorDelContexto
}

const CustomProvider = ({children}) => {
    const [carrito,setCarrito] = useState([])
    const [totalProductos,setTotalProductos] = useState(0)

    const clickAdd = (contador,id) => {
        agregarProducto(contador,id)
    }

    const agregarProducto = (contador,item) =>{
        const copy = carrito.map(producto => {
            if (producto.id === item.id){
                return {...producto, cantidad: producto.cantidad + contador}
            }
            return producto
        })

        if (!copy.some(prod => prod.id === item.id)) {
            copy.push({id: item.id,imagen: item.imagen, nombre: item.nombre, precio: item.precio, cantidad: contador})
        }

        setCarrito(copy)
        setTotalProductos(totalProductos + contador)
    }

    
    const eliminarProducto = (id) => {
        const copy = [...carrito]
        const index = copy.find((item) => item.id === id)
        setTotalProductos(totalProductos - index.cantidad)
        setCarrito(copy.filter((i) => i.id !== id))
    }

    const vaciarCarrito = () =>{
        setCarrito([])
        setTotalProductos(0)
    }

    const valorDelContexto = {
        carrito: carrito,
        totalProductos: totalProductos,
        setTotalProductos: setTotalProductos,
        clickAdd: clickAdd,
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