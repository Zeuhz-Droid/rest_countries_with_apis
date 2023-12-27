import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --dark-Blue: hsl(209, 23%, 22%); //(Dark Mode Elements)
    --very-dark-blue: hsl(207, 26%, 17%); //(Dark Mode Background)
    --very-darker-blue: hsl(200, 15%, 8%); //(Light Mode Text)
    --dark-gray: hsl(0, 0%, 52%); //(Light Mode Input)
    --very-light-gray: hsl(0, 0%, 98%); //(Light Mode Background)
    --white: hsl(0, 0%, 100%); //(Dark Mode Text & Light Mode Elements)
    --primary-shadow: 0 -3px 4px 3px var(--dark-gray);
    --rect-shadow: 3px 3px 5px -4px var(--dark-gray);
}

body.dark-mode {
  --dark-Blue: hsl(209, 23%, 92%);
  --very-dark-blue: hsl(207, 26%, 87%);
  --very-darker-blue: hsl(200, 15%, 98%);
  --dark-gray: hsl(0, 0%, 100%);
  --very-light-gray: hsl(207, 26%, 17%);
  --white: hsl(209, 23%, 22%);
  --primary-shadow: 0 -3px 4px 3px var(--very-light-gray);
  --rect-shadow: 3px 3px 5px -4px var(--very-light-gray);
}



*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Nunito Sans', sans-serif;
  color: var(--very-darker-blue);
  background-color: var(--very-light-gray);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  font-weight: 300;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--very-light-gray);
  outline-offset: -1px;
}

`;

export default GlobalStyles;
