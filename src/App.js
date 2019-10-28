import React from 'react';
import logo from './logo.svg';
import './App.css';
import WordChunksForm from './WordChunksForm';
import WordCountForm from './WordCountForm';

class App extends React.Component {
  constructor(props){
      super(props);
      this.handleWordCountTab = this.handleWordCountTab.bind(this);
      this.handleWordIngestionTab = this.handleWordIngestionTab.bind(this);

      this.showForm = this.showForm.bind(this);
      this.state = {
          tab : 1
      };
  }

  handleWordIngestionTab(i){
        this.setState({tab: 1});
  }

  handleWordCountTab(i){
        this.setState({tab: 2});
  }

  showForm(){
    if(this.state.tab == 1){
      return <WordChunksForm/>;
    }
    else{
      return <WordCountForm/>;
    }
  }
  render() {
    return (
      <div className="App">
      <h1>Radware Assignment</h1>
        <div>
          <ul style={{listStyleType: "none"}}>
            <li style={{display: "inline"}} onClick={this.handleWordIngestionTab}>Word Ingestion </li>
            <li style={{display: "inline"}} onClick={this.handleWordCountTab}>Word Count</li>
          </ul>
        </div>
        {this.showForm()}
      </div>
    );
  }
}
export default App;
