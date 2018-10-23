import React from 'react';
import Square from './square';

class Board extends React.Component {
  render() {
    const {
      size,
      className,
      isClickable,
      values,
      changeValues,
      deleteValue,
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
                        row={row}
                        col={col}
                        value={values && values[row][col]}
                        changeValue={() => changeValues(row, col)}
                        deleteValue={(e) => deleteValue(e, row, col)}
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

export default Board;