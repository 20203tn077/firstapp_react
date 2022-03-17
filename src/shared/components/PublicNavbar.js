import { Button } from 'bootstrap'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from '../../assets/img/marketplace.png'

export const PublicNavbar = () => {
    const navigation = useNavigate()

    const handleLogin = () => {
        navigation('auth')
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <FeatherIcon icon="home" /></Navbar.Brand>
                <Nav className="me-auto">
                    <Link className='nav-link' to={'/'}>Inicio</Link>
                    <Link className='nav-link' to={'/contact'}>Contacto</Link>
                </Nav>
                <Button
                    variant='outline-light'
                    onClick={handleLogin}
                >Iniciar sesión</Button>
            </Container>
        </Navbar>
    )
}
