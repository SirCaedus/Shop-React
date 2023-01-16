import { Link } from 'react-router-dom'
import { Col,Card,Button } from 'react-bootstrap'
import Placeholder from '../assets/images/Poke Ball.webp'

const Item = ({producto}) => {
    return (
        <Col>
            <Card h={100} border='info' text='center' className='marginCard' key={producto.id}>
                <Card.Img variant='top' src={Placeholder} className='imgSize' alt='placeholder'/>
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>${producto.precio}</Card.Text>
                </Card.Body>
                <Card.Footer bg='transparent' border='info'>
                    <Button as={Link} to={'/item/'+producto.id} variant='primary'>ver mas</Button>
                </Card.Footer>
            </Card>
        </Col>

    )
}

export default Item