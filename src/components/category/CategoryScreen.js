import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CategoryList } from "./components/CategoryList";

export const CategoryScreen = () => {
    return (
        <Row>
            <Col>
                <CategoryList />
            </Col>
        </Row>
    )
}