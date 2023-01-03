import React from 'react'

import Foto from './assets/profile-pic.png'
import * as C from './styles/styles'
import NavBar from './components/NavBar/index'
import Carousel from './components/CarouselProjects/index'
import ShowTecnologias from './components/Tecnologias'
import ContactForm from './components/Form'
import HeaderTelaResponsiva from './components/NavBar-Responsivo'
import Pdf from './assets/TIAGO BARBOSA.pdf'

function App() {
  return (
    <C.Container>
      <HeaderTelaResponsiva
        scrollInicio='#home'
        scrollTecnol='#habilidades'
        scrollProjetos='#projetos'
        scrollForm='#formulario'
      />
      <span id='home'></span>
      <NavBar
        scrollInicio='#home'
        scrollTecnol='#habilidades'
        scrollProjetos='#projetos'
        scrollForm='#formulario'
      />

      <C.AboutMe>
        <C.Info>
          <C.Typography
            primary='#a2a2ad'
            fontWeight='500'
            size='18px'
            lineHeight='31px'
          >
            Olá eu sou
          </C.Typography>
          <C.TextName>
            Tiago Barbosa
          </C.TextName>
          <div className='box-textAnimation'>
            <C.TextAnimation>Desenvolvedor Front-End </C.TextAnimation>
          </div>

          <C.Text width='130px' size='18px'>
            Bem-vindo ao meu portfólio, sou programador Front-End. <br />
            Iniciei na programação em março de 2020 por meio da faculdade Estácio de Sá,
            em um curso tecnológico FullStack de Análise e Desenvolvimento de Sistemas. 
            No momento estou focando no desenvolvimento Front-end, estudando React,
            Angular, aprimorando minhas habilidades com javaScript e começando os estudos em typeScript.
          </C.Text>
          <C.Div>
            <C.ButtonCv href={Pdf} download={Pdf} type='application/pdf'>
              Download CV <C.Download />
            </C.ButtonCv>
            <C.LinkContact href='#formulario'>
              Contate-me <C.Arrow />
            </C.LinkContact>
          </C.Div>
          <C.SocialNetwork>
            <a target='_blank' href='https://github.com/TiagoBarbosa88'>
              <C.IconGit />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/tiagolimabarbosa/'
            >
              <C.IconLinkedin />
            </a>
            <a target='_blank' href='mailto:tiagobarbosa.dev@gmail.com'>
              {' '}
              <C.IconEmail />
            </a>
          </C.SocialNetwork>
        </C.Info>
        <C.BordaImg>
          <img className='foto' src={Foto} alt='Foto minha' />
        </C.BordaImg>
      </C.AboutMe>
      <span id='habilidades'></span>
      <ShowTecnologias />
      <span id='projetos'></span>
      <Carousel />
      <sapn id='formulario'></sapn>
      <ContactForm />
      <C.Footer>
        <C.P>Portfólio - <span>Tiago Barbosa &copy; 2022</span></C.P>        
        <C.LinksFooter>
          <a
            className='icon'
            target='_blank'
            href='https://github.com/TiagoBarbosa88'
          >
            <C.IconGit />
          </a>
          <a
            className='icon'
            target='_blank'
            href='https://www.linkedin.com/in/tiagolimabarbosa/'
          >
            <C.IconLinkedin />
          </a>
          <a
            className='icon'
            target='_blank'
            href='mailto:tiagobarbosa.dev@gmail.com'
          >
            {' '}
            <C.IconEmail />
          </a>
        </C.LinksFooter>
      </C.Footer>
    </C.Container>
  )
}

export default App
