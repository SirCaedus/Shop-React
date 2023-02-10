import { Container, Col, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { useContexto } from './CustomProvider'


const EndCheckout = ({formData}) => {

    const {carrito,vaciarCarrito,totalCarrito} = useContexto() 

    const randomId = () => {
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < 10; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * characters.length))
       }
       return result
    }

    useEffect(() => {
        return() => {vaciarCarrito()}
    })

    return(
        <Container>
            <Row>
                <h2>¡Su compra se ha realizado con éxito!</h2>
                <h3>Le enviamos un correo electrónico con toda la información.</h3>
            </Row>
            <Row>
                <h3>Resumen de su compra:</h3>
                <div>ID: {randomId()}</div>
                <div>NOMBRE: {formData.nombre}</div>
                <div>APELLIDO: {formData.apellido}</div>
                <div>TELEFONO: {formData.telefono}</div>
                <div>EMAIL: {formData.email}</div>
            </Row>
            <Row>
                <Col></Col>
                <Col>cantidad</Col>
                <Col>precio</Col>
            </Row>
            {carrito.map((item) =>{
                    return(
                        <Row key={item.id}>
                            <Col>{item.nombre}</Col>
                            <Col>{item.cantidad}</Col>
                            <Col>${item.precio} c/u</Col>
                        </Row>
                )})}
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>Total: ${totalCarrito}</Col>
            </Row>
        </Container>
    )
}

export default EndCheckout