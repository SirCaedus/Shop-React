import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Cart from '../carrito.png'

const CartWidget = () => {
    return(
        <Col  className='justify-content-end d-flex'>
            <Nav.Link>
                <span>0</span>
                <img src={Cart} alt='imagen Carrito'/>
            </Nav.Link>
        </Col>
    )
}

export default CartWidget