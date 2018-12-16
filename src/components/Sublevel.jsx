import React from "react"
const Sublevel = props => (
  <ul className="menu-list">
    {props.data.map(sublevel => (
      <li key={sublevel.id}>
        <a href="#">
          <span onClick={() => console.log(sublevel)}>{sublevel.name}</span>
        </a>
        {sublevel.sublevels && <Sublevel data={sublevel.sublevels} />}
      </li>
    ))}
  </ul>
)

export default Sublevel
