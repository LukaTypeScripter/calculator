
interface Props {
    handleNumberClick: (num: string) => void
    handleOperatorClick: (operator: string) => void
    handleEqualClick: () => void
    handleClearClick: () => void
    handleDelateClick: () => void
    handleDecimalClick: () => void
}
function Grid({handleNumberClick,handleOperatorClick,handleEqualClick,handleClearClick,handleDelateClick,handleDecimalClick}:Props) {
  
  return (
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
      <button onClick={handleDecimalClick}>.</button>
      <button onClick={() => handleNumberClick('0')}>0</button>
      <button onClick={() => handleOperatorClick('/')}>/</button>
      <button onClick={() => handleOperatorClick('x')}>x</button>
      <button onClick={handleClearClick}>Reset</button>
      <button onClick={handleEqualClick}>=</button>
    
      </div>
  )
}

export default Grid