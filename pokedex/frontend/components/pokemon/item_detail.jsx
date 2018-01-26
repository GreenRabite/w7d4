import React from 'react';

class ItemDetail extends React.Component{

  render() {
    const {item} = this.props;
    return (
      <h1>{item.name}</h1>
    );
  }
}

export default ItemDetail;
