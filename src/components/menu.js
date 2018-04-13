import React from 'react';

function Menu(props){
  console.log(props)
  return (
    <div>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          {props.title}
        </h5>
        <img src={props.itemPhoto} />
      </div>
      <div className="mb-1">
        {props.itemIngredients}
      </div>
      <div>
        <button className="removeButton" onClick={props.remove}>Remove This From Your Menu!</button>
      </div>
    </div>
  )
}

export default Menu
