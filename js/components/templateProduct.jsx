import React from 'react';

class TemplateProduct extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const childWithProp = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {searchText: this.props.searchText});
      });
    return (
      <div>
        {childWithProp}
      </div>
    )
  }
}

export default TemplateProduct;
