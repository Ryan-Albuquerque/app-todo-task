import React, { useEffect, useState } from 'react'

import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import api, { getErrorMessage } from '../../services/api';
import Constants from '../../utils/constants';
import Notification from '../../utils/Notification';


function FormTask({props}) {
    console.log(props);
    const [task, setTask] = useState({})


    const getDate = () => {
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth()+1;
        var year = today.getFullYear();
      
        if(day<10) {
            day = '0'+day
        } 
      
        if(month<10) {
            month = '0'+month
        } 
      
        today = `${year}-${month}-${day}`;
        
        setTask({...task, targetDate: today})
    }

    const fecthData = async () =>{
        try {
            const response = await api.get(`/task/${props.match.params.id}`)

            setTask(response.data.task)
        } catch (error) {
            const message = getErrorMessage(error)

            Notification(Constants.Notification.types.error, message);
        }
    }

    const handleCreateTask = async (e) =>{
        e.preventDefault()
        try {
            task.priority = 3
            const response = await api.post('/task', task)

            setTimeout(() => {
                Notification(Constants.Notification.types.success, response.data.message);
            }, 2000);

            window.location.assign('/')
        } catch (error) {
            const message = getErrorMessage(error)

            Notification(Constants.Notification.types.error, message);
        }
    }

    useEffect(() => {
        getDate()

        if(!props.isNew){
            fecthData()
        }

    }, [])

    return (
        <Container className="my-4">
            <Form >  
                <Form.Group className="my-2">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Estudo do react" disabled={!props.isNew} onChange={(e)=>setTask({...task, title: e.target.value})} defaultValue={task.title}/>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Falar com algúem para ajudar" onChange={(e)=>setTask({...task, description: e.target.value})} disabled={!props.isNew} defaultValue={task.description}/>
                </Form.Group>
                <Form.Group as={Col} className="w-25">
                    <Form.Label>Prioridade</Form.Label>
                    <Form.Control as="select" disabled={!props.isNew} defaultValue={Constants.Priority.types[task.priority]}>
                        <option>Baixa</option>
                        <option>Média</option>
                        <option>Alta</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="my-2 w-25">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" placeholder="Ryan" onChange={(e)=>setTask({...task, author: e.target.value})} disabled={!props.isNew} defaultValue={task.author}/>
                </Form.Group>
                <Form.Group className="my-2 w-25">
                    <Form.Label>Data de entrega</Form.Label>
                    <input type="date" name="targetDate" disabled={!props.isNew} onChange={(e)=>setTask({...task, targetDate: e.target.value})} defaultValue={task.targetDate} />
                </Form.Group>
            </Form>
            <Row className="my-4">
                <Col className="d-flex justify-content-end">
                    <Button variant="success" onClick={handleCreateTask} type="submit">
                        Salvar
                    </Button>
                </Col>
            </Row>
        </Container>
        
    )
}

export default FormTask
