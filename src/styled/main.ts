import styled from "styled-components";
import { Theme } from "../DefaultStyles";



export const MainCont = styled.main<{prev:string | null,theme:Theme}> `
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
        color: ${props => props.theme.textDark === "hsl(221, 14%, 31%)" ?  "white" : props.theme.textDark };
    position: absolute;
    left: -90px;
    top: -15px;
      }
      p {
        align-items: center;
        font-size: 13px;
        color: ${props => props.theme.textDark === "hsl(221, 14%, 31%)" ?  "white" : props.theme.textDark };
    position: relative;
    left: 70px;
    font-weight: 700;
      }
    }
    .inputs {
      height: 30px;
    width: 80px;
    border-radius: 30px;
    background-color: ${props => props.theme.keypadBackground};
    position: relative;
    left: 90px;
    }
  
#theme1 {
  background-color: var(--bg-result-toggle-key);
  appearance: none;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 30px;
    top: 7px;
    transition: 0.5s;
    left: 10px
}
#theme1:checked {
  background-color: ${props => props.theme.redKeyBackground};

}
#theme2 {
  background-color: var(--bg-result-toggle-key);
    appearance: none;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 30px;
    top: 7px;
    transition: 0.5s;
    left: 33px;
}
#theme2:checked {

  background-color: ${props => props.theme.redKeyBackground};
}
#theme3 {
  background-color: var(--bg-result-toggle-key);
  appearance: none;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 30px;
    top: 7px;
    transition: 0.5s;
    left: 55px;
}
 

#theme3:checked {
  background-color: ${props => props.theme.redKeyBackground};
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
    background-color: ${props => props.theme.screenBackground};
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
    div {
      color: ${props => props.theme.textDark === "hsl(221, 14%, 31%)" ?  "white" : props.theme.textDark };
    }
  }

  .grid {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4,70px);
    grid-template-rows: repeat(5,70px);
    background-color: ${props => props.theme.keypadBackground};
    padding: 15px 10px;
    @media only screen and (min-width: 1200px){
      grid-template-columns: repeat(4,85px);
    grid-template-rows: repeat(5,65px);
    }
    button {
      margin: 0 8px;
    padding: 8px 0;
    border-radius: 5px;
    border: none;
    background-color: ${props => props.theme.orangeKeyBackground};
    color: ${props => props.theme.textDark};
    box-shadow: 0 5px ${props => props.theme.keyShadow};
  
    }
    
  }
  button:nth-child(17), button:nth-child(4) {
    background-color: ${props => props.theme.keyBackground};
    box-shadow: 0 5px  ${props => props.theme.keyShadow};
    color: var(--text-white);
    font-size: 18px;
    padding: 17px 0;

  }
  button:nth-child(17) {
    width: 110px;
  }
  button:nth-child(18) {
    background-color: ${props => props.theme.redKeyBackground};
    box-shadow: 0 5px ${props => props.theme.redKeyShadow};
    color: white;
    width: 140px;
    margin-left: 60px;
}
.prevs {
  font-size: ${props => props.prev ? "13px" : ""};
}
`