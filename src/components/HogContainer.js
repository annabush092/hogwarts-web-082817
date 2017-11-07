import React from 'react';
import HogIndex from './HogIndex';
import HogForm from './HogForm'

class HogContainer extends React.Component {
  constructor(props) {
    super(props)
    /* props = {
        hogs: [{}, {}]
      }
    */
    this.myOptions = ["showGreased", "showUngreased", "sortByName", "sortByWeight"]
    this.state = {
      sortOrFilter: ""
    }
  }

  changeFilter = (selection) => {
    this.setState({sortOrFilter: selection})
  }

  whatToDisplay() {
    switch(this.state.sortOrFilter) {
      case this.myOptions[0]:
        return <HogIndex hogs={this.props.hogs.filter(h => (h.greased === true))}/>
      case this.myOptions[1]:
        return <HogIndex hogs={this.props.hogs.filter(h => (h.greased === false))}/>
      case this.myOptions[2]:
        break;
      case this.myOptions[3]:
        break;
      default:
        return <HogIndex hogs={this.props.hogs}/>
    }
  }

  render() {
    return (
      <div>
        <HogForm myOptions={this.myOptions} changeFilter={this.changeFilter}/>
        {this.whatToDisplay()}
      </div>
    )
  }
}

export default HogContainer;
