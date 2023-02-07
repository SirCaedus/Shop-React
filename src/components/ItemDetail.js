import { Container,Col,Row} from 'react-bootstrap'
import { useCarrito } from './CustomProvider'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    const {agregarProducto} = useCarrito()

    const clickAdd = (contador,id) => {
        agregarProducto(contador,id)
    }

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
                    <ItemCount clickAdd={clickAdd} itemId={item.id}/>
                </Col>
            </Row>
      </Container>
    )
}

export default ItemDetail