import React from 'react';
import './css/UI.css'

class List extends React.Component{
  render(){
    return (
      <div className="list">
      <div className="title">{this.props.title}</div>
      <div className="desc">{this.props.desc}</div>
      </div>
    )
  }
}
export default List;
