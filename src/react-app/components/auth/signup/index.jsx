import React, { Component } from 'react';
import Html from '../../../html';
import Header from '../../header';
import { Button, Form, FormGroup, InputGroup, Input, InputGroupAddon } from 'reactstrap';
import Flash from "../flash";

class SignUp extends Component {
    render() {
        const renderFlash = () => {
            if(this.props.signupMessage.length > 0) return <Flash alertType={ this.props.signupMessage + '' }/>;
        };

        return (
            <Html>
                <Header title={ this.props.title }/>
                <br/><br/><br/>

                <Form className={'form-signin'} action={'/signup'} method={'POST'}>
                    <div className={'text-center mb-4'}>
                        <img src={'img/nodejs.jpg'} alt={''} width={'200'} className={'mb-4'}/>
                        <h1 className={'h3 mb-3 font-weight-normal'}>NodeJs Authentication - Sign Up</h1>
                    </div>

                    { renderFlash() }

                    <FormGroup>
                        <label htmlFor={'firstname'} className={'col-sm-2 col-form-label'}>First Name</label>
                        <InputGroup>
                            <InputGroupAddon addonType={'prepend'}>
                                <div className={'input-group-text'}><span className={'oi oi-person'}></span></div>
                            </InputGroupAddon>
                            <Input id={'firstname'} name={'firstname'} value={''} placeholder={'Type your first name'} type={'text'} required/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor={'lastname'} className={'col-sm-2 col-form-label'}>Last Name</label>
                        <InputGroup>
                            <InputGroupAddon addonType={'prepend'}>
                                <div className={'input-group-text'}><span className={'oi oi-person'}></span></div>
                            </InputGroupAddon>
                            <Input id={'lastname'} name={'lastname'} value={''} placeholder={'Type your last name'} type={'text'} required/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor={'role'} className={'col-sm-2 col-form-label'}>Role</label>
                        <InputGroup>
                            <InputGroupAddon addonType={'prepend'}>
                                <div className={'input-group-text'}><span className={'oi oi-person'}></span></div>
                            </InputGroupAddon>
                            <Input id={'role'} name={'role'} value={''} type={'select'} required>
                                <option selected disabled>Select one</option>
                                <option>Administrator</option>
                                <option>Simple user</option>
                            </Input>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor={'email'} className={'col-sm-2 col-form-label'}>Email</label>
                        <InputGroup>
                            <InputGroupAddon addonType={'prepend'}>
                                <div className={'input-group-text'}><span className={'oi oi-envelope-closed'}></span></div>
                            </InputGroupAddon>
                            <Input id={'email'} name={'email'} value={''} placeholder={'Type your email'} type={'email'} required/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor={'password'} className={'col-sm-2 col-form-label'}>Password</label>
                        <InputGroup>
                            <InputGroupAddon addonType={'prepend'}>
                                <div className={'input-group-text'}><span className={'oi oi-key'}></span></div>
                            </InputGroupAddon>
                            <Input id={'password'} name={'password'} value={''} placeholder={'Type your password'} type={'password'} required/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor={'passwordconfirm'} className={'col-sm-4 col-form-label'}>Confirm Password</label>
                        <InputGroup>
                            <InputGroupAddon addonType={'prepend'}>
                                <div className={'input-group-text'}><span className={'oi oi-key'}></span></div>
                            </InputGroupAddon>
                            <Input id={'passwordconfirm'} name={'passwordconfirm'} value={''} placeholder={'Re-type your password'} type={'password'} required/>
                        </InputGroup>
                        <small id="emailHelp" className="form-text text-muted">Just want to confirm that you're entering your password in the correct way.</small>
                    </FormGroup>

                    <br/><br/>

                    <Button color={'primary'} type={'submit'} size={'lg'} block>Sign Up</Button>
                </Form>
            </Html>
        );
    }
}

export default SignUp;