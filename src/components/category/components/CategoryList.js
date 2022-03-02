import React, { useEffect, useState } from 'react';
import axios from "../../../shared/plugins/axios";
import { Row, Col, Badge, Button, Card } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import FeatherIcon from "feather-icons-react";
import {ButtonCircle} from "../../../shared/components/ButtonCircle";
import {CustomLoader} from "../../../shared/components/CustomLoader";
import {FilterComponent} from "../../../shared/components/FilterComponent"
import { CategoryForm } from './CategoryForm';

export const CategoryList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [filterText, setFilterText] = useState("");
    const [categories, setCategories] = useState([]);
    let asd;
    const getCategories = () => {
        /*axios.get(/category/)
            .then(response => {
                setCategories(response.data);
                setIsLoading(false);
            }).catch(error => {
                console.log(error);
            });*/
            fetch  ('http://localhost:8080/api/category/', {method: 'GET' })
            .then(response => 
                response.json()).then(data => {
                    console.log(data.data);
                    setCategories(data.data);
                console.log(categories);
                setIsLoading(false);
                }).catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        setIsLoading(true);
        getCategories();
    }, []);
    const filteredItems = categories.filter(
        (item) =>
        item.description &&
        item.description.toLowerCase().includes(filterText.toLowerCase())
    )
    const headerComponent = React.useMemo(() => {
        const clearText = () => {
            if (filterText) {
                setFilterText('');
            }
        };
        return <FilterComponent
            filterText={filterText}
            onClear={clearText}
            onFilter={(e) => setFilterText(e.target.value)}
            />
    })
    const columns = [
        {
            name: "#",
            cell: (row, index) => <span>{index + 1}</span>
        },
        {
            name: "Description",
            cell: (row) => <span>{row.description}</span>
        },
        {
            name: "Estado",
            cell: (row) =>
                row.status.description === "Activo" ? (
                    <Badge pill bg="success">
                        {row.status.description}
                    </Badge>
                ) : (
                    <Badge pill bg="danger">
                        {row.status.description}
                    </Badge>
                )
        }
    ];

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de'
    };

    return (
        <>
            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            Categorías
                        </Col>
                        <Col className='text-end'>
                            <CategoryForm isOpen={isOpen}
                            setCategories={setCategories}
                            onClose={() => setIsOpen(false)}
                            />
                            <ButtonCircle
                                type="btn btn-success"
                                onClickFunct={()=> setIsOpen(true)}
                                icon="plus"
                                size={20}
                            />
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                        <DataTable
                            columns = {columns}
                            data={filteredItems}
                            pagination
                            paginationComponentOptions={paginationComponentOptions}
                            noDataComponent="No hay registros"
                            progressPending={isLoading}
                            progressComponent={CustomLoader}
                            subHeader
                            subHeaderComponent={headerComponent}
                        />
                </Card.Body>
            </Card>
        </>
    );
};
