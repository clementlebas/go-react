import React from 'react';
import PropTypes from 'prop-types';

import whiteStone from './img/white_stone.png'
import blackStone from './img/black_stone.png'

class Square extends React.Component {
  render() {
    const {
      className, 
      value, 
      addStone, 
      removeStone
    } = this.props;

    return (
      <div
        className={className}
        onClick={addStone}
        onContextMenu={removeStone}
      >
        {value && <img src={value === 'W' ? whiteStone : blackStone} className='stone' alt='stone' />}
      </div>
    );
  }
}

Square.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  addStone: PropTypes.func,
  removeStone: PropTypes.func,
};

export default Square;
