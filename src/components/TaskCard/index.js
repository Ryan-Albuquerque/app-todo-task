import React from 'react'

import { Button, Card, Col, Row } from 'react-bootstrap';

import EditIcon from '@material-ui/icons/Edit';


function TaskCard() {
    return (
        <Card className="my-1">
            <Card.Body>
                <Row className="d-flex justify-content-between align-middle">
                    <Col>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Estudar React
                            </label>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button className="py-0 border-0 bg-body text-dark">
                            <EditIcon/>
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default TaskCard;
