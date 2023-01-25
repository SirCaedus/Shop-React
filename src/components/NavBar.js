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
                        <Nav.Link as={NavLink} to="/category/Botas" className='btnNav'>
                            <img src={Ball} alt='imagen botas'></img>
                            Botas
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/category/Peleador" className='btnNav'>
                            <img src={Meds} alt='imagen peleador'></img>
                            Peleador                         
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/category/Tirador" className='btnNav'>
                            <img src={Meds} alt='imagen tirador'></img>
                            Tirador                           
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/category/Asesino" className='btnNav'>
                            <img src={Meds} alt='imagen asesino'></img>
                            Asesino                          
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/category/Mago" className='btnNav'>
                            <img src={Meds} alt='imagen mago'></img>
                            Mago                          
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/category/Tanque" className='btnNav'>
                            <img src={Meds} alt='imagen tanque'></img>
                            Tanque                          
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/category/Soporte" className='btnNav'>
                            <img src={Meds} alt='imagen supp'></img>
                            Soporte                           
                        </Nav.Link>
                    </Nav>
                </Col>
                <CartWidget/>
            </Container>
        </Navbar>  
    )
}

export default NavBar