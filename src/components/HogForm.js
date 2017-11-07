import React from 'react'

class HogForm extends React.Component {
  constructor(props) {
    super(props)
    /* props = {
      changeFilter("selection"): function from HogContainer
      myOptions = [select options]
    }
    */
  }

  onSelection = (ev) => {
    this.props.changeFilter(ev.target.value)
  }

  render() {
    let selectOptions = this.props.myOptions.map(o => (
      <option value={o}>{o}</option>
    ))
    return(
        <select onChange={this.onSelection}>
          {selectOptions}
        </select>
    )
  }
}

export default HogForm
