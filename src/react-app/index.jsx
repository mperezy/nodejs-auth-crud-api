import React, { Component } from 'react';
import Html from './html';
import Header from './components/header';
import { Container, Jumbotron, Button } from 'reactstrap';

class Index extends Component {
    render() {
        return (
            <Html>
                <Header title={this.props.title}/>
                <Container>
                    <Jumbotron>
                        <h1>Home</h1>
                        <p className={'lead'}>This is a simple example of Login - CRUD
                            using <code>Nodejs</code> and <code>MongoDB</code>.</p>
                        <a id={'simpleButton'} className={'btn btn-lg btn-primary'} href={'#'} role={'button'}>Simple Button</a>
                    </Jumbotron>
                </Container>
            </Html>
        );
    }
}

export default Index;
