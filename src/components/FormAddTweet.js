import React from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useForm } from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { validationFormAddTweetAction } from '../actions/validationsActions'

const FormAddTweet = () => {

    const {name, tweet, formValue, onChange } = useForm({
        name: '',
        tweet: ''
    });

    //Inicializaión del dispatch y ejecución de las acciones
    const dispatch = useDispatch();
    const errorForm = state => dispatch(validationFormAddTweetAction(state));

    //Obtener estado de la valicación del formulario
    const errorFormValue = useSelector(state => state.validations.errorFormAddTweet);

    const onSubmit = e => {
        errorForm(true);
        e.preventDefault(); 
        if(!name || !tweet){
            console.log('todos los campos son obligatorios');
            return;
        }
        errorForm(false);
        console.log('Formulario enviado correctamente: ', formValue)
    }

    return (
        <Form className='m-3' onChange={onChange} onSubmit={onSubmit}>
            <Form.Group className='text-center mb-3'>
                <h1>Nuevo tweet</h1>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='text'
                    name='name'
                    defaultValue={name}
                    placeholder='Escribe tu nombre'
                >    
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as='textarea'
                    name='tweet'
                    row='3'
                    defaultValue={tweet}
                    placeholder='Escribe lo que quieres comunicar'
                    className='mt-3 mb-3'
                >    
                </Form.Control>
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant='primary' type='submit'>
                    Enviar tweet
                </Button>
                {
                    errorFormValue && (
                        <Alert variant='danger' className='mt-4'>
                            Todos los campos son obligatorios
                        </Alert>
                    )
                }
            </div>
        </Form>
    )
}

export default FormAddTweet
