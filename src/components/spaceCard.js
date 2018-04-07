import React, {Component} from 'react'
import SpaceDetail from './SpaceDetail'


export default class SpaceCard extends Component{

  state = {
    clicked: false,
    show: true
  }

  checkMediaType = () => {
    return this.props.datum.media_type === "image" ? this.props.image : "https://i.imgur.com/ajhCvuN.jpg?1"
  }

  showDetail = () => {
    return (this.state.clicked) ? <SpaceDetail key={this.props.id} datum={this.props.datum} /> : this.showImage()
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  showImage = () => {
    return (<div className='ui centered image'>
      <img src={this.checkMediaType()}></img>
    </div>)
  }

  handleDelete = (e) => {
    console.log(e.target.parentNode.parentNode);
    e.target.parentNode.parentNode.style.display = 'none';
    this.setState({
      show: false
    })
  }



  render(){
    // console.log(this.props);
    return (
      <div className="ui centered card">
        <div className="spaceCard">
          <div className="ui centered header">
            <h4>{this.props.datum.title}</h4>
          </div>
          <div className="description" onClick={this.handleClick}>
            {this.showDetail()}
          </div>
        </div>
        <div className="extra content">
          <button className="ui negative basic button" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    )
  }

}
