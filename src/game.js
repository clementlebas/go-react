import React from 'react';
import Board from './board';

// TODO: factoriser
// TODO: proptypes
class Game extends React.Component {
  constructor(props) {
    super(props);
    const sizeGoban = 10;

    const goban = this.buildGoban(sizeGoban)
    
    this.state = {
      blackIsNext: true,
      size: sizeGoban,
      values: goban,
      isSkip: false,
    }
  }


  buildGoban = size => Array(size).fill(Array(size).fill(null));

  valueSelected = (row, col, newValue) => {

    const {values} = this.state;

    return [
      ...values.slice(0, row),
      [
        ...values[row].slice(0, col),
        newValue,
        ...values[row].slice(col + 1),
      ],
      ...values.slice(row + 1),
    ]
  }

  addValues = (row, col) => {
    const {values, blackIsNext} = this.state;

    if (values[row][col]) return;

    const nextValue = blackIsNext ? 'W' : 'B';

    this.setState({
      values: this.valueSelected(row, col, nextValue),
      isSkip: false,
    });

    this.changePlayer();
  }

  changePlayer = () => {
    const {blackIsNext} = this.state;

    this.setState ({
      blackIsNext: !blackIsNext,
    })
  }

  resetGame = () => {
    const {size} = this.state;

    this.setState ({
      blackIsNext: false,
      values: this.buildGoban(size),
    })
  }

  changeSize = size => {
    this.resetGame();

    this.setState({
      size,
      values: this.buildGoban(size),
    })
  }

  deleteValue = (e, row, col) => {
    e.preventDefault();

    this.setState({values: this.valueSelected(row, col, null)});
  }

  skipTurn = () => {
    const {isSkip} = this.state;

    if(isSkip) {
      this.resetGame();
    } else {
      this.changePlayer();
    }

    this.setState({isSkip: true})
  }

  render() {
    const {values, size} = this.state;

    return (

      <div className='game'>
        <Board
          className='hiddenBoard'
          size={size}
          isClickable
          values={values}
          addValues={this.addValues}
          deleteValue={this.deleteValue}
        />
        <Board
          className='frontBoard'
          size={size-1}
        />
        <div className="gameButton">
          <button 
            className="Skip"
            onClick={this.skipTurn}
          >
          Skip
          </button>

          <button 
            className="reset"
            onClick={this.resetGame}
          >
          Reset
          </button>

          <button
            className="nineSize"
            onClick={() => this.changeSize(10)}
          >
          9x9
          </button>

          <button
            className="thirteenSize"
            onClick={() => this.changeSize(14)}
          >
          13x13
          </button>

          <button
            className="nineteenSize"
            onClick={() => this.changeSize(20)}
          >
          19x19
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
