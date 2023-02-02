import { Container, Row } from 'react-bootstrap'
import Item from './Item.js'

const ItemList = ({productos}) => {
    return (
        <Container fluid>
            <Row xl={4}>
                {productos.map((item) => {
                    return (
                        <Item item={item} key={item.id}/>
                    )
                })}
            </Row>
        </Container>
    )
}

export default ItemList