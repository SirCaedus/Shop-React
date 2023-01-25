import { Link } from 'react-router-dom'
import { Col,Card,Button } from 'react-bootstrap'

const Item = ({item}) => {
    return (
        <Col>
            <Card h={100} border='info' text='center' className='marginCard' key={item.id}>
                <Card.Img variant='top' src={item.imagen} className='imgSize' alt='placeholder'/>
                <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>${item.precio}</Card.Text>
                </Card.Body>
                <Card.Footer bg='transparent' border='info'>
                    <Button as={Link} to={'/item/'+item.id} variant='primary'>ver mas</Button>
                </Card.Footer>
            </Card>
        </Col>

    )
}

export default Item