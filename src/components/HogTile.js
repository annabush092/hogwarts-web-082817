import React from 'react';

class HogTile extends React.Component {
  constructor(props) {
    super(props)
    this.myPic = props.name.toLowerCase().split(" ").join("_") + ".jpg"
    this.state = {
      showDetails: false
    }
  }

  handleClick = (ev) => {
    ev.preventDefault()
    this.state.showDetails ? this.setState({showDetails: false}) : this.setState({showDetails: true})
  }

  showDetails = () => {
    if(this.state.showDetails) {
      return (
        <ul>
          <li>Specialty: {this.props.specialty}</li>
          <li>Greased? {`${this.props.greased}`}</li>
          <li>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.weight}</li>
          <li>Highest medal achieved: {this.props.medal}</li>
        </ul>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="ui eight wide column">
        <h1>{this.props.name}</h1>
        <img src={require("../hog-imgs/" + this.myPic)} alt={this.props.name}/>
        <button onClick={this.handleClick}>
          {this.state.showDetails ? "Show me less please" : "Show me more!!!"}
        </button>
        {this.showDetails()}
      </div>
    )
  }
}

export default HogTile
