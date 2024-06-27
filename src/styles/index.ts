import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    }
`

export const AppContainer = styled.div`
  display: block;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`

export default EstiloGlobal

// body, html {
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #ccc;
//   }
