import React from 'react';

function Menu(props){
  return (
    <div className="menuList">
      <div className="menuItemTitle">
        {props.itemTitle}
      </div>
      <div className="removeButton" >
        <button onClick={(e) => props.remove(e,props)}>Remove From Menu</button>
      </div>
    </div>
  )
}

export default Menu
