import React from "react"
import Sublevel from "./Sublevel"
const Category = props => (
  <div>
    <p className="menu-label" onClick={() => console.log(props.data.sublevels)}>
      {props.data.name}
    </p>
    {props.data.sublevels && (
      <Sublevel key={props.data.id} data={props.data.sublevels} />
    )}
  </div>
)

export default Category
