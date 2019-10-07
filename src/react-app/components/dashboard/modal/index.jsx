import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class CustomModal extends Component {
    isEditOrDelete() {
        const modalType = this.props.modalType;

        if(modalType === 'deleteModal') {
            return <div>
                <div className={'modal-body'}>
                    <p>Are you sure you want to delete this task?</p>
                </div>
                <div className={'modal-footer'}>
                    <Button type={'button'} color={'secondary'} data-dismiss={'modal'}>Cancel</Button>
                    <a href={''} className={'btn btn-danger'} id={'deleteButtonModal'}>Delete</a>
                </div>
            </div>;
        }
        else {
            return <div className={'modal-body'}>
                <Form id={'formModal'} action={''} method={'POST'}>
                    <FormGroup>
                        <Input type={'text'} name={'titleModal'} placeholder={'Title'} value={''}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type={'textarea'} name={'descriptionModal'} cols={'80'}
                               placeholder={'Add a Description'}/>
                    </FormGroup>
                    <div className={'modal-footer'}>
                        <Button color={'primary'} type={'submit'}>Update</Button>
                    </div>
                </Form>
            </div>;
        }
    }

    render() {
        return (
            <div className={'modal fade'} id={ this.props.modalType }>
                <div className={'modal-dialog'}>
                    <div className={'modal-content'}>
                        <div className={'modal-header'}>
                            <h5 className={'modal-title'} id={'titleModal'}>{ this.props.modalTitle }</h5>
                            <button type={'button'} className={'close'} data-dismiss={'modal'}>
                                <span>&times;</span>
                            </button>
                        </div>
                        { this.isEditOrDelete() }
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomModal;