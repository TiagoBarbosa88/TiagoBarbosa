import styled from "styled-components"

import { AiOutlineMail } from "react-icons/ai"
import { ImWhatsapp } from 'react-icons/im'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-left: 50px;

  @media screen and (max-width:880px){
    margin-left: 0;
  }
  @media screen and (max-width:555px){
    width: 330px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 100px 0;
`

export const Input = styled.input`
  font-weight: 400;
  font-size: 15px;
  color: #ececec;
  margin-bottom: 12px;
  border-radius: 6px;
  padding: 20px;
  width: 100%;
  border: 2px solid #00bfff;
  outline: none;
  background: transparent;
`

export const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  color: #00bfff;
  background: transparent;
  border: 2px solid #00bfff;
  border-radius: 4px;
  width: 6.5rem;
  height: 37px;
  margin-top: 15px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #ececec;
    color: #00bfff;
  }

  &:active {
    opacity: 0.7;
  }
`

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 55px;
`

export const ContainerItem = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (max-width:880px){
    flex-direction: column-reverse;
    gap: 30px;
  }
 
`

export const TextArea = styled.textarea`
  width: 100%;
  color: #ececec;

  font-weight: 400;
  font-size: 15px;
  padding: 17px;
  border-radius: 6px;

  height: 145px;
  border: 2px solid #00bfff;
  outline: none;
  background: transparent;
`

export const IconEmail = styled(AiOutlineMail)`
  width: 33px;
  height: 33px;
  color: #00bfff;
  margin-top: 6px;
`
export const IconWhatsapp = styled(ImWhatsapp)`
  width: 33px;
  height: 33px;
  color: #00bfff;
  margin-top: 6px;
`
export const Info = styled.div`
  display: flex;
  gap: 13px;
  
/* 
  @media screen and (max-width:880px){
    display: none;
  } */

  .informacoes-contato {
    display: flex;
    flex-direction: column;
  }
`

export const BoxSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`
