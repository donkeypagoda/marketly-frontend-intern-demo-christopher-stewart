import React, { Component } from 'react';
import './App.css';
import SearchList from './components/searchList'
import Menu from './components/menu'


class App extends Component {
  constructor(){
    super()
    this.state = {
      searchResult: [],
      menuList: []
    }
    this.submitSearch = this.submitSearch.bind(this)
    this.addToMenu = this.addToMenu.bind(this)
    this.removeFromMenu = this.removeFromMenu.bind(this)
  }

  async submitSearch(e){
    e.preventDefault()
    // console.log(e.target[0].value)
    const response = await fetch(`http://www.recipepuppy.com/api/?q=${e.target[0].value}`)
    const results = await response.json()
    this.setState({
      searchResult: results.results
    })
    // console.log(this.state.searchResult)
  }

  addToMenu(item){
    item.preventDefault()
    let newItem = item.target.firstElementChild.innerText
    let tempList = this.state.menuList
    tempList.push(newItem)
    this.setState({
      menuList: tempList
    })
  }

  removeFromMenu(item){
    item.preventDefault()
    let removedItem = item.target.firstElementChild.innerText
    let tempList = this.state.menuList
    let newList = tempList.filter(item =>{ return item !== removedItem})
    this.setState({
      menuList: newList
    })
  }

  render() {
    let searchArr = []
    this.state.searchResult.map((item, index) => {
      searchArr.push(
        <SearchList key={index} itemTitle={item.title} itemIngredients={item.ingredients} itemLink={item.href} itemPhoto={item.thumbnail} add={this.addToMenu}/>
      )
    })

    let menuArr = []
    this.state.menuList.map((item, index) => {
      menuArr.push(
        <Menu key={index} itemTitle={item} remove={this.removeFromMenu} />
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
        <div>
          {menuArr}
        </div>
        <div className="searchResults">
          {searchArr}
        </div>
      </div>
    );
  }
}

export default App;
