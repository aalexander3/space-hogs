import React from 'react';



const SpaceDetail = (props) => {
  console.log(props);
  return(
    <div>
      {(props.datum.description.length > 300) ? props.datum.description.slice(0,300) + `...` : props.datum.description }
    </div>
  )
}


export default SpaceDetail
