import React from 'react';

class TemplateProduct extends React.Component {
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default TemplateProduct;
