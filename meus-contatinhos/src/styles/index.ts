// src/styles/index.ts
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    justify-content: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Edu SA Hand", cursive;
  }

  body {
    background-color: rgb(243, 140, 193);
  }

  ul {
    list-style: none;
    padding: 0;
  }
`

export const Container = styled.div`
  max-width: 600px;
  margin: 80px auto;
  padding: 50px;
  background: #fff;
  color: rgb(230, 53, 144);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  font-size: 26px;
  text-align: center;
  margin-bottom: 30px;
  font-family: "Playwrite GB S", cursive;
`

export const FormGroup = styled.div`
  margin-bottom: 20px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-family: "Playwrite GB S", cursive;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgb(234, 155, 196);
  color: rgb(230, 53, 144);
`

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: rgb(246, 85, 160);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: "Playwrite GB S", cursive;

  &:hover {
    background-color: rgb(209, 43, 112);
  }
`

export const ContactList = styled.ul`
  margin-top: 30px;
`

export const ContactItem = styled.li`
  margin-bottom: 15px;
  padding: 12px;
  background-color: rgb(251, 126, 186);
  border-radius: 5px;

  p {
    margin: 4px 0;
  }
`
export const ContactCard = styled.li`
  margin-bottom: 15px;
  padding: 12px;
  background-color: rgb(251, 126, 186);
  border-radius: 5px;

  p {
    margin: 4px 0;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const SmallButton = styled.button`
  background-color: #fff;
  color: #d42f87;
  border: 1px solid #d42f87;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  font-family: "Playwrite GB S", cursive;

  &:hover {
    background-color: #ffe1f0;
  }
`
