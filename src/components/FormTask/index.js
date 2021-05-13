import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import moment from 'moment';

import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import api, { getErrorMessage } from '../../services/api';
import Constants from '../../utils/constants';
import Notification from '../../utils/Notification';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';


function FormTask({props}) {
    
    let history = useHistory();
    const [task, setTask] = useState({});

    const handleCreateTask = async (e) =>{
        e.preventDefault();

        try {
            task.done = false;

            const response = await api.post('/task', task);

            Notification(Constants.Notification.types.success, response.data.message);

            setTimeout(() => {
                history.push('/');
            }, 2000);

        } catch (error) {
            const message = getErrorMessage(error)

            Notification(Constants.Notification.types.error, message);
        }
    }

    const handleBack = ()=>{
        history.push('/')
    }

    useEffect(() => {
        const fecthData = async () =>{
            try {
                const response = await api.get(`/task/${props.match.params.id}`);

                response.data.task.targetDate = moment(response.data.task.targetDate);

                let year = response.data.task.targetDate.year();
                let month = response.data.task.targetDate.month() + 1;
                let day = response.data.task.targetDate.date() + 1;

                if(day<10) {
                    day = '0'+day;
                } 
              
                if(month<10) {
                    month = '0'+month;
                } 

                response.data.task.targetDate = `${year}-${month}-${day}`

                setTask(response.data.task)
            } catch (error) {
                const message = getErrorMessage(error)
    
                Notification(Constants.Notification.types.error, message);
            }
        }

        const setInitalOptions = () => {
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
            
            setTask({targetDate: today, priority: 2})
        }

        setInitalOptions()


        if(!props.isNew){
            fecthData()
        }

    }, [props])

    return (
        <Container className="my-4">
            <Row className="mb-4">
                <Col>
                    <Button variant="primary" className="d-flex py-2" onClick={handleBack}>
                        <ArrowBackIcon/>
                        {'Voltar'}
                    </Button>
                </Col>
            </Row>
            <Form >  
                <Form.Group className="py-2">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Estudo do react" disabled={!props.isNew} onChange={(e)=>setTask({...task, title: e.target.value})} defaultValue={task.title}/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Falar com algúem para ajudar" onChange={(e)=>setTask({...task, description: e.target.value})} disabled={!props.isNew} defaultValue={task.description}/>
                </Form.Group>
                <Form.Group as={Col} className="py-2 w-25">
                    <Form.Label>Prioridade</Form.Label>
                    <Form.Control as="select" disabled={!props.isNew} defaultValue={2} onChange={(e)=>setTask({...task, priority:e.target.value})}>
                        <option value={1}>{Constants.Priority.types[1]}</option>
                        <option value={2}>{Constants.Priority.types[2]}</option>
                        <option value={3}>{Constants.Priority.types[3]}</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="py-2 w-25">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" placeholder="Ryan" onChange={(e)=>setTask({...task, author: e.target.value})} disabled={!props.isNew} defaultValue={task.author}/>
                </Form.Group>
                <Form.Group className="py-2 w-25">
                    <Form.Label>Data de entrega</Form.Label>
                    <input className="d-flex" type="date" name="targetDate" disabled={!props.isNew} onChange={(e)=>{
                        setTask({...task, targetDate: e.target.value})}} 
                        defaultValue={task.targetDate} />
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
