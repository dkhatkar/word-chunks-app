import React from 'react';
import App from "./App";

class WordChunksForm extends React.Component {

    constructor(props){
        super(props);
        this.updateValue = this.updateValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            chunks : ""
        };
    }


    handleSubmit(event){
        alert("hello");
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
        console.log(request);
        const response =  fetch(request);
    }
    updateValue(event){
        this.setState({chunks: event.target.value});

    }
    render() {

        return <form onSubmit={this.handleSubmit}>
            <div>
                <div>
                    <label>Words:</label>
                </div>
                <div>
                    <textarea name="chunks" value={this.state.chunks} onChange={this.updateValue}/>
                </div>
            </div>
            <input type="submit" value="Submit"/>
        </form>

    }
}

export default WordChunksForm;

