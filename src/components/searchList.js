import React from 'react'

function SearchList(props){
  let shortIng = props.itemIngredients.split('').slice(0, 150)
  shortIng.push("...")
  shortIng.join("")
  // if(!props.itemPhoto){props.itemPhoto="../media/Tacos.jpg"}
  return (
    <div className="searchList">
        <div className="containerResults">
          <img className="searchImg" alt="yum yum" src={props.itemPhoto} />
          <div className="searchTitle">
            <h5>
              {props.itemTitle}
            </h5>
          </div>
          <div>
          <button className="addButton" onClick={(e) => props.add(e,props)}>Add This To Your Menu!</button>
          </div>
          <div className="ingridients">
            {shortIng}
          </div>
        </div>
    </div>

  )
}

export default SearchList
