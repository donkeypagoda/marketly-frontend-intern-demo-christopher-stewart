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
    const response = await fetch(`http://www.recipepuppy.com/api/?q=${e.target[0].value}`)
    const results = await response.json()
    this.setState({
      searchResult: results.results
    })
  }

  addToMenu(e, item){
    e.preventDefault()
    let tempList = this.state.menuList
    tempList.push(item)
    this.setState({
      menuList: tempList
    })
  }

  removeFromMenu(e, item){
    e.preventDefault()
    let tempList = this.state.menuList
    let removedItem = item.itemTitle
    let newList = tempList.filter(item =>{ return item.itemTitle !== removedItem })
    this.setState({
      menuList: newList
    })
  }

  render() {
    let searchArr = []
    this.state.searchResult.map((item, index) => {
      searchArr.push(
        <SearchList
        key={index}
        itemTitle={item.title}
        itemIngredients={item.ingredients}
        itemLink={item.href}
        itemPhoto={item.thumbnail}
        add={this.addToMenu}/>
      )
    })

    let menuArr = []
    this.state.menuList.map((item, index) => {
      menuArr.push(
        <Menu key={index}
        itemTitle={item.itemTitle}
        remove={this.removeFromMenu} />
      )
    })

    return (
      <div className="App">
        <div className="containerMain">
          <div className="searchForm">
            <form onSubmit={this.submitSearch}>
              <div className="searchLabel">
                <label>Search for Meals Here!</label>
              </div>
              <input type="text" />
              <div className="searchButton">
                <button type="submit" className="submitButton">Search Meals</button>
              </div>
            </form>
          </div>
          <div className="menu">
            <div className="menuBanner">
            <h4>Your Meal Choices!</h4>
            </div>
            {menuArr}
          </div>
          <div className="searchResults">
            { searchArr.length > 0 ? searchArr : <div className="placeHolder">Your search results will appear here</div>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
