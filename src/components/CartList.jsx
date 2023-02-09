import { Container, Row } from 'react-bootstrap'

const CartList = ({productos}) => {
    return(
        <Container fluid>
            <Row xl={4}>
                {productos.map((item) => {
                    return (
                        productos.id
                    )
                })}
            </Row>      
        </Container>
    )
}




export default CartList