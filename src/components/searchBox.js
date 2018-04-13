import React, { Component } from 'react';

class SearchBox extends Component{


  render(){
    return(
      <div>
        <form className="searchform" onSubmit={()=> this.submitSearch}>
          <input type="text" />
        </form>
      </div>
    )
  }
}


export default SearchBox
