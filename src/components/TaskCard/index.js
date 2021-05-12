import React from 'react'

import { Button, Card, Col, Row } from 'react-bootstrap';

import EditIcon from '@material-ui/icons/Edit';


function TaskCard({data}) {
    return (
        <Card className="my-1">
            <Card.Body>
                <Row className="d-flex justify-content-between align-middle">
                    <Col>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onChange={(e)=>{
                                console.log(e);
                            }} defaultChecked={data.done}/>
                            <label className="form-check-label" >
                                {data.title}
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
