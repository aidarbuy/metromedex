import React from 'react';
import Divider from 'material-ui/Divider';

export default React.createClass({
  render() {
    const { index, length } = this.props

    if (index < length - 1) {
      return <Divider  {...this.props} inset={false}/>;
    } else {
      return null
    }
  }
})