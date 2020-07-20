import React from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      output: '',
      input: 'Default placeholder',
      buttonText: 'Submit',
      description: 'Description'
    };

    // Bind the event handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Call API for the UI params
    const url = '/params';
    axios.get(url).then((res) => {
      let r = res.data;
      this.setState({input: r.placeholder, buttonText: r.button_text, description: r.description});
    });
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  handleClick(e) {
    e.preventDefault();
    const url = '/translate';
    let d = {
      prompt: this.state.input
    };

    axios.post(url, d).then((res) => {
      let str = res.data.text;
      this.setState({output: str});
    });
  }

  render() {
    return (
      <div>
        <head>
        </head>
        <body style={{'alignItems': 'center', 'justifyContent': 'center'}}>
          <div style={{'margin': 'auto', 'marginTop': '80px', 'display': 'block', 'maxWidth': '500px', 'minWidth': '200px', 'width': '50%'}}>
            <Form onSubmit={this.handleClick}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label >{this.state.description}</Form.Label>
                <Form.Control type="text" as='textarea' value={this.state.input} onChange={this.handleChange}/>
              </Form.Group>

              <Button variant="success" size="lg" block type="submit">
                {this.state.buttonText}
              </Button>
            </Form>

            <div style={{'margin': 'auto', 'textAlign': 'center', 'width':'flex', 'margin': '20px', 'fontSize': '12pt'}}>
              {this.state.output}
            </div>

            <div style={{'margin': 'auto', 'textAlign': 'center', 'margin-top': '300px', 'fontSize': '14pt'}}>
              Built by Ali Sheikh, AI powered by OpenAI
            </div>

          </div>
        </body>
      </div>
    );
  }
}

export default App;
