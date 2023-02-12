import { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import { useContexto } from '../CustomProvider'
import CartList from './CartList'

const CartContainer = () => {
    
    const {carrito} = useContexto()
    const [carritoEmpty,setCarritoEmpty] = useState(true)

    useEffect( () =>{
        carrito.length === 0 ? setCarritoEmpty(true) : setCarritoEmpty(false)
    },[carrito])

    return (
        <>
        {carritoEmpty ? <Container className='loadingPages'>¡Ups! parece que no hay nada en el carrito.</Container> : <CartList/>}
        </>
    )
}


export default CartContainer