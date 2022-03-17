import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useFormik } from 'formik';
import * as yup from "yup";
import axios from 'axios';
import Alert from '../../../shared/plugins/alert';


export const CategoryForm = (props) => {
    const titleConfirmacion = "¿Estás seguro?";
    const msjConfirmacion = "";
    const titleError = "";
    const msjError = "";
    const titleExito = "";
    const msjExito = "";
    const formik = useFormik({
        initialValues: {
            description: "",
            status: {
                id: 1,
                description: "activo"
            }
        },
        validationSchema: yup.object().shape({
            description: yup.string().required("campo obligatorio").min(3, "mínimo 3 catacteres")
        }),
        onSubmit: (values) => {
            Alert.fire({
                title: titleConfirmacion,
                text: msjConfirmacion,
                icon: "warning",
                confirmButtonColor: "",
                cancelButtonText: "Cancelar",
                cancelButtonColor: "",
                reverseButtons: true,
                backdrop: true,
                allowOutsideClick: !Alert.isLoading,
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    return axios({ url: "/category/", method: "POST", data: JSON.stringify(values) })
                        .then((response) => {
                            if (!response.error) {
                                setCategory(categories => [...categories, response.data]);
                                Alert.fire({
                                    title: titleExito,
                                    text: msjExito,
                                    icon: "success",
                                    confirmButtonColor: "",
                                    confirmButtonText: "Aceptar",
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        handleClose();
                                    }
                                })
                            }
                            return response;
                        }).catch((error) => {
                            Alert.fire({
                                title: titleError,
                                text: msjError,
                                icon: "error",
                                confirmButtonColor: "",
                                confirmButtonText: "Aceptar",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    handleClose();
                                }
                            })
                        })
                }
            })

            /*fetch('http://localhost:8080/api/category/', { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) })
                .then(response =>
                    response.json()).then(data => {
                        console.log(data.data);
                    }).catch(error => {
                        console.log(error);
                    });
            console.log(values);*/
        }
    })
    const { isOpen, setCategory, onClose } = props;
    const handleClose = () => {
        onClose();
        formik.resetForm();
    }
    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registrar categoría</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label className='text-bold'>Descripción</Form.Label>
                        <Form.Control
                            name='description'
                            placeholder='Gaming'
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Button
                                    variant='danger'
                                    onClick={handleClose}
                                >
                                    <FeatherIcon icon={'x'} />&nbsp;
                                    Cerrar
                                </Button>
                                <Button
                                    variant='success'
                                    type='submit'
                                >
                                    <FeatherIcon icon={'check'} />&nbsp;
                                    Registrar
                                </Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
