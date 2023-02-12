import { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useContexto } from '../CustomProvider'

const ItemCount = ({item,location}) => {
    
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

    let btnCount
    let btnMain
    if (location === 'main'){
       btnCount = 'btnCountMain'
       btnMain = 'btnAddMain'
    } else {
       btnCount = 'btnCountDetail'
       btnMain = 'btnAddDetail'
    }


    return(
        <>
        <Row className={btnCount}>
            <Col>
                <Button onClick={handleSuma} variant='outline-light'>+</Button>
                <span>{contador}</span>
                <Button onClick={handleResta} variant='outline-light'>-</Button>
            </Col>
        </Row>
        <Row className={btnMain}>
            <Col>
                <Button onClick={handleCounter} variant='success'>Agregar al carrito</Button>
            </Col>
        </Row>
        </>
    )
}

export default ItemCount