import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

import api, { getErrorMessage } from '../../services/api';
import Notification from '../../utils/Notification'
import Constants from '../../utils/constants'

import { Button, Card, Col, Row } from 'react-bootstrap';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


function TaskCard({data}) {
    let history = useHistory();
    const [task, setTask] = useState(data);

    const handleChangeStatus = async (e) =>{
        setTask({...task, done: e.target.checked})

        try {
            await api.patch(`/task/${task._id}`, {done: e.target.checked})

            Notification(Constants.Notification.types.success, 'Atualizado');
        } catch (error) {
            const message = getErrorMessage(error);

            Notification(Constants.Notification.types.error, message);
        }
    }

    const handleClick = () =>{
        history.push(`/edit/${data._id}`)
    }

    const handleDelete = async () =>{
        try {
            await api.delete(`/task/${task._id}`)

            Notification(Constants.Notification.types.success, 'Deletado com sucesso!');

            setTimeout(() => {
                history.go(0);
            }, 2000);

        } catch (error) {
            const message = getErrorMessage(error);

            Notification(Constants.Notification.types.error, message);
        }
    }

    return (
        <Card className="my-1">
            <Card.Body>
                <Row className="d-flex justify-content-between align-middle">
                    <Col>
                        <div className="form-check">
                            <input className="form-check-input" 
                            checked={task.done} 
                            type="checkbox" 
                            onChange={handleChangeStatus}/>
                            <label className="form-check-label" >
                                {task.title}
                            </label>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button className="p-0 border-0 bg-body text-dark" onClick={handleClick}>
                            <EditIcon/>
                        </Button>
                        <Button  className="py-0 border-0 bg-body text-dark" onClick={handleDelete}>
                            <DeleteIcon/>
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default TaskCard;
