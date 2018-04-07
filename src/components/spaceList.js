import React, {Component} from 'react'
import SpaceCard from './spaceCard'


const SpaceList = (props) => {

  const spaceMap = () => {
    return props.data.slice(0,20).map((datum) => {
      return <SpaceCard key={datum.data[0].nasa_id} datum={datum.data[0]} id={datum.data[0].nasa_id} image={datum.links ? datum.links[0].href : "https://i.imgur.com/ajhCvuN.jpg?1"} />
    })
  }

  return(
    <div className="ui cards">
      {spaceMap()}
    </div>
  )

}

export default SpaceList
