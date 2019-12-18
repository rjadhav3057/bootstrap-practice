import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Modal, ButtonToolbar, Row, Col } from 'react-bootstrap';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

export class LoginForm extends Component {


    constructor(props) {
        super(props)

        this.state = {
            show: false

        }
    }
    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }


    LoginFormRender() {
        let self = this;
        return (
            <div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >

                    {props => (
                        <>
                            <Button variant="primary" onClick={this.handleShow}>
                              Login
                       </Button>

                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Login Form</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Row>
                                            <Col xs={3}>
                                                <label>FirstName:</label>
                                            </Col>
                                            <Col xs={3}>
                                                <Field name="firstName" />
                                                {props.errors.firstName && props.touched.firstName ? (
                                                    <div>{props.errors.firstName}</div>
                                                ) : null}
                                            </Col>
                                        </Row>

                                        <Row>

                                            <Col xs={3}>
                                                <label>LastName:</label>
                                            </Col>
                                            <Col xs={3}>
                                                <Field name="lastName" />
                                                {props.errors.lastName && props.touched.lastName ? (
                                                    <div>{props.errors.lastName}</div>
                                                ) : null}
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={3}>
                                                <label>Email:</label>
                                            </Col>
                                            <Col xs={3}>
                                                <Field name="email" type="email" />
                                                {props.errors.email && props.touched.email ? <div>{props.errors.email}</div> : null}
                                            </Col>
                                        </Row>

                                        <button type="submit">Submit</button>

                                    </Form>

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                           </Button>
                                    <Button variant="primary" onClick={this.handleClose}>
                                        Save Changes
                           </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    )}
                </Formik>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.LoginFormRender()}
            </div>
        )
    }
}

export default LoginForm
