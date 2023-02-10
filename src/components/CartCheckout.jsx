import { useState } from 'react'
import { Form, Button, Container, Col, Row} from 'react-bootstrap'
import EndCheckout from './EndCheckout'

const CartCheckout = () => {
    const [validated,setValidated] = useState(false)
    const [showCheckout,setShowCheckout] = useState(false)

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        confirmEmail: '',
    })
    
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()

        } else {
            event.preventDefault()
            setShowCheckout(true)
        }
        setValidated(true)      
    }
    
    return (
    <Container>
        {showCheckout ? (<EndCheckout formData={formData}/>) 
        : (
            <Row className='justify-content-md-center'>
            <Col xs={6}>
                <div>Por favor, ingrese sus datos para poder confirmar su compra.</div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId='formNombre'>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Ingresa tu nombre'
                            name='nombre'
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type='invalid'>
                            Por favor, ingresa tu nombre
                        </Form.Control.Feedback>
                    </Form.Group>
        
                    <Form.Group controlId='formApellido'>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Ingresa tu apellido'
                            name='apellido'
                            value={formData.apellido}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type='invalid'>
                            Por favor, ingresa tu apellido
                        </Form.Control.Feedback>                    
                    </Form.Group>
        
                    <Form.Group controlId='formTelefono'>
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            required
                            type='number'
                            placeholder='Ingresa tu número de teléfono'
                            name='telefono'
                            value={formData.telefono}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type='invalid'>
                            Por favor, ingresa un teléfono válido
                        </Form.Control.Feedback>
                    </Form.Group>
        
                    <Form.Group controlId='formEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='Ingresa tu dirección de email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type='invalid'>
                            Por favor, ingresa un Email válido
                        </Form.Control.Feedback>
                    </Form.Group>
        
                    <Form.Group controlId='formConfirmEmail'>
                        <Form.Label>Confirmación de Email</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='Confirma tu dirección de email'
                            name='confirmEmail'
                            value={formData.confirmEmail}
                            pattern={formData.email}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type='invalid'>
                            Por favor, ingresa el mismo Email para confirmar.
                        </Form.Control.Feedback>
                    </Form.Group>
        
                    <Button variant='primary' type='submit'>
                    Enviar
                    </Button>
                </Form>
            </Col>
            </Row>
        )}
    </Container>
    )
}


export default CartCheckout
