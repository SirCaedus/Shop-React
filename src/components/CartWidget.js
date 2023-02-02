import { Col,Nav } from 'react-bootstrap'
import Cart from '../assets/images/carrito.png'

const CartWidget = () => {
    return(
        <Col  className='justify-content-end d-flex'>
            <Nav.Link as={NavLink} to='/cart'>
                <span>0</span>
                <img src={Cart} alt='imagen Carrito'/>
            </Nav.Link>
        </Col>
    )
}

export default CartWidget