import { useState } from 'react'
import { Row, Button,Col } from 'react-bootstrap'
import { useContexto } from './CustomProvider'

const ItemCount = ({item}) => {
    const {agregarProducto} = useContexto()

    const [contador,setContador] = useState(1)

    const handleSuma = () => {
        if (contador < 20){
            setContador(contador + 1)
        }
    }

    const handleResta = () => {
        if (contador > 1){
            setContador(contador - 1)
        }
    }
    
    const handleCounter = () => {
        agregarProducto(contador,item)
    }

    return(
        <>
        <Row>
            <Col>
                <Button onClick={handleSuma} variant='outline-light' className='btnCount'>+</Button>
            </Col>
            <Col>
                <span>{contador}</span>
            </Col>
            <Col>
                <Button onClick={handleResta} variant='outline-light' className='btnCount'>-</Button>
            </Col>
        </Row>
        <Row>
            <Button onClick={handleCounter} variant='success'>Agregar al carrito</Button>
        </Row>
        </>
    )
}

export default ItemCount