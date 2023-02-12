import { Container, Col, Row } from 'react-bootstrap'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    return (
        <Container className='paddingTop'>
            <Row className='bgCard'>
                <Col sm={4}>
                    <img src={item.imagen} className='imgDetail' alt={item.nombre}/>
                </Col>
                <Col sm={8} className='detailAlign'>
                    <Row>
                        <h1 className='fontTitle'>{item.nombre}</h1>
                    </Row>
                    <Row>
                        <h3 className='fontBold'>Clase: {item.clase}</h3>
                    </Row>
                    {item.descripcion.map((line) =>{
                        return(<Row key={line}>{line}</Row>)
                    })}
                    <Row>
                        <h3 className='fontBold'>Precio: ${item.precio}</h3>
                    </Row>
                    <ItemCount item={item} location='detail'/>
                </Col>
            </Row>
      </Container>
    )
}

export default ItemDetail