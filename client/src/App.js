import React, { Component } from 'react';
import './App.css';
import yaml from 'yamljs';
import Version from '../src/components/versions'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      jsonData: null,
      jsconversion: '',
      loadFile: '',
      newVersion: '',
      response: '',
      post: '',
      responseToPost: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  updateJson = () => {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };


  onChange(e) {
    let files = e.target.files;

    this.setState({ loadFile: e.target.files[0].name })

    let reader = new FileReader();
    reader.readAsText(files[0]);

    reader.onload = (e) => {
      const yazi = e.target.result;

      var inputFile = e.target,
        outputFile = 'output.json',
        yaml = require('js-yaml'),
        obj = yaml.load(yazi, { encoding: 'utf8' });
      const jsonForm = JSON.stringify(obj);

      this.setState({ jsonData: jsonForm })
      

      var versionData = JSON.parse(this.state.jsonData);
      
      
      var meta = versionData.apiVersion;

      this.setState({ jsconversion: meta })

    }
  }

  handleChange(event) {
    this.setState({newVersion: event.target.value});
    console.log(this.state.newVersion)
  }

  handleSubmit(event) {
    alert('New version: ' + this.state.newVersion);
    
    var jsonData2 = JSON.parse(this.state.jsonData);
    console.log(jsonData2)
    console.log(this.state.newVersion)
    
    jsonData2.apiVersion=this.state.newVersion;

    fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: this.state.newVersion,
        data: jsonData2,
      }),
    });

    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        {/* <input title="choose file" type="file" onChange={(e) => { this.onChange(e) }} />
        <h5>{this.state.jsconversion}</h5>

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChange} />
          <button type="submit">tıkla</button>
        </form> */}

        <Version/>
      </div>
    );
  }
}

export default App;
