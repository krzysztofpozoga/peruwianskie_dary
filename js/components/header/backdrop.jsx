import React from 'react';
import ReactDOM from 'react-dom';

class Backdrop extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      this.props.show ? <div className='backdrop' onClick={this.props.hideMenu}></div> : null
    )
  }
}

export default Backdrop;
