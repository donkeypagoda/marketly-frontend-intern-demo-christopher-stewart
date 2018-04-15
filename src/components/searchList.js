import React from 'react'

function SearchList(props){
  // console.log(props)
  return (

    <div className="searchList">
      <form className="addForm" alt="menu item" onSubmit={props.add}>
        <h5>
          {props.itemTitle}
        </h5>
        <img src={props.itemPhoto} />
        <div>
          {props.itemIngredients}
        </div>
        <div>
          <button className="addButton">Add This To Your Menu!</button>
        </div>
      </form>
    </div>

  )
}

export default SearchList
