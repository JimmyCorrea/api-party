import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Pokemon.css'

class Github extends Component {
  state = {
    username: ''
  }

  handleChange = (ev) => {
    const username = ev.currentTarget.value
    this.setState({ username })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.username}`)
  }

  render() {
    return (
      <div className="poke">
        <img className="pokemanz" src="http://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png"/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up pokemon</button>
          </div>
        </form>

        <Route exact path='/pokemon' render={() => (
          <h3>Please enter a pokemon to search on PokemonAPI</h3> 
        )} />
        <Route path='/pokemon/:username' component={GithubUser} />
      </div>
    )
  }
}

export default Pokemon