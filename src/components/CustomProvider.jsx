import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'

const contexto = createContext()
const Provider = contexto.Provider

export const useContexto = () => {
    const valorDelContexto = useContext(contexto)
    return valorDelContexto
}

const CustomProvider = ({children}) => {
    const [carrito,setCarrito] = useState([])
    const [totalProductos,setTotalProductos] = useState(0)

    const agregarProducto = (contador,item) => {
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
        const nombre = '¡Agregaste '+ item.nombre + ' al carrito!'
        toast.success(nombre,{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

    const eliminarProducto = (id) => {
        const copy = [...carrito]
        const index = copy.find((item) => item.id === id)
        setTotalProductos(totalProductos - index.cantidad)
        setCarrito(copy.filter((i) => i.id !== id))
        toast.warning('¡Eliminaste el objeto del carrito!',{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

    const vaciarCarrito = () => {
        setCarrito([])
        setTotalProductos(0)
    }

    const totalCarrito = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0)

    const valorDelContexto = {
        carrito: carrito,
        totalProductos: totalProductos,
        setTotalProductos: setTotalProductos,
        agregarProducto: agregarProducto,
        eliminarProducto: eliminarProducto,
        vaciarCarrito: vaciarCarrito,
        totalCarrito: totalCarrito
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider