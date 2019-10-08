import React, { Component } from 'react';

class Flash extends Component {
    getClassName() {
        let className = 'alert alert-';
        const alertType = this.props.alertType;

        if(alertType === 'No user found!!') {
            className += 'info';
        }
        else if(alertType === 'You logged in successfully!!' || alertType === 'Your user was successfully created!!') {
            className += 'success';
        }
        else {
            className += 'danger';
        }

        return className;
    };

    render() {
        return (
            <div className={ this.getClassName() }>
                { this.props.alertType }
                <button type={'button'} className={'close'} data-dismiss={'alert'}>
                    <span>&times;</span>
                </button>
            </div>
        );
    }
}

export default Flash;