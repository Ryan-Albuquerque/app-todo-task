import {React} from 'react';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function ListTask (){
    return (
        <Container className="my-3">
            <Row>
                <Col className="d-flex justify-content-end">
                    <Button variant="success">
                        Nova Task
                    </Button>
                </Col>
            </Row>

            <Row>
                <Container className="bg-light border border-light border-4 rounded my-3 p-3 ">
                    <Card className="my-1">
                        <Card.Body>
                            <Row className="d-flex justify-content-between align-middle">
                                <Col>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <Button className="py-0 border-0 bg-body text-dark">Edit</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="my-1">
                        <Card.Body>
                            <Row className="d-flex justify-content-between align-middle">
                                <Col>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <Button className="py-0 border-0 bg-body text-dark">Edit</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="my-1">
                        <Card.Body>
                            <Row className="d-flex justify-content-between align-middle">
                                <Col>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <Button className="py-0 border-0 bg-body text-dark">Edit</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </Row>
        </Container>
    )
}

export default ListTask;