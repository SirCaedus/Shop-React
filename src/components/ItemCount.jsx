import { useState } from 'react'
import { Row, Button } from 'react-bootstrap'
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
            <Button onClick={handleResta} variant='light'>-</Button>
            <span>{contador}</span>
            <Button onClick={handleSuma} variant='light'>+</Button>
        </Row>
        <Row>
            <Button onClick={handleCounter} variant='primary'>Agregar al carrito</Button>
        </Row>
        </>
    )
}

export default ItemCount