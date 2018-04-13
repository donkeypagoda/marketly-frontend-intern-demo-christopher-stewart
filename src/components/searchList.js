import React from 'react'

function SearchList(props){
  // console.log(props)
  return (

    <div className="d-flex w-100 justify-content-between">
      <form className="addForm" onSubmit={props.add}>
        <h5 className="mb-1">
          {props.itemTitle}
        </h5>
        <img src={props.itemPhoto} />
        <div className="mb-1">
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
