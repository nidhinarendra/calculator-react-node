import React from 'react';
import './index.css';

class App extends React.Component {
  state = {
    users: [],
    shownValue: '0',
    waitingForNext: false,
    operator: null
  };

  inputDecimal() {
    const { shownValue, waitingForNext } = this.state;
    if (waitingForNext) {
      this.setState({
        shownValue: '.',
        waitingForNext: false
      });
    } else {
      if (shownValue.indexOf('.') === -1) {
        this.setState({
          shownValue: shownValue + '.'
        });
      } else {
        alert('You cannot have more than one decimal point');
      }
    }
  }

  clearAll() {
    this.setState({
      shownValue: '0'
    });
  }

  inputNumber(number) {
    const { shownValue, waitingForNext } = this.state;
    if (waitingForNext) {
      this.setState({
        shownValue: String(number),
        waitingForNext: false
      });
    } else {
      this.setState({
        shownValue: shownValue === '0' ? String(number) : shownValue + number
      });
    }
  }

  operation(operator) {
    this.setState({
      waitingForNext: true,
      operator: operator
    });
  }

  render() {
    const { shownValue } = this.state;
    return (
      <div className="calculator">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div className="calculator-display">{shownValue}</div>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <button
                className="calculator-key key-clear"
                onClick={() => this.clearAll()}
              >
                AC
              </button>
            </div>
            <div className="digit-keys">
              <button
                className="calculator-key key-0"
                onClick={() => this.inputNumber(0)}
              >
                0
              </button>
              <button
                className="calculator-key key-dot"
                onClick={() => this.inputDecimal()}
              >
                ●
              </button>
              <button
                className="calculator-key key-1"
                onClick={() => this.inputNumber(1)}
              >
                1
              </button>
              <button
                className="calculator-key key-2"
                onClick={() => this.inputNumber(2)}
              >
                2
              </button>
              <button
                className="calculator-key key-3"
                onClick={() => this.inputNumber(3)}
              >
                3
              </button>
              <button
                className="calculator-key key-4"
                onClick={() => this.inputNumber(4)}
              >
                4
              </button>
              <button
                className="calculator-key key-5"
                onClick={() => this.inputNumber(5)}
              >
                5
              </button>
              <button
                className="calculator-key key-6"
                onClick={() => this.inputNumber(6)}
              >
                6
              </button>
              <button
                className="calculator-key key-7"
                onClick={() => this.inputNumber(7)}
              >
                7
              </button>
              <button
                className="calculator-key key-8"
                onClick={() => this.inputNumber(8)}
              >
                8
              </button>
              <button
                className="calculator-key key-9"
                onClick={() => this.inputNumber(9)}
              >
                9
              </button>
            </div>
          </div>
          <div className="operator-keys">
            <button
              className="calculator-key key-divide"
              onClick={() => this.operation('/')}
            >
              ÷
            </button>
            <button
              className="calculator-key key-multiply"
              onClick={() => this.operation('*')}
            >
              ×
            </button>
            <button
              className="calculator-key key-subtract"
              onClick={() => this.operation('-')}
            >
              −
            </button>
            <button
              className="calculator-key key-add"
              onClick={() => this.operation('+')}
            >
              +
            </button>
            <button
              className="calculator-key key-equals"
              onClick={() => this.operation('=')}
            >
              =
            </button>
          </div>
        </div>
        <div className="App">
          <h1>Users</h1>
          {this.state.users.map(user => (
            <div key={user.id}>{user.username}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
