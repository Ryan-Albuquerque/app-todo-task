import React, { useEffect } from 'react'

import { Container, Form, Button, Row, Col } from 'react-bootstrap'


function FormTask({props}) {

    useEffect(() => {
        if(!props.isNew){
            
        }

    }, [])

    return (
        <Container className="my-4">
            <Form>  
                <Form.Group className="my-2" controlId="exampleForm.ControlInput1">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Estudo do react" />
                </Form.Group>
                <Form.Group className="my-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState" className="w-25">
                    <Form.Label>Prioridade</Form.Label>
                    <Form.Control as="select" defaultValue="Baixa">
                        <option>Baixa</option>
                        <option>Média</option>
                        <option>Alta</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="my-2 w-25" controlId="exampleForm.ControlInput1">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" placeholder="Ryan" />
                </Form.Group>
                <Form.Group className="my-2 w-25" controlId="exampleForm.ControlInput1">
                    <Form.Label>Data de entrega</Form.Label>
                    <input type="date" name="targetDate" defaultValue="new Date()"></input>
                </Form.Group>
            </Form>
            <Row className="my-4">
                <Col className="d-flex justify-content-end">
                    <Button variant="success" type="submit">
                        Salvar
                    </Button>
                </Col>
            </Row>
        </Container>
        
    )
}

export default FormTask
