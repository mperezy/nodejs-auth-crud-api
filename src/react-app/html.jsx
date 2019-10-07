import React, { Component } from 'react';

class Html extends Component {
    renderJsScripts() {
        const scripts = this.props.internJsScripts;
        let i = 0;

        if(scripts) {
            return scripts.map((script) => {
                return <script type={'text/javascript'} src={script.src}></script>
            });
        }
    }

    render() {
        return(
            <html>
                <head>
                    <meta charSet={'UTF-8'}/>
                    <title>Nodejs - Mongo : Login - CRUD</title>
                    <link rel={'icon'} href={'img/nodejs.jpg'}/>
                    <link rel={'stylesheet'} href={'css/floating-labels.css'}/>
                    <link rel={'stylesheet'} href={'css/navbar.css'}/>
                    <link rel={'stylesheet'} href={'css/fix-navbar.css'}/>
                    <link rel={'stylesheet'}
                          href={'https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css'}/>
                    <link rel={'stylesheet'}
                          href={'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'}/>
                    <script src={'https://code.jquery.com/jquery-3.4.1.slim.min.js'}></script>
                    <script src={'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'}></script>
                    { this.renderJsScripts() }
                </head>
                <body className={'d-flex flex-column h-100'}>
                    { this.props.children }
                </body>
            </html>
        );
    }
}

export default Html;