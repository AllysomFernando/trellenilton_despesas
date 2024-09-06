import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

@font-face {
  font-family: "Roboto";
  src: url("../public/fonts/roboto/Roboto-Medium.ttf") format("ttf"),
    url("../public/fonts/roboto/Roboto-Light.ttf") format("ttf"),
    url("../public/fonts/roboto/Roboto-Regular.ttf") format("ttf"),
    url("../public/fonts/roboto/Roboto-Bold.ttf") format("ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
}

html {
	overflow-y: scroll;
}

body {
  font-family: 'Raleway';
  font-size: 18px;
  color: ${theme.colors.white} !important;
  background-color: ${theme.colors.third};
  width: 100%;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 40px;
  padding: 80px 30px;

  scrollbar-gutter: stable both-edges;

  @media (max-width: 640px) {
    gap: 20px;
    padding: 0px 0px;
    font-size: 16px;
  }
}

hr {
  margin: 20px 0px;
  background-color: #6c757d;
  width: 100%;
}

h1,
h2,
h3 {
  width: 100%;
  font-family: 'Raleway';
  font-weight: bold;
  margin: 0;
}

h1 {
  font-size: ${theme.font.size.large};

  @media (max-width: 640px) {
    font-size: 26px;
  }
}

h2 {
  text-align: left;
  font-size: ${theme.font.size.medium};
  
  @media (max-width: 640px) {
    font-size: 22px;
  }
}

h3 {
  font-size: 22px;

  @media (max-width: 640px) {
    font-size: 18px;
  }
}

h4 {
  width: 100%;
  font-size: 20px;
  @media (max-width: 640px) {
    font-size: 16px;
  }
}

button {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 18px;
  gap: 14px;
  border-radius: 5px;
  border: none;
  background-color: ${theme.colors.blue};
  cursor: pointer;
  color: ${theme.colors.white};
  outline: none !important;
  min-height: 44px;

  &:hover {
    background-color: ${theme.colors.hoverBlue};
  }

  &.danger {
    background-color: ${theme.colors.red};

    &:hover {
      background-color: ${theme.colors.hoverRed};
    }
  }

  &.success {
    background-color: ${theme.colors.green};

    &:hover {
      background-color: ${theme.colors.hoverGreen};
    }
  }

  @media (max-width: 640px) {
    padding: 8px 18px;
    font-size: 18px;
  }
}

button img {
  height: 20px;

  @media (max-width: 640px) {
    height: 14px;
  }
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0;
}

a {
  color: ${theme.colors.white};
}

a:hover {
  text-decoration: none;
  color: ${theme.colors.white};
}

select {
  cursor: pointer;
}

input,
select {
  width: 100%;
  color: ${theme.colors.white};
  background-color: ${theme.colors.lightSecond};
  padding: 8px;
  border: none;
  border-radius: 5px;
  height: 40px;
}

input:focus::-webkit-input-placeholder {
  color: transparent !important;
}

input[type="file"]::-webkit-file-upload-button {
  visibility: hidden;
}

input[type="file"] {
  z-index: -99999;
  height: 0;
  padding: 2px;
}

input[type="radio"] {
  height: 16px;
  width: 16px;
}

table {
  width: 100%;
}

thead {
  width: 100%;
  font-weight: bold;
}

tbody {
  width: 100%;
}

td {
  padding: 4px 5px;
}

p {
  margin: 0;
}

form {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 18px;
  width: 100%;
}

label {
  margin: 0;
}

@keyframes entrance-popup {
	0% {
		transform: scale(0);
		transform-origin: 50% 100%;
	}

	100% {
		transform: scale(1);
		transform-origin: 50% 100%;
	}
}

@keyframes scale-center {
	0% {
		transform: scale(0);
	}

	100% {
		transform: scale(1);
	}
}

`

export default GlobalStyles
