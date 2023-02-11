import { Link } from 'react-router-dom'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { useContexto } from './CustomProvider'
import Trash from '../assets/images/trash.png'

const CartList = () => {
    const {carrito, eliminarProducto, vaciarCarrito, totalCarrito} = useContexto()
    const handleClick = id => () => eliminarProducto(id)

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
                            <Col>{item.cantidad}</Col>
                            <Col>${item.precio} c/u</Col>
                            <Col><Button onClick={handleClick(item.id)}variant='danger'><img src={Trash} alt='a'></img></Button></Col>
                        </Row>
                )})}
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>Total: ${totalCarrito}</Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Button onClick={vaciarCarrito} variant='danger'>Vaciar</Button>
                    <Button as={Link} to='/checkout'>Comprar</Button>
                </Row> 
        </Container>
    )
}
  
export default CartList