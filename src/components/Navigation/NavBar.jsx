import {Container, Col, Navbar, Nav, Offcanvas } from 'react-bootstrap'
import { Link,NavLink } from 'react-router-dom'
import Logo from '../../assets/images/lolshop.png'
import BotasPic from '../../assets/images/botas.png'
import TiradorPic from '../../assets/images/tirador.png'
import PeleadorPic from '../../assets/images/peleador.png'
import AsesinoPic from '../../assets/images/asesino.png'
import MagoPic from '../../assets/images/mago.png'
import TanquePic from '../../assets/images/tanque.png'
import SoportePic from '../../assets/images/soporte.png'
import CartWidget from '../Cart/CartWidget'

const NavBar = () => { 

    const linkData = [
        {path: '/category/Botas', nombre: 'Botas', imgSrc: BotasPic, altText: 'imagen botas'},
        {path: '/category/Peleador', nombre: 'Peleador', imgSrc: PeleadorPic, altText: 'imagen peleador'},
        {path: '/category/Tirador', nombre: 'Tirador', imgSrc: TiradorPic, altText: 'imagen tirador'},
        {path: '/category/Asesino', nombre: 'Asesino', imgSrc: AsesinoPic, altText: 'imagen asesino'},
        {path: '/category/Mago', nombre: 'Mago', imgSrc: MagoPic, altText: 'imagen mago'},
        {path: '/category/Tanque', nombre: 'Tanque', imgSrc: TanquePic, altText: 'imagen tanque'},
        {path: '/category/Soporte', nombre: 'Soporte', imgSrc: SoportePic, altText: 'imagen supp'},
    ]

    return(
        <Navbar expand='lg' sticky='top' bg='customDark' variant='dark' className='fontWhite'>
            <Container fluid display='flex'>
                <Col>
                    <Navbar.Brand as={Link} to='/'><img src={Logo} alt='logo' className='logo'></img></Navbar.Brand>
                </Col>
                <Navbar.Toggle aria-controls='menuCollapse'/>
                <Navbar.Offcanvas id='menuCollapse' placement='top'>
                    <Offcanvas.Header closeButton closeVariant='white' className='customDark'>
                        <Offcanvas.Title>Categorías</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='scrollBar'>
                        <Col>
                            <Nav className='navAlign'>
                                {linkData.map(({path, nombre, imgSrc, altText}) => (
                                    <Nav.Link as={NavLink} to={path} className='btnNav' key={nombre}>
                                        <img src={imgSrc} alt={altText}/>{nombre}
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </Col>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <CartWidget/>
            </Container>
        </Navbar>  
    )
}

export default NavBar