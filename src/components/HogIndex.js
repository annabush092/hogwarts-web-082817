import React from 'react';
import Hog from './HogTile';

function HogIndex(props) {
  const allHogs = props.hogs.map((hog, i) => (
    <Hog
      key={i}
      name={hog.name}
      specialty={hog.specialty}
      greased={hog.greased}
      weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
      medal={hog['highest medal achieved']}/>
  ))

  return(
    <div className="ui grid container">
      {allHogs}
    </div>
  )
}

export default HogIndex
