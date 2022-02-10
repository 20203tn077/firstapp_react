import React from 'react';
import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import DataTable from 'react-data-table-component';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CategoryScreen } from './components/category/CategoryScreen';
import { SubcategoryScreen} from './components/subcategory/SubcategoryScreen';
export const App = () => {
  return (
    <Router>
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
        <Routes>
          <Route
            path='/' element={<CategoryScreen/>}
          />
          <Route
            path='/subcategory' element={<SubcategoryScreen/>}
          />
        </Routes>
      </Container>
    </Router>
  )
}
