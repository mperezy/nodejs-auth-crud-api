import React, { Component } from 'react';
import Html from '../../../html';
import Header from '../../header';
import { Button, Form, FormGroup, InputGroup, Input, InputGroupAddon } from 'reactstrap';

class SignIn extends Component {
    render() {
        return (
            <Html>
                <Header title={ this.props.title }/>
                <Form className={'form-signin'} action={'/signin'} method={'POST'}>
                    <div className={'text-center mb-4'}>
                        <img src={'img/nodejs.jpg'} alt={''} width={'200'} className={'mb-4'}/>
                        <h1 className={'h3 mb-3 font-weight-normal'}>NodeJs Authentication - Sign In</h1>
                    </div>

                    <FormGroup>
                        <label htmlFor={'email'} className={'col-sm-2 col-form-label'}>Email</label>
                        <InputGroup>
                            <InputGroupAddon addonType={'prepend'}>
                                <div className={'input-group-text'}><span className={'oi oi-envelope-closed'}></span></div>
                            </InputGroupAddon>
                            <Input id={'email'} name={'email'} value={''} placeholder={'Type your email'} type={'email'} required/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup className={'form-group'}>
                        <label htmlFor={'email'} className={'col-sm-2 col-form-label'}>Password</label>
                        <InputGroup>
                            <InputGroupAddon addonType={'prepend'}>
                                <div className={'input-group-text'}><span className={'oi oi-key'}></span></div>
                            </InputGroupAddon>
                            <Input id={'password'} name={'password'} value={''} placeholder={'Type your password'} type={'password'} required/>
                        </InputGroup>
                    </FormGroup>

                    <small>Don't have an account yet? Please <a href={'/signup'}>sign up</a></small>
                    <br/><br/>
                    <Button color={'primary'} type={'submit'} size={'lg'} block>Sign In</Button>
                </Form>
            </Html>
        );
    }
}

export default SignIn;