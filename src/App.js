import React from 'react';
import logo from './logo.svg';
import './App.css';
import WordChunksForm from './WordChunksForm';
import WordCountForm from './WordCountForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
class App extends React.Component {
  constructor(props){
      super(props);
  }

  render() {
    return (

      <div className="App">
          <Container>
              <Row>

                  <Col md="2"/>
                  <Col md="8">
                      <h2>Radware Assignment</h2>
                      <Tabs defaultActiveKey="wordChunks" id="uncontrolled-tab-example">
                          <Tab eventKey="wordChunks" title="Submit Words">
                              <br/>
                              <WordChunksForm/>
                          </Tab>
                          <Tab eventKey="wordCount" title="Retrieve Word Count">
                              <br/>
                              <WordCountForm/>
                          </Tab>
                      </Tabs>
                  </Col>
                  <Col md="2"/>
              </Row>


          </Container>
      </div>
    );
  }
}
export default App;
