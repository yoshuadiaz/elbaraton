import React from "react"

const Navbar = props => {
  return (
    <header className="navbar">
      <div className="container is-block">
        <nav className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <span role="button" className="navbar-burger burger ">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </span>
            </div>
            <div className="level-item">
              <h1 className="title">El Baratón</h1>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item has-text-weight-bold navbar-item has-text-danger">
              <span>
                3 <i className="fas fa-shopping-cart" />
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
