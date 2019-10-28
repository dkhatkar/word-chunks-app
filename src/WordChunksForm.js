import React from 'react';
import App from "./App";

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
        return <div>Status: {this.state.status}</div>
      }
    }
    async handleSubmit(event){

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

        return <div><form onSubmit={this.handleSubmit}>
            <div>
                <div>
                    <label>Words:</label>
                </div>
                <div>
                    <textarea rows="6" cols="50" name="chunks" value={this.state.chunks} onChange={this.updateValue}/>
                </div>
            </div>
            <input type="submit" value="Submit"/>
        </form>
        {this.showResponse()}
        </div>
    }
}

export default WordChunksForm;
