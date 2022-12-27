import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../logo.png'
import Ball from '../ball_icon.png'
import Meds from '../med_icon.png'
import CartWidget from './CartWidget'

const NavBar = () => { 
    return(
        <Navbar sticky="top" bg="primary" variant="dark">
            <Container fluid display='flex'>
                <Col>
                    <Navbar.Brand><img src={Logo} alt='logo' className='logo'></img></Navbar.Brand>
                </Col>
                <Col>
                    <Nav className='justify-content-center align-items-center'>
                        <Nav.Link href='#' className='btnNav'>
                            <img src={Ball} alt='imagen pokeball'></img>
                            Balls
                        </Nav.Link>
                        <Nav.Link href='#' className='btnNav'>
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

export default NavBar;