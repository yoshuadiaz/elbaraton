import React from "react"

const Card = props => {
  return (
    <div className="column is-one-quarter-widescreen is-one-third-tablet is-full-mobile">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title is-size-4">{props.data.name}</div>
        </div>
        <div className="card-content content is-small">
          <h3>Precio: {props.data.price}</h3>
          <h5>En Stock: {props.data.quantity}</h5>
          {props.data.available && (
            <span className="tag is-success">Disponible</span>
          )}
          {!props.data.available && (
            <span className="tag is-light">No disponible</span>
          )}
        </div>
        <div className="card-footer">
          {props.data.available && (
            <span className="card-button card-footer-item has-background-danger has-text-white is-size-5 has-text-weight-bold">
              Comprar
            </span>
          )}
          {!props.data.available && (
            <span className="card-footer-item has-background-light has-text-grey-light is-size-5 has-text-weight-bold">
              Comprar
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
