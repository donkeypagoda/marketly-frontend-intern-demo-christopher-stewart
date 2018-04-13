import React from 'react'

function SearchList(props){
  // console.log(props)
  return (
    <div>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          {props.itemTitle}
        </h5>
        <img src={props.itemPhoto} />
      </div>
      <div className="mb-1">
        {props.itemIngredients}
      </div>
      <div>
        <button className="addButton" onClick={props.add}>Add This To Your Menu!</button>
      </div>
    </div>
  )
}

export default SearchList