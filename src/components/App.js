import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Form from './form'
import SpaceList from './spaceList'

const spaceUrl = "https://images-api.nasa.gov/search?q="

class App extends Component {

  state = {
    search: {
      spaceValue: "Comet"
    },
    spaceList: {
      data: []
    }
  }

  componentDidMount(){
    this.runFetch()
  }

  runFetch(){
    fetch(spaceUrl + this.state.search.spaceValue).then(res => res.json()).then((json)=>{
      this.setState({
        spaceList: {
          data: json.collection.items
        }
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      search: {
        spaceValue: e.target.value
      }
    })
  }

  searchSpace = () => {
    this.runFetch()
  }

  render() {
    return (
      <div className="App">
        <Form searchSpace={this.searchSpace} spaceValue={this.state.search.spaceValue} handleChange={this.handleChange}/>
        <SpaceList data={this.state.spaceList.data} />
      </div>
    );
  }
}

export default App;
