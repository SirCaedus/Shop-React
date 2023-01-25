import { Container,Col,Row,Button } from 'react-bootstrap'

const ItemDetail = ({item}) => {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <img src={item.imagen} className='imgDetail' alt={item.nombre}/>
                </Col>
                <Col sm={8}>
                    <Row>
                        <h2>{item.nombre}</h2>
                    </Row>
                    <Row>
                        clase: {item.clase}
                    </Row>
                    <Row>
                        {item.descripcion}
                    </Row>
                    <Row>
                        ${item.precio}
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