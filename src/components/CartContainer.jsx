//import { useEffect } from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
import { useContexto } from './CustomProvider'

const CartContainer = () => {
    const {carrito, eliminarProducto,vaciarCarrito} = useContexto()

    const handleClick = id => () => eliminarProducto(id)
   /* useEffect( () => {
  


    }) */
    return (
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
                <Row><Button onClick={vaciarCarrito} variant='danger'>vaciar</Button></Row>  
        </Container>
    )
}


export default CartContainer