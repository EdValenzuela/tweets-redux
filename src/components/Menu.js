import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'
import LogoRedux from '../assets/img/redux.png'

const Menu = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>
                    <img 
                        alt="Tweets simulator redux"
                        src={LogoRedux}
                        width="30"
                        height="30"
                        className="d-inline-block aling-top mr-4"
                    />
                    Tweets simulator Redux
                </Navbar.Brand>
                <Button variant='outline-success'>
                    Nuevo tweet
                </Button>
            </Container>
        </Navbar>
    )
}

export default Menu
