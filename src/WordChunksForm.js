import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

class WordChunksForm extends React.Component {

    constructor(props){
        super(props);
        this.updateValue = this.updateValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showResponse = this.showResponse.bind(this);
        this.state = {
            chunks : "",
            status : null,
            showResponse : false
        };
    }

    showResponse(){
      if(this.state.showResponse){
        return <Row>Status: {this.state.status}</Row>
      }
    }
    async handleSubmit(event){
        this.setState({showResponse: false});
        var chunks = this.state.chunks;
        var payload ={
            chunks : chunks
        };
        var  stringifyPayload =  JSON.stringify(payload);

        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: stringifyPayload
        };

        const request = new Request("http://localhost:8070/words/chunks", options);
        const response =  await fetch(request);
        this.setState({status: response.status});
        this.setState({showResponse: true});
    }
    updateValue(event){
        this.setState({chunks: event.target.value});

    }
    render() {

        return <div>

            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="chunks" >
                    <Form.Label>Words:</Form.Label>
                    <Form.Control as="textarea" name="chunks" rows="6" value={this.state.chunks} onChange={this.updateValue}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {this.showResponse()}
        </div>
    }
}

export default WordChunksForm;
