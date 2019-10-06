import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Input, Button, Table } from 'reactstrap';
import Header from '../header';
import Html from '../../html';

class Dashboard extends Component {
    fillTable() {
      const tasks = this.props.tasks;
      let i = 0;

      return tasks.map((task) => {
          return <tr>
              <td>{ ++i }</td>
              <td>{ task.title }</td>
              <td>{ task.description }</td>
              <td>
                  <a className={ task.status ? 'btn btn-success' : 'btn btn-dark' } href={ `/turn/${ task._id }` }>Done</a>
                  <Button color={'danger'} className={'deleteButton'} data-delete={ `/delete/${ task._id }` }>Delete</Button>
                  <Button color={'info'} className={'editButton'} data-task={`${ task._id }#${ task.title }#${ task.description }`} data-action={'/edit/'}>Edit</Button>
              </td>
          </tr>
      });
    };

    render() {
        return (
            <Html>
                <main role={'main'} className={'flex-shrink-0'}>
                    <Header title={ this.props.title } user={ this.props.user }/>

                    <Container>
                        <h1 className={'mt-5'}>Hello there <b>{ this.props.user.firstname }</b></h1>
                        <p className={'lead'}>Welcome to the dashboard page, please follow your tasks or if you don't have any one yet, create one!!</p>
                        <p>The source code of this little project is available  <a href={'https://github.com/mperezy/nodejs-auth-crud-api'} target={'_blank'}>here</a> </p>
                        <br/>
                    </Container>

                    <Container>
                        <Row>
                            <Col md={'5'}>
                                <Card>
                                    <CardBody>
                                        <Form action={'/add'} method={'POST'}>
                                            <FormGroup>
                                                <Input type={'text'} name={'title'} placeholder={'Title'}/>
                                                <Input type={'text'} name={'userId'} hidden value={ this.props.user._id }/>
                                            </FormGroup>

                                            <FormGroup>
                                                <Input type={'textarea'} name={'description'} cols={'80'} placeholder={'Add a description'}/>
                                            </FormGroup>
                                            <Button color={'primary'} type={'submit'}>Add</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={'7'}>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th>N°</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Operations</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { this.fillTable() }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </Html>
        );
    }
}

export default Dashboard;