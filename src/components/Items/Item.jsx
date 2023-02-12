import { Link } from 'react-router-dom'
import { Col,Card,Button } from 'react-bootstrap'
import ItemCount from './ItemCount'

const Item = ({item}) => {
    return (
        <Col>
            <Card border='secondary' text='center' className='marginCard' key={item.id}>
                <Card.Img variant='top' src={item.imagen} className='imgSize bgCard' alt={item.nombre}/>
                <Card.Body className='bgCard'>
                    <Card.Title className='fontTitle'>{item.nombre}</Card.Title>
                    <Card.Text>${item.precio}</Card.Text>
                    <ItemCount item={item} location='main'/>
                    <Button as={Link} to={'/item/'+item.id} variant='info'>Detalles del producto</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item