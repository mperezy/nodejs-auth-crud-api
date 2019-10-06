import React, { Component } from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink } from 'reactstrap';

class Header extends Component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }

    isCurrentHome(title) {
        return (this.props.title === title) ? true : false;
    }

    render() {
        return(
            <header>
                <Navbar className={'fixed-top'} color={'dark'} dark expand={'md'}>
                    <NavbarBrand href={'#'}>Login-CRUD-Nodejs</NavbarBrand>

                    <NavbarToggler onClick={this.toggle} data-toggle={'collapse'} data-target={'#navbarCollapse'}
                                   aria-controls={'navbarCollapse'} aria-expanded={'false'} aria-label={'Toggle navigation'}/>

                    <Collapse isOpen={this.state.isOpen} navbar id={'navbarCollapse'}>
                        <Nav className={'mr-auto'} navbar>

                            <NavItem active={ this.isCurrentHome('index') }>
                                <NavLink href={'/'}>Home</NavLink>
                            </NavItem>

                            <NavItem active={ this.isCurrentHome('dashboard') }>
                                <NavLink href={'/dashboard'}>Dashboard</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href={'#disabled'} disabled>Disabled</NavLink>
                            </NavItem>
                        </Nav>

                        <hr/>

                        <Nav className={'ml-md-auto d-md-flex'} navbar>
                            <NavItem active={ this.isCurrentHome('signin') }>
                                <NavLink href={'/signin'}>Sign In</NavLink>
                            </NavItem>

                            <NavItem active={ this.isCurrentHome('signup') }>
                                <NavLink href={'/signup'}>Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}

export default Header;