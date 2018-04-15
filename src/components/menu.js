import React from 'react';

function Menu(props){
  return (
    <div className="menuList">
      <form className="addForm" onSubmit={props.remove}>
          <h5>
            {props.itemTitle}
          </h5>
          <button className="removeButton">Remove This From Your Menu!</button>
      </form>
    </div>
  )
}

export default Menu
