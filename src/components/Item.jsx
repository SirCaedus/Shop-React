import { Link } from 'react-router-dom'
import { Col,Card,Button } from 'react-bootstrap'
import { useContexto } from './CustomProvider'
import ItemCount from './ItemCount'

const Item = ({item}) => {
    const {clickAdd} = useContexto()
    return (
        <Col>
            <Card border='secondary' text='center' className='marginCard' key={item.id}>
                <Card.Img variant='top' src={item.imagen} className='imgSize bgMain' alt={item.nombre}/>
                <Card.Body className='bgMain'>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>${item.precio}</Card.Text>
                    <ItemCount clickAdd={clickAdd} item={item}/>
                    <Button as={Link} to={'/item/'+item.id} variant='info'>Detalles del producto</Button>
                </Card.Body>
               {/* <Card.Footer  bg='transparent' border='secondary'>
                    <ItemCount clickAdd={clickAdd} item={item}/>
                    <Button as={Link} to={'/item/'+item.id} variant='info'>Detalles del producto</Button>
                </Card.Footer>*/}
            </Card>
        </Col>
    )
}

export default Item