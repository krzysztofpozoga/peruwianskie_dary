import React from 'react';

class TemplateProduct extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let childWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { link: this.props.link }));
    return (
      <div>
        {childWithProps}
      </div>
    )
  }
}

export default TemplateProduct;
