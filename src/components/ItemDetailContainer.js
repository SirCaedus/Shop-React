import { Container,Col,Row,Button } from 'react-bootstrap'
import Placeholder from '../assets/images/Poke Ball.webp'

const ItemDetailContainer = ({productos}) => {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <img src={productos.imagen} className='imgDetail' alt={productos.nombre}/>
                </Col>
                <Col sm={8}>
                    <Row>
                        <h2>{productos.nombre}</h2>
                    </Row>
                    <Row>
                        clase: {productos.clase}
                    </Row>
                    <Row>
                        {productos.descripcion}
                    </Row>
                    <Row>
                        ${productos.precio}
                    </Row>
                    <Row>
                        <Button variant='primary'>Comprar</Button>
                    </Row>
                </Col>
            </Row>
      </Container>
    )
}

export default ItemDetailContainer