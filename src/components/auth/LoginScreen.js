import React from 'react'
import * as yup from 'yup'
import FeatherIcon from 'feather-icons-react'
import img from '../../assets/img/marketplace.png'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'



export const LoginScreen = () => {
  const navigation = useNavigate()
  const { dispatch } = 
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      username: yup.string.required('campo obligatorio'),
      password: yup.string.required('campo obligatorio')

    }),
    onsubmit: (values) => {
      axios({
        url: '/auth/login',
        method: 'POST',
        data: JSON.stringify(values)
      }).then((response.error) {
        const action = {
          type: 'LOGIN',
          payload: response.data
        };
        dispatch(action)
        navigation('products', { replace: true})
      }).catch((err) => {
        Alert.fire({
          title: 'Verifique los datos',
          text: 'Usuario y/o contraseña incorrectos',
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar'
        })
      })
    }
  })

  return (
    <section
      className='h-100 gradient-form'
      style={{ backgroundColor: '#eee' }}
    >
      <Container
        className='py-5 h-100'
      >
        <Row
          className='d-flex justify-content-center align-items-center h-100'
        >
          <Col
            className='col-xl-10'
          >
            <div
              className='card rounded-3 text-black'
            >
              <Row
                className='g-0'
              >
                <Col
                  className='col-lg-6'
                >
                  <div className='card-body p-md-5 mx-md-4'>
                    <div className='text-center'>
                      <Figure>
                        <Figure.Image
                          src={img}
                          width={125}
                          height={110}
                          alt='Marketplace'
                        />
                      </Figure>
                      <h4
                        className='mt-1 mb-5 pb-1'
                      >Marketplace</h4>
                    </div>
                    <Form
                      onSubmit={formik.handleSubmit}
                    >
                      <Form.Group className='form-outline mb-4'>
                        <Form.Label htmlFor='username'>
                          Nombre de usuario
                        </Form.Label>
                        <Form.Control
                          name='username'
                          id='username'
                          placeholder='rebeccacg'
                          onChange={formik.handleChange}
                          value={formik.values.username}
                        />
                      </Form.Group>
                      <Form.Group className='form-outline mb-4'>
                        <Form.Label htmlFor='username'>
                          Nombre de usuario
                        </Form.Label>
                        <Form.Control
                          name='username'
                          id='username'
                          placeholder='rebeccacg'
                          onChange={formik.handleChange}
                          value={formik.values.username}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
