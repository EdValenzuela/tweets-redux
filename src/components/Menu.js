import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { openCloseAddTweetModalAction } from '../actions/modalsActions'
import LogoRedux from '../assets/img/redux.png'

const Menu = () => {

    //Dispatch para ejecutar nuestras acciones
    const dispatch = useDispatch();
    const openCloseAddTweetModal = state => dispatch(openCloseAddTweetModalAction(state));

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
                <Button variant='success' onClick={()=>openCloseAddTweetModal(true)}>
                    Nuevo tweet
                </Button>
            </Container>
        </Navbar>
    )
}

export default Menu
