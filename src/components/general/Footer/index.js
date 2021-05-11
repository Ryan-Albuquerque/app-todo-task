import {React} from 'react';
import { Container } from 'react-bootstrap';

import './style.css';

function Footer (){
    return (
        <Container fluid className="d-flex py-2 justify-content-center bg-dark footer">
            <h5 className="text-white">ToDo Task @ Ryan</h5>
        </Container>
    )
}

export default Footer;