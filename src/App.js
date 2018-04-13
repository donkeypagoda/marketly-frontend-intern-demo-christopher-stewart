import React, { Component } from 'react';
import './App.css';
import SearchList from './components/searchList'


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
    this.setState({
      searchResult: results.results
    })
    console.log(this.state.searchResult)
  }

  render() {
    let searchArr = []
    this.state.searchResult.map((item, index) => {
      searchArr.push(
        <SearchList key={index} itemTitle={item.title} itemIngredients={item.ingredients} itemLink={item.href} itemPhoto={item.thumbnail} />
      )
    })

    return (
      <div className="App">
        <div className="searchForm">
          <form onSubmit={this.submitSearch}>
            <label>Search for Meals Here!</label>
              <input type="text" />
            <button type="submit" className="submitButton">Search Meals</button>
          </form>
        </div>
        <div className="searchResults">
          {searchArr}
        </div>
      </div>
    );
  }
}

export default App;
