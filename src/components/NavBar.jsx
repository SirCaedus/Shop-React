import {Container,Col,Navbar,Nav} from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import Ball from '../assets/images/ball_icon.png'
import Meds from '../assets/images/med_icon.png'
import CartWidget from './CartWidget'

const NavBar = () => { 

    const linkData = [
        {path: '/category/Botas', nombre: 'Botas', imgSrc: Ball, altText: 'imagen botas'},
        {path: '/category/Peleador', nombre: 'Peleador', imgSrc: Meds, altText: 'imagen peleador'},
        {path: '/category/Tirador', nombre: 'Tirador', imgSrc: Meds, altText: 'imagen tirador'},
        {path: '/category/Asesino', nombre: 'Asesino', imgSrc: Meds, altText: 'imagen asesino'},
        {path: '/category/Mago', nombre: 'Mago', imgSrc: Meds, altText: 'imagen mago'},
        {path: '/category/Tanque', nombre: 'Tanque', imgSrc: Meds, altText: 'imagen tanque'},
        {path: '/category/Soporte', nombre: 'Soporte', imgSrc: Meds, altText: 'imagen supp'},
      ]

    return(
        <Navbar sticky="top" bg="primary" variant="dark">
            <Container fluid display='flex'>
                <Col>
                    <Navbar.Brand as={Link} to="/"><img src={Logo} alt='logo' className='logo'></img></Navbar.Brand>
                </Col>
                <Col>
                    <Nav classnombre='justify-content-center align-items-center'>
                        {linkData.map(({path, nombre, imgSrc, altText}) => (
                            <Nav.Link as={NavLink} to={path} className='btnNav' key={path}>
                                <img src={imgSrc} alt={altText}/>{nombre}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Col>
                <CartWidget/>
            </Container>
        </Navbar>  
    )
}

export default NavBar;