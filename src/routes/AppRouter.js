import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/auth/authContext'
import img from '../assets/img/marketplace.png'
import { ProductHome } from '../components/home/ProductHome'
import { Button } from 'bootstrap'
import { PublicNavbar } from '../shared/components/PublicNavbar'

export const AppRouter = () => {
    const { user } = useContext(AuthContext)

    return (
        <Router>
            <Routes>

                <Route
                    path='/auth' element={<LoginScreen />}
                />
                <Route
                    path='*' element={
                        user.logged ? (
                            <>
                                <Navbar bg="primary" variant="dark">

                                    <Container fluid>
                                        <Navbar.Brand href="#home">
                                            <FeatherIcon icon="home" /></Navbar.Brand>
                                        <Nav className="me-auto">
                                            <Link className='nav-link' to={'/'}>Category</Link>
                                            <Link className='nav-link' to={'/subcategory'}>Subcategory</Link>
                                        </Nav>
                                    </Container>
                                </Navbar>
                                <Container>
                                    <Route
                                        path='/' element={<CategoryScreen />}
                                    />
                                    <Route
                                        path='/category' element={<SubcategoryScreen />}
                                    />
                                    <Route
                                        path='/subcategory' element={<SubcategoryScreen />}
                                    />
                                    <Route
                                        path='*' element={<SubcategoryScreen />}
                                    />
                                </Container>
                            </>
                        ) : (
                            <>
                                <PublicNavbar />
                                <Container>
                                    <Route
                                        path='/products' element={<ProductsHome />}
                                    />
                                    <Route
                                        path='/contact' element={<ContactScreen />}
                                    />
                                    <Route
                                        path='/home' element={<ProductHome />}
                                    />
                                    <Route
                                        path='/' element={<ProductHome />}
                                    />
                                    <Route
                                        path='*' element={<div>Error 404</div>}
                                    />
                                </Container>
                            </>
                        )
                    }
                />
            </Routes>
        </Router>
    )
}
