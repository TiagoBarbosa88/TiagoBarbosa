import styled, { createGlobalStyle } from 'styled-components'

import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { FiDownload } from 'react-icons/fi'
import { BsArrowRightShort } from 'react-icons/bs'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

    }

    html {
      scroll-behavior: smooth;
    }

    ::-webkit-scrollbar{
      width: 10px;
      background-color: #1a1c1d ;
    }

    ::-webkit-scrollbar-thumb{
      background-color: #52525b;
      border-radius:6px;
    }
`

export const Container = styled.div`
  background-color: #1a1c1d;
  min-height: 100vh;
  .foto {
    border-radius: 50%;
    width: 340px;
    position: relative;
    bottom: 20px;
    right: 20px;
    padding: 0 2px;

    @media screen and (max-width: 555px) {
      width: 310px;
      bottom: 15px;
      right: 15px;
    }
  }
  .box-textAnimation {
    width: 265px;
    height: 30px;
    position: relative;
  }
`

export const AboutMe = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1080px) {
    flex-direction: column-reverse;
    height: 100%;
    padding-top: 70px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1080px) {
    align-items: center;
  }
`

export const Typography = styled.p`
  font-weight: ${props => props.fontWeight || '500'};
  font-size: ${props => props.size || '18px'};
  line-height: ${props => props.lineHeight || '27px'};
  color: ${props => props.primary || '#ececec'};
  text-align: ${props => props.align || 'none'};
  width: ${props => props.width || 'auto'};
  padding: ${props => props.padding || '0'};
`

export const TextAnimation = styled.p`
  margin-top: 5px;
  letter-spacing: 0.4px;
  font-weight: 300;
  font-size: 22.5px;
  color: #00bfff;
  position: absolute;

  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  overflow: hidden;
  padding-right: 2px;
  animation: typewriter 2.2s steps(20), blink 800ms steps(14) infinite normal;
  border-right: 2.5px solid #ececec;

  @keyframes typewriter {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink {
    from {
      border-color: #ececec;
    }
    to {
      border-color: transparent;
    }
  }
`

export const TextName = styled.p`
  color: #a2a2ad;
  line-height: 42px;
  font-weight: 900;
  font-size: 40px;

  @media screen and (max-width: 450px) {
    font-size: 37px;
    text-align: center;
  }
`

export const P = styled.p`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 18px;
  color: #ececec;
  font-weight: 500;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  padding: 20px;
  height: 120px;
  background-color: #363636;
  transition: 0.9s;

`

export const Text = styled.p`
  margin: 10px 0;
  color: #a2a2ad;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  width: 559px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  @media screen and (max-width: 620px) {
    width: 90%;
  }
`

export const LinksFooter = styled.div`
  display: flex;
  gap: 15px;
`

export const BordaImg = styled.div`
  border-radius: 23%;
  border: 1px solid #00bfff;
  border-radius: 50%;
  margin: 45px 0;
  background: transparent;
`

export const IconLinkedin = styled(FaLinkedin)`
  width: 30px;
  height: 30px;
  color: #ececec;
  margin-right: 25px;

  &:hover {
    opacity: 0.7;
  }
`

export const IconGit = styled(BsGithub)`
  margin-right: 25px;
  width: 30px;
  height: 30px;
  color: #ececec;

  &:hover {
    opacity: 0.7;
  }
`

export const IconEmail = styled(MdAlternateEmail)`
  width: 31px;
  height: 31px;
  color: #ececec;

  &:hover {
    opacity: 0.7;
  }
`

export const SocialNetwork = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  position: absolute;
  top: 36%;
  right: 3.5%;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const Download = styled(FiDownload)`
  width: 23px;
  height: 23px;
`

export const Arrow = styled(BsArrowRightShort)`
  height: 23px;
  width: 23px;
`

export const Div = styled.div`
  display: flex;
  gap: 14px;
  margin: 20px 0;
`
export const LinkContact = styled.a`
  font-weight: 400;
  font-size: 17px;
  color: #a2a2ad;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #a2a2ad;
  gap: 4px;
  padding: 12px;
  background-color: transparent;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.2s;
  text-decoration: none;

  &:hover {
    gap: 7px;
  }

  &:active {
    opacity: 0.6;
  }
`

export const ButtonCv = styled.a`
  font-weight: 400;
  font-size: 17px;
  color: #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 9px;
  background-color: #5fa8d2;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.5;
  }
`

