import React from 'react'

function SearchList(props){
  let shortIng = props.itemIngredients.split('').slice(0, 150)
  shortIng.push("...")
  shortIng.join("")
  // if(!props.itemPhoto){props.itemPhoto="../media/Tacos.jpg"}
  return (
    <div className="searchList">
        <div className="containerResults">
          <img className="searchImg" src={props.itemPhoto} />
          <div className="searchTitle">
            <h5>
              {props.itemTitle}
            </h5>
          </div>
          <div className="addButton">
          <button onClick={(e) => props.add(e,props)}>Add This To Your Menu!</button>
          </div>
          <div className="ingridients">
            {shortIng}
          </div>
          <div className="itemLink">
            <a href={props.itemLink}>View Recipe</a>
          </div>
        </div>
    </div>

  )
}

export default SearchList
