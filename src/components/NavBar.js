import { Container,Col,Navbar,Nav } from 'react-bootstrap'
import { Link,NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import Ball from '../assets/images/ball_icon.png'
import Meds from '../assets/images/med_icon.png'
import CartWidget from './CartWidget'

const NavBar = () => { 
    return(
        <Navbar sticky="top" bg="primary" variant="dark">
            <Container fluid display='flex'>
                <Col>
                    <Navbar.Brand as={Link} to="/"><img src={Logo} alt='logo' className='logo'></img></Navbar.Brand>
                </Col>
                <Col>
                    <Nav className='justify-content-center align-items-center'>
                        <Nav.Link as={NavLink} to="/category/Ball" className='btnNav'>
                            <img src={Ball} alt='imagen pokeball'></img>
                            Balls
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/category/Med" className='btnNav'>
                            <img src={Meds} alt='imagen meds'></img>
                            Medicinas                           
                        </Nav.Link>
                    </Nav>
                </Col>
                <CartWidget/>
            </Container>
        </Navbar>  
    )
}

export default NavBar