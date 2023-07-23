import { useReducer, useState } from 'react'

import styled, { ThemeProvider } from 'styled-components';
import { theme1 } from './DefaultStyles';
const initialState = {
  currentValue: '0',
  previousValue: null,
  operator: null,
};

interface Payload {
  num: string;
  operator?:string | null;
}

interface AppState {
  currentValue: string;
  previousValue: string | null;
  operator: string | null;
}
const calculatorReducer = (state: AppState, action: { type: string; payload?: Payload }): AppState => {
  const { type, payload } = action; 
  switch (type) {
    case 'SET_NUMBER':
      const newValue =
        state.currentValue === '0' ? (payload?.num ?? '0') : state.currentValue + (payload?.num ?? '');
      return {
        ...state,
        currentValue: newValue,
      };
      case 'SET_OPERATOR':
        const newOperator = payload?.operator ?? null;
        return {
          ...state,
          previousValue: state.currentValue,
          currentValue: '0',
          operator: newOperator
        };
      return state;
      case 'CALCULATE':
        const { currentValue, operator, previousValue } = state;
      
        if (!previousValue || !operator) {
          return state;
        }
      
        const parsedCurrentValue = parseFloat(currentValue);
        const parsedPreviousValue = parseFloat(previousValue);
      
        let result = 0;
        switch (operator) {
          case '+':
            result = parsedPreviousValue + parsedCurrentValue;
            break;
          case '-':
            result = parsedPreviousValue - parsedCurrentValue;
            break;
          case 'x':
            result = parsedPreviousValue * parsedCurrentValue;
            break;
          case '/':
            result = parsedPreviousValue / parsedCurrentValue;
            break;
          default:
            break;
        }
      
        return {
          ...state,
          currentValue: result.toString(),
          previousValue: null,
          operator: null,
        };
      
      return state;
    case 'CLEAR':
      return initialState
      return state;
      case 'DEL':
        const newValues = state.currentValue.slice(0,-1)
        return {
          ...state,
          currentValue: state.currentValue === '' ? '0':   newValues
        }
        return state;
    default:
      return state;
  }
};


function App() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  console.log(state.currentValue+ " current");
  console.log(state.previousValue+ " previousValue");
  console.log(state.operator+ " operator");
  const handleNumberClick = (num: string) => {
    dispatch({ type: 'SET_NUMBER', payload: { num } });
  };

  const handleOperatorClick = (operator: string) => {
    dispatch({ type: 'SET_OPERATOR', payload: { num: '', operator } });
  };

  const handleEqualClick = () => {
    dispatch({ type: 'CALCULATE' });
  };

  const handleClearClick = () => {
    dispatch({ type: 'CLEAR' });
  };
  const handleDelateClick = () => {
    dispatch({ type: 'DEL' });
  };
  return (
    <ThemeProvider theme={theme1}>

    
    <MainCont prev={state.previousValue}>
      <div className='header'>
        <h1>Calc</h1>
        <p>THEME</p>
        <div>
        <div className='inputs'>
      
          <input id='theme1' type="checkbox" />
          <label htmlFor="">1</label>
         
          <input id="theme2" type="checkbox" />
          <label htmlFor="">2</label>
         
          <input id="theme3" type="checkbox"  />
          <label htmlFor="">3</label>
          
        </div>
        </div>
      </div>
      <div className='user__input'>
      <div>{state.currentValue}</div>
      <div className="prevs">{state.previousValue}{state.operator}</div>
      </div>
      <div className='grid'>
      <button onClick={() => handleNumberClick('7')}>7</button>
      <button onClick={() => handleNumberClick('8')}>8</button>
      <button onClick={() => handleNumberClick('9')}>9</button>
      <button onClick={handleDelateClick}>DEL</button>
      <button onClick={() => handleNumberClick('4')}>4</button>
      <button onClick={() => handleNumberClick('5')}>5</button>
      <button onClick={() => handleNumberClick('6')}>6</button>
      <button onClick={() => handleOperatorClick('+')}>+</button>
      <button onClick={() => handleNumberClick('1')}>1</button>
      <button onClick={() => handleNumberClick('2')}>2</button>
      <button onClick={() => handleNumberClick('3')}>3</button>
      <button onClick={() => handleOperatorClick('-')}>-</button>
      <button onClick={() => handleOperatorClick('.')}>.</button>
      <button onClick={() => handleNumberClick('0')}>0</button>
      <button onClick={() => handleOperatorClick('/')}>/</button>
      <button onClick={() => handleOperatorClick('x')}>x</button>
      <button onClick={handleClearClick}>Reset</button>
      <button onClick={handleEqualClick}>=</button>
    
      </div>
    </MainCont>
    </ThemeProvider>
  )
}

const MainCont = styled.main<{prev:string | null}> `
      display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
    align-items: center;

    @media only screen and (min-width: 1200px){
      width: 350px;
    }
    .header {
      display: flex;
      position: relative;
      margin: 50px 0 10px;
      h1 {
        color: var(--text-white);
    position: absolute;
    left: -90px;
    top: -15px;
      }
      p {
        align-items: center;
        font-size: 13px;
    color: var(--text-white);
    position: relative;
    left: 70px;
      }
    }
    .inputs {
      height: 30px;
    width: 80px;
    border-radius: 30px;
    background-color: var( --keypad-background);
    position: relative;
    left: 90px;
    }
  
#theme1 {
  background-color: var(--bg-result-toggle-key);
  position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 30px;
    top: 7px;
    transition: 0.5s;
    left: 10px;
}
#theme2 {
  background-color: var(--bg-result-toggle-key);
  position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 30px;
    top: 7px;
    transition: 0.5s;
    left: 32px;
}
#theme3 {
  background-color: var(--bg-result-toggle-key);
  position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 30px;
    top: 7px;
    transition: 0.5s;
    right: 10px;
}
  label {
    top: -40px;
    font-size: 13px;
    color: var(--text-white);
    position: relative;
    left: 13px;
    color: var(--text-white);
    margin-right: 15px;
  }
  .user__input {
    background-color: var(--screen-background);
    width: 100%;
    height: 80px;
    border-radius: 10px;
    margin-bottom: 15px;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-right: 10px;
    color: white;
    overflow: hidden;
  }

  .grid {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4,70px);
    grid-template-rows: repeat(5,70px);
    background-color: var(--keypad-background);
    padding: 15px 10px;
    button {
      margin: 0 8px;
    padding: 8px 0;
    border-radius: 5px;
    border: none;
    background-color: var(--text-white);
    color: var(--text-dark);
    box-shadow: 0 5px var(--key-shadow);
    }
    
  }
  button:nth-child(17), button:nth-child(4) {
    background-color: var(--key-background);
    box-shadow: 0 5px var(--key-shadow);
    color: var(--text-white);
    font-size: 18px;
    padding: 17px 0;

  }
  button:nth-child(17) {
    width: 110px;
  }
  button:nth-child(18) {
    background-color: var(--red-key-background);
    box-shadow: 0 5px var( --red-key-shadow);
    color: white;
    width: 140px;
    margin-left: 60px;
}
.prevs {
  font-size: ${props => props.prev ? "13px" : ""};
}
`

export default App
