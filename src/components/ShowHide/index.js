// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstCard: false,
    lastCard: false,
  }

  onFirstName = () => {
    this.setState(prevState => ({firstCard: !prevState.firstCard}))
  }

  onLastName = () => {
    this.setState(prevState => ({lastCard: !prevState.lastCard}))
  }

  render() {
    const {firstCard, lastCard} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-cont">
          <div className="card-cont">
            <button className="button" onClick={this.onFirstName} type="button">
              Show/Hide Firstname
            </button>
            {firstCard ? <p className="name">Joe</p> : null}
          </div>
          <div className="card-cont">
            <button className="button" onClick={this.onLastName} type="button">
              Show/Hide Lastname
            </button>
            {lastCard ? <p className="name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
