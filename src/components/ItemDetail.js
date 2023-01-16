import { Container,Col,Row,Button } from 'react-bootstrap'
import Placeholder from '../assets/images/Poke Ball.webp'

const ItemDetail = ({producto}) => {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <img src={Placeholder} className='imgDetail' alt='placeholder'/>
                </Col>
                <Col sm={8}>
                    <Row>
                        {producto.nombre}
                    </Row>
                    <Row>
                        clase: {producto.clase}
                    </Row>
                    <Row>
                        {producto.descripcion}
                    </Row>
                    <Row>
                        ${producto.precio}
                    </Row>
                    <Row>
                        <Button variant='primary'>Comprar</Button>
                    </Row>
                </Col>
            </Row>
      </Container>
    )
}

export default ItemDetail