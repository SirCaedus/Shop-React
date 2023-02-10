import { useState} from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { useContexto } from './CustomProvider'
import CartCheckout from './CartCheckout'

const CartList = () => {
    const {carrito, eliminarProducto, vaciarCarrito} = useContexto()
    const [showCheckout, setShowCheckout] = useState(false)
    const handleClick = id => () => eliminarProducto(id)
    const handleCheckoutClick = () => setShowCheckout(true)
    const totalPrecio = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0)

    return(
        <Container>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>precio</Col>
                    <Col>cantidad</Col>
                    <Col>Borrar</Col>
                </Row>
                {carrito.map((item) =>{
                    return(
                        <Row key={item.id}>
                            <Col><img src={item.imagen} className='imgCart' alt={item.nombre}/></Col>
                            <Col>{item.nombre}</Col>
                            <Col>${item.precio} c/u</Col>
                            <Col>{item.cantidad}</Col>
                            <Col><Button onClick={handleClick(item.id)}variant='danger'>🗑️</Button></Col>
                        </Row>
                )})}
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>Total: ${totalPrecio}</Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Button onClick={vaciarCarrito} variant='danger'>vaciar</Button>
                    <Button onClick={handleCheckoutClick}>comprar</Button>
                </Row>
                {showCheckout && <CartCheckout/>}  
        </Container>
    )
}

export default CartList