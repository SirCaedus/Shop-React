import { useState } from 'react'
import { Row, Button } from 'react-bootstrap'

const ItemCount = ({clickAdd,item}) => {
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
        clickAdd(contador,item)
    }

    return(
        <>
        <Row>
            <Button onClick={handleResta} variant='light'>-</Button>
            <span>{contador}</span>
            <Button onClick={handleSuma} variant='light'>+</Button>
        </Row>
        <Row>
            <Button onClick={handleCounter} variant='primary'>Comprar</Button>
        </Row>
        </>
    )
}

export default ItemCount