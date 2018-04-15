import React from 'react';

function Menu(props){
  return (
    <div>
      <form className="addForm" onSubmit={props.remove}>
          <h5 className="mb-1">
            {props.itemTitle}
          </h5>
          <button className="removeButton">Remove This From Your Menu!</button>
      </form>
    </div>
  )
}

export default Menu
