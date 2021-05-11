import React from 'react'
import {Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png'

function Header(){
    return (
        <Container fluid className="d-flex justify-content-center bg-dark py-2">
            <Link to="/">
                <Image src={logoImg} width={50}/>
            </Link>
        </Container>
    )
}

export default Header;