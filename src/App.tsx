import { useReducer, useState } from 'react'
import  { ThemeProvider } from 'styled-components';
import { theme1,theme2,theme3 } from './DefaultStyles';
import { calculatorReducer, initialState } from './reducers/CalculateReducer';
import { MainCont } from './styled/main';
import Grid from './components/grid';
import Inputs from './components/Inputs';
import { CALCULATE, CLEAR, DEL, SET_DECIMAL, SET_NUMBER, SET_OPERATOR } from './actions/action';
export type ThemeName = 'theme1' | 'theme2' | 'theme3';
function App() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const [selectedCheckbox, setSelectedCheckbox] = useState<ThemeName>('theme1');
  const handleCheckboxChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCheckbox(event.target.id as ThemeName);
  };
  const themes = {
    theme1,
    theme2,
    theme3,
  };
 const handleNumberClick = (num: string) => {
    dispatch({ type: SET_NUMBER, payload: { num } });
  };

   const handleOperatorClick = (operator: string) => {
    dispatch({ type: SET_OPERATOR, payload: { num: '', operator } });
  };

 const handleEqualClick = () => {
    dispatch({ type: CALCULATE });
  };

 const handleClearClick = () => {
    dispatch({ type: CLEAR });
  };
 const handleDelateClick = () => {
    dispatch({ type: DEL });
  };
 const handleDecimalClick = () => {
    dispatch({ type: SET_DECIMAL });
  };
  return (
    <ThemeProvider theme={
      themes[selectedCheckbox]
    } >

    <div style={{width:"100%",height:"100vh",backgroundColor:themes[selectedCheckbox].mainBackground,display:'flex',justifyContent:"center",alignItems:"center" ,flexDirection:'column'}}>
    <MainCont prev={state.previousValue} theme={themes[selectedCheckbox]}>
      <div className='header'>
        <h1>Calc</h1>
        <p>THEME</p>
     <Inputs selectedCheckbox={selectedCheckbox} handleCheckboxChange={handleCheckboxChange}/>
      </div>
      <div className='user__input'>
      <div>{state.currentValue}</div>
      <div className="prevs">{state.previousValue}{state.operator}</div>
      </div>
      <Grid handleNumberClick={handleNumberClick}
      handleOperatorClick={handleOperatorClick}
      handleEqualClick={handleEqualClick}
      handleClearClick={handleClearClick}
      handleDelateClick={handleDelateClick}
      handleDecimalClick={handleDecimalClick}
      />
    </MainCont>
    </div>
    </ThemeProvider>
  )
}



export default App
