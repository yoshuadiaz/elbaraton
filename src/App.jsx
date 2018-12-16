import React, { Component } from "react"
import { categories } from "./utils/categories.json"
import { products } from "./utils/products.json"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Category from "./components/Category"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <div>
                <h3 className="has-text-weight-bold is-size-5">Filtros</h3>
                <aside className="filters">[Filter Data]</aside>
                <br />

                <h3 className="has-text-weight-bold is-size-5">Categorias</h3>
                <br />
                <div className="menu">
                  {categories.map(category => (
                    <Category key={category.id} data={category} />
                  ))}
                </div>
              </div>
            </div>
            <div className="column">
              <section className="cards columns is-mobile is-multiline">
                {products.map(product => (
                  <Card key={product.id} data={product} />
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
