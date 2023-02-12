import { Link } from 'react-router-dom'
import { Button, Container, Col, Row } from 'react-bootstrap'
import { useContexto } from '../CustomProvider'
import Trash from '../../assets/images/trash.png'

const CartList = () => {

    const {carrito, eliminarProducto, vaciarCarrito, totalCarrito} = useContexto()
    const handleClick = id => () => eliminarProducto(id)

    return(
        <Container className='paddingTop'>
            <Row className='detailAlign fontBold bgCard'>
                <Col></Col>
                <Col>Nombre</Col>
                <Col>Cantidad</Col>
                <Col>Precio</Col>
                <Col>Borrar</Col>
            </Row>
            {carrito.map((item) =>{
                return(
                    <Row key={item.id} className='cartAlign bgCard'>
                        <Col><img src={item.imagen} className='imgCart' alt={item.nombre}/></Col>
                        <Col>{item.nombre}</Col>
                        <Col>{item.cantidad}</Col>
                        <Col>${item.precio} c/u</Col>
                        <Col><Button onClick={handleClick(item.id)}variant='danger'><img src={Trash} alt='a'></img></Button></Col>                        </Row>
                    )})}
            <Row className='cartAlign'>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col>Total: ${totalCarrito}</Col>
                <Col className='btnCart'>
                    <Button as={Link} to='/checkout' variant='success'>Comprar</Button>
                    <Button onClick={vaciarCarrito} variant='danger'>Vaciar carrito</Button>
                </Col>
            </Row>
        </Container>
    )
}
  
export default CartList