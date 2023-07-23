import { createGlobalStyle } from 'styled-components';

export const theme1 = {
  mainBackground: "hsl(222, 26%, 31%)",
  toggleBackground: "hsl(223, 31%, 20%)",
  keypadBackground: "hsl(223, 31%, 20%)",
  screenBackground: "hsl(224, 36%, 15%)",
  keyBackground: "hsl(225, 21%, 49%)",
  keyShadow: "hsl(224, 28%, 35%)",
  redKeyBackground: "hsl(6, 63%, 50%)",
  redKeyShadow: "hsl(6, 70%, 34%)",
  orangeKeyBackground: "hsl(30, 25%, 89%)",
  orangeKeyShadow: "hsl(28, 16%, 65%)",
  textDark: "hsl(221, 14%, 31%)",
  textWhite: "hsl(0, 0%, 100%)",
};

export const theme2 = {
  mainBackground: "hsl(0, 0%, 90%)",
  toggleBackground: "hsl(0, 5%, 81%)",
  keypadBackground: "hsl(0, 5%, 81%)",
  screenBackground: "hsl(0, 0%, 93%)",
  keyBackground: "hsl(185, 42%, 37%)",
  keyShadow: "hsl(185, 58%, 25%)",
  redKeyBackground: "hsl(25, 98%, 40%)",
  redKeyShadow: "hsl(25, 99%, 27%)",
  orangeKeyBackground: "hsl(45, 7%, 89%)",
  orangeKeyShadow: "hsl(35, 11%, 61%)",
  textDark: "hsl(60, 10%, 19%)",
  textWhite: "hsl(0, 0%, 100%)",
};

export const theme3 = {
  mainBackground: "hsl(268, 75%, 9%)",
  toggleBackground: "hsl(268, 71%, 12%)",
  keypadBackground: "hsl(268, 71%, 12%)",
  screenBackground: "hsl(268, 71%, 12%)",
  keyBackground: "hsl(281, 89%, 26%)",
  keyShadow: "hsl(285, 91%, 52%)",
  redKeyBackground: "hsl(176, 100%, 44%)",
  redKeyShadow: "hsl(177, 92%, 70%)",
  orangeKeyBackground: "hsl(268, 47%, 21%)",
  orangeKeyShadow: "hsl(290, 70%, 36%)",
  textDark: "hsl(52, 100%, 62%)",
  textWhite: "hsl(0, 0%, 100%)",
};

const GlobalStyles = createGlobalStyle`
  :root {
    /* Theme 1 */
    --main-background: ${theme1.mainBackground};
    --toggle-background: ${theme1.toggleBackground};
    --keypad-background: ${theme1.keypadBackground};
    --screen-background: ${theme1.screenBackground};
    --key-background: ${theme1.keyBackground};
    --key-shadow: ${theme1.keyShadow};
    --red-key-background: ${theme1.redKeyBackground};
    --red-key-shadow: ${theme1.redKeyShadow};
    --orange-key-background: ${theme1.orangeKeyBackground};
    --orange-key-shadow: ${theme1.orangeKeyShadow};
    --text-dark: ${theme1.textDark};
    --text-white: ${theme1.textWhite};

    /* Theme 2 */
    --main-background-2: ${theme2.mainBackground};
    --toggle-background-2: ${theme2.toggleBackground};
    --keypad-background-2: ${theme2.keypadBackground};
    --screen-background-2: ${theme2.screenBackground};
    --key-background-2: ${theme2.keyBackground};
    --key-shadow-2: ${theme2.keyShadow};
    --red-key-background-2: ${theme2.redKeyBackground};
    --red-key-shadow-2: ${theme2.redKeyShadow};
    --orange-key-background-2: ${theme2.orangeKeyBackground};
    --orange-key-shadow-2: ${theme2.orangeKeyShadow};
    --text-dark-2: ${theme2.textDark};
    --text-white-2: ${theme2.textWhite};

    /* Theme 3 */
    --main-background-3: ${theme3.mainBackground};
    --toggle-background-3: ${theme3.toggleBackground};
    --keypad-background-3: ${theme3.keypadBackground};
    --screen-background-3: ${theme3.screenBackground};
    --key-background-3: ${theme3.keyBackground};
    --key-shadow-3: ${theme3.keyShadow};
    --red-key-background-3: ${theme3.redKeyBackground};
    --red-key-shadow-3: ${theme3.redKeyShadow};
    --orange-key-background-3: ${theme3.orangeKeyBackground};
    --orange-key-shadow-3: ${theme3.orangeKeyShadow};
    --text-dark-3: ${theme3.textDark};
    --text-white-3: ${theme3.textWhite};
  }

  body {
    height: 100vh;
    background-color: var(--main-background);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default GlobalStyles;