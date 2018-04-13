import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      searchResult: []
    }
    this.submitSearch = this.submitSearch.bind(this)
  }

  async submitSearch(e){
    e.preventDefault()
    console.log(e.target[0].value)
    const response = await fetch(`http://www.recipepuppy.com/api/?q=${e.target[0].value}`)
    const results = await response.json()
    console.log(results.results)
  }

  render() {
    return (
      <div className="App">
        <div className="searchForm">
        <form onSubmit={this.submitSearch}>
          <label>Search for Meals Here!</label>
            <input type="text" />
          <button type="submit" className="submitButton">Search Meals</button>
        </form>
        </div>
      </div>
    );
  }
}

export default App;
