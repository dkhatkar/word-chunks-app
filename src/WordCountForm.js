import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class WordCountForm extends React.Component {

    constructor(props){
        super(props);
        this.updateValue = this.updateValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showResponse = this.showResponse.bind(this);
        this.state = {
            word : "",
            showResponse : false,
            response : {responseCode: "", responseMessage: "", word: {word:"", count: 0, createdDateTime: null, updatedDateTime: null}}
        };
    }

    showResponse(){

      if(this.state.showResponse){
        if({this.state.response.word.count} == 0){
          return <div>Word doesn't exist</div>
        }
        else{
          return <div>Count: {this.state.response.word.count} Created: {this.state.response.word.createdDateTime} Updated: {this.state.response.word.updatedDateTime}</div>
        }
      }
    }
    async handleSubmit(event){

        var word = this.state.word;
        var payload ={
            word : word
        };
        var  stringifyPayload =  JSON.stringify(payload);
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: stringifyPayload
        };

        const request = new Request("http://localhost:8090/count/", options);
        const response =  await fetch(request);
        let responseJson = await response.json();
        this.setState({response: responseJson});
        this.setState({showResponse: true});
    }
    updateValue(event){
        this.setState({word: event.target.value});

    }
    render() {

        return <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="word" >
                    <Form.Label>Word to find</Form.Label>
                    <Form.Control name="word" type="text" value={this.state.word} onChange={this.updateValue}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {this.showResponse()}
        </div>

    }
}

export default WordCountForm;
