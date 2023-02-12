import { Container, Row } from 'react-bootstrap'
import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <Container fluid>
            <Row xs={2} md={3} xl={4} className='g-4'>
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