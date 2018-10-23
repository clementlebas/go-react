import React from 'react';

class Square extends React.Component {
  render() {
    const {className, value, changeValue, deleteValue} = this.props;

    return (
      <div
        className={className}
        onClick={changeValue}
        onContextMenu={deleteValue}
      >
        {value && value}
      </div>
    );
  }
}

export default Square;
