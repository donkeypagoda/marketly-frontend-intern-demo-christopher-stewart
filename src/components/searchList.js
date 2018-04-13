import React from 'react'

function SearchList(props){
  console.log(props)
  return (
    <div className='list-group'>
      <div className="list-group-item flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {props.itemTitle}
          </h5>
          <img src={props.itemPhoto} />
        </div>
        <div className="mb-1">
          {props.itemIngredients}
        </div>

      </div>
    </div>
  )
}

export default SearchList
