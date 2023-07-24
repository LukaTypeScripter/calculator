
import { CALCULATE, CLEAR, DEL, SET_DECIMAL, SET_NUMBER, SET_OPERATOR } from "../actions/action";

export const initialState = {
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

export const calculatorReducer = (state: AppState, action: { type: string; payload?: Payload }): AppState => {
    const { type, payload } = action; 
    switch (type) {
      case SET_NUMBER:
        const newValue =
          state.currentValue === '0' ? (payload?.num ?? '0') : state.currentValue + (payload?.num ?? '');
        return {
          ...state,
          currentValue: newValue,
        };
        case SET_OPERATOR:
          const newOperator = payload?.operator ?? null;
          return {
            ...state,
            previousValue: state.currentValue,
            currentValue: '0',
            operator: newOperator
          };
        return state;
        case CALCULATE:
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
          }
        return state;
      case CLEAR:
        return initialState
        return state;
        case DEL:
          const newValues = state.currentValue.slice(0,-1)
          return {
            ...state,
            currentValue: state.currentValue === '' ? '0':   newValues
          }
          return state;
          case SET_DECIMAL:
            if(!state.currentValue.includes('.')) {
              return {
                ...state,
                currentValue: state.currentValue + '.'
              }
            }
            return state
      default:
        return state;
    }
  };

