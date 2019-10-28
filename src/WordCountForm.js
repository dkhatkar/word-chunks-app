import React from 'react';
import App from "./App";

class WordCountForm extends React.Component {

    constructor(props){
        super(props);
        this.updateValue = this.updateValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showResponse = this.showResponse.bind(this);
        this.state = {
            word : "",
            showResponse : false,
            response : {responseCode: "", responseMessage: "", word: {word:"", count: 0}}
        };
    }

    showResponse(){

      if(this.state.showResponse){
        return <div>Count: {this.state.response.word.count}</div>
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
            <form onSubmit={this.handleSubmit}>
            <div>
                <div>
                    <label>Word to Find:</label>
                </div>
                <div>
                  <input type="text" name="word" value={this.state.word} onChange={this.updateValue}/>
                </div>
            </div>
            <input type="submit" value="Submit"/>
        </form>
        {this.showResponse()}
        </div>

    }
}

export default WordCountForm;
