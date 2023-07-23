import { useState } from 'react'

import styled, { ThemeProvider } from 'styled-components';
import { theme1 } from './DefaultStyles';
function App() {

  return (
    <ThemeProvider theme={theme1}>

    
    <MainCont>
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
      <div></div>
      <div></div>
      </div>
      <div className='grid'>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>DEL</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button>/</button>
      <button>x</button>
      <button>Reset</button>
      <button>=</button>
    
      </div>
    </MainCont>
    </ThemeProvider>
  )
}

const MainCont = styled.main `
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
`

export default App
