import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';

import AddIcon from '@material-ui/icons/Add';

import api, { getErrorMessage } from '../../services/api';
import TaskCard from '../TaskCard';

import Notification from '../../utils/Notification'
import Constants from '../../utils/constants';

function ListTask (){
    let history = useHistory()

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {

        async function fetchData(){
            try {
                const response = await api.get('/tasks');

                setTaskList(response.data.tasks);
            } catch (error) {
                const message = getErrorMessage(error);
                Notification(Constants.Notification.types.error, message)
            }      
        }

        fetchData();
    }, [])

    const handleButton = () =>{
        history.push('/new')
    }
    return (
        <Container className="my-3 vh-100">
            <Row>
                <Col className="d-flex justify-content-end">
                    <Button className="d-flex align-middle" onClick={handleButton} variant="success">
                        <AddIcon />
                        Nova Task
                    </Button>
                </Col>
            </Row>

            <Row>
                <Container className="bg-light border border-light border-4 rounded my-3 p-3 ">
                    {taskList.map((task, index) =>
                        <TaskCard key={index} data={task} />
                    )}
                </Container>
            </Row>
        </Container>
    )
}

export default ListTask;