import React from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap';

import AddIcon from '@material-ui/icons/Add';

import TaskCard from '../TaskCard';

function ListTask (){
    return (
        <Container className="my-3">
            <Row>
                <Col className="d-flex justify-content-end">
                    <Button className="d-flex align-middle" variant="success">
                        <AddIcon />
                        Nova Task
                    </Button>
                </Col>
            </Row>

            <Row>
                <Container className="bg-light border border-light border-4 rounded my-3 p-3 ">
                    <TaskCard />
                </Container>
            </Row>
        </Container>
    )
}

export default ListTask;