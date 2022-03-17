import React from 'react'
import * as yup from 'yup'
import FeatherIcon from 'feather-icons-react'
import img from '../../assets/img/marketplace.png'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'



export const LoginScreen = () => {
  const navigation = useNavigate()
  const {dispatch } = 
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
      }).then((response.error)) {
        const action = {
          type: 'LOGIN',
          payload: response.data
        };
        dispatch(action)
        navigation('products', {replace: true})
      }
    }
  })

  return (
    <>

    </>
  )
}
