import React, { Component } from 'react';
import {FormGroup, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import Html from '../../../html';
import Header from '../../header';

class Profile extends Component {
    render() {
        return (
            <Html>
                <Header title={ this.props.title } user={ this.props.user }/>
                <div className={'form-signin'}>
                    <div className={'text-center mb-4'}>
                        <img src={'img/profile-icon.png'} alt={''} width={'200'} className={'mb-4'}/>
                            <h1 className={'h3 mb-3 font-weight-normal'}>NodeJs Authentication - Profile</h1>
                    </div>

                    <FormGroup>
                        <label htmlFor={'_id'} className={'col-sm-2 col-form-label'}>User ID</label>
                        <InputGroup>
                            <InputGroupAddon addonType={'prepend'}>
                                <div className={'input-group-text'}><span className={'oi oi-shield'}></span></div>
                            </InputGroupAddon>
                            <Input id={'_id'} name={'_id'} value={ this.props.user._id } disabled type={'text'} required/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor={'firstname'} className={'col-sm-2 col-form-label'}>First Name</label>
                        <InputGroup>
                            <InputGroupAddon addonType={'prepend'}>
                                <div className={'input-group-text'}><span className={'oi oi-person'}></span></div>
                            </InputGroupAddon>
                            <Input id={'firstname'} name={'firstname'} value={ this.props.user.firstname } disabled type={'text'} required/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor={'lastname'} className={'col-sm-2 col-form-label'}>Last Name</label>
                        <InputGroup>
                            <InputGroupAddon addonType={'prepend'}>
                                <div className={'input-group-text'}><span className={'oi oi-person'}></span></div>
                            </InputGroupAddon>
                            <Input id={'lastname'} name={'lastname'} value={ this.props.user.lastname } disabled type={'text'} required/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor={'email'} className={'col-sm-2 col-form-label'}>Email</label>
                        <InputGroup>
                            <InputGroupAddon addonType={'prepend'}>
                                <div className={'input-group-text'}><span className={'oi oi-envelope-closed'}></span></div>
                            </InputGroupAddon>
                            <Input id={'email'} name={'email'} value={ this.props.user.email } disabled type={'text'} required/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor={'role'} className={'col-sm-2 col-form-label'}>Role</label>
                        <InputGroup>
                            <InputGroupAddon addonType={'prepend'}>
                                <div className={'input-group-text'}><span className={'oi oi-tag'}></span></div>
                            </InputGroupAddon>
                            <Input id={'role'} name={'role'} value={ this.props.user.role } disabled type={'text'} required/>
                        </InputGroup>
                    </FormGroup>
                </div>
            </Html>
        );
    }
}

export default Profile;