import { Container,Row } from 'react-bootstrap'
import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <Container fluid>
            <Row xl={4}>
                {productos.map((producto) => {
                    return (
                        <Item producto={producto} key={producto.id}/>
                    )
                })}
            </Row>
        </Container>
    )
}

export default ItemList