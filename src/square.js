import React from 'react';

import whiteStone from './img/white_stone.png'
import blackStone from './img/black_stone.png'

class Square extends React.Component {
  render() {
    const {className, value, addValue, deleteValue} = this.props;

    return (
      <div
        className={className}
        onClick={addValue}
        onContextMenu={deleteValue}
      >
        {value && <img src={value === 'W' ? whiteStone : blackStone} className='stone' alt='stone' />}
      </div>
    );
  }
}

export default Square;
