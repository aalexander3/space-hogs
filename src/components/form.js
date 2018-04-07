import React from 'react';

const Form = (props) => {

  return(
    <div className="formNav">

      <h1 id='nav_header' className="ui dividing centered header">Space Hogs</h1>
      <div className="ui icon input">
      <br/><br/>
      <input onChange={props.handleChange} type="text" placeholder="Search Space Stuff" value={props.spaceValue}></input>
      <i onClick={props.searchSpace} className="circular search link icon"></i>
    </div>
  </div>
  )
}

export default Form;
