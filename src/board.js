import React from 'react';
import Square from './square';
import PropTypes from 'prop-types';

class Board extends React.Component {
  render() {
    const {
      size,
      className,
      isClickable,
      values,
      addStone,
      removeStone,
    } = this.props;
    
    const squareClass = isClickable ? 'clickable' : 'notClickable';
    
    
    return(
      <div className={className}>
          {
            [...Array(size)].map((element, row) => {
              return (
                <div className='line' key={row}>
                {
                  [...Array(size)].map((element2, col) => {
                    return (
                      <Square 
                        className={squareClass} 
                        key={col}
                        value={values && values[row][col]}
                        addStone={() => addStone(row, col)}
                        removeStone={(e) => removeStone(e, row, col)}
                      >
                      </Square>
                    )
                  })
                }
                </div>
              )
            })
          }
      </div>
    )
  }
}

Board.defaultProps = {
  isClickable: false,
};

Board.propTypes = {
  size: PropTypes.number.isRequired,
  className: PropTypes.string,
  isClickable: PropTypes.bool,
  values: PropTypes.array,
  addStone: PropTypes.func,
  removeStone: PropTypes.func,
};

export default Board;
