import React from 'react'
import Carousel from 'react-elastic-carousel'
import { Typography } from '../../styles/styles'
import { TbExternalLink } from 'react-icons/tb'
import { BsGithub } from 'react-icons/bs'

import * as C from './style'

import Todo from '../../assets/Todo-list.png'
import Calculadora from '../../assets/calculadora.png'
import Youtube_clone from '../../assets/youtube.png'
import Cronometro from '../../assets/cronometro.png'
import Controle from '../../assets/controle.png'
import Imc from '../../assets/conversor.png'
import RocketPay from '../../assets/rocket.png'
import TelaInsta from '../../assets/tela_instagran.png'
import Aniversario from '../../assets/quiz1.png'
import Netflix from '../../assets/tela_netflix.png'
import ControleFinanceiro from '../../assets/Cf.png'
import Todo_Angular from '../../assets/Todo_angular.png'
import Ecomerce_angular from '../../assets/Ecomerce_angular.png'
import Blog_angular from '../../assets/Blog_angular.png'
import Santander_clone from '../../assets/santander_clone.png'

const InfoProjects = [
  {
    name: 'Ecomerce em Angular',
    image: Ecomerce_angular,
    urlCode: 'https://github.com/TiagoBarbosa88/angular-store',
    urlSite: 'https://angular-store-six.vercel.app/products',
  },
   {
    name: 'Santander Client Angular',
    image: Santander_clone,
    urlCode: 'https://github.com/TiagoBarbosa88/Santander_devWeek/tree/main',
    urlSite: 'https://santander-dev-week.vercel.app/',
  },
  {
    name: 'Blog em Angular',
    image: Blog_angular,
    urlCode: 'https://github.com/TiagoBarbosa88/Api_blog',
    urlSite: 'https://api-blog-seven.vercel.app/',
  },
  {
    name: 'Clone da página do Netflix',
    image: Netflix,
    urlCode: 'https://github.com/TiagoBarbosa88/Projeto_DIO',
    urlSite: 'https://projeto-dio.vercel.app/',
  },

  {
    name: 'To do List em Angular',
    image: Todo_Angular ,
    urlCode: 'https://github.com/TiagoBarbosa88/Todo_Angular',
    urlSite: 'https://todo-angular-ecru.vercel.app/',

  },
  {
    name: 'Lista de Tarefas',
    image: Todo,
    urlCode: 'https://github.com/TiagoBarbosa88/To-Do',
    urlSite: 'https://tiagobarbosa88.github.io/To-Do/',
  },
  {
    name: 'Clone Youtube ',
    image: Youtube_clone,
    urlCode: 'https://github.com/TiagoBarbosa88/Imersao-Alura',
    urlSite: 'https://imersao-alura-9ar6.vercel.app/',
  },
  {
    name: 'Controle Financeiro',
    image: ControleFinanceiro,
    urlCode: 'https://github.com/TiagoBarbosa88/Controle_despesas',
    urlSite: 'https://controle-despesas-sigma.vercel.app/',
  },
  {
    name: 'Data de Aniversário',
    image: Aniversario,
    urlCode: 'https://github.com/TiagoBarbosa88/Data_Aniversario',
    urlSite: 'https://data-aniversario.vercel.app/',
  },
  {
    name: 'Calculadora ',
    image: Calculadora,
    urlCode: 'https://github.com/TiagoBarbosa88/Calculadora',
    urlSite: 'https://tiagobarbosa88.github.io/Calculadora/',
  },
  {
    name: 'Cronometro',
    image: Cronometro,
    urlCode: 'https://github.com/TiagoBarbosa88/cronometro',
    urlSite: 'https://cronometro-three.vercel.app/',
  },
  {
    name: 'Medidor de IMC',
    image: Imc,
    urlCode: 'https://github.com/TiagoBarbosa88/imc',
    urlSite: 'https://imc-tau.vercel.app/',
  },
  {
    name: 'RocketPay',
    image: RocketPay,
    urlCode: 'https://github.com/Viniciussilver/Dark_Mode',
    urlSite: 'https://viniciussilver.github.io/Dark_Mode/',
  },
  {
    name: 'Tela de login do Instagram',
    image: TelaInsta,
    urlCode: 'https://github.com/TiagoBarbosa88/explore-labs',
    urlSite: 'https://explorer-lab-kohl.vercel.app/',
  },
  {
    name: 'Em desenvolvimento :)',
    image: Controle,
    urlCode: 'https://github.com/Viniciussilver/FrontEnd_codeburger',
    urlSite: 'https://vercel.com/tiagobarbosadev-gmailcom/controle-financas',
  },
]

const CarouselProjects = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 1 },
    { width: 900, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ]

  return (
    <C.Container>
      <C.BoxTitle>
        <Typography
          align='center'
          size='15px'
          fontWeight='600'
          primary='#a2a2ad'
        >
          Portfolio
        </Typography>
        <Typography primary='#fff' size='25px' fontWeight='500'>
          Meus Projetos
        </Typography>
      </C.BoxTitle>

      <Carousel breakPoints={breakPoints} style={{ width: '87%' }}>
        {InfoProjects.map(item => (
          <C.ContainerItems key={item.id}>
            <div className='description'>
              <C.Image src={item.image} />
              <p className='title'>{item.name}</p>
            </div>

            <C.BoxLink>
              <C.LinkSite target='_blank' href={item.urlSite}>
                <TbExternalLink />
                Visite
              </C.LinkSite>
              <C.LinkGit target='_blank' href={item.urlCode}>
                <BsGithub />
                Code
              </C.LinkGit>
            </C.BoxLink>
          </C.ContainerItems>
        ))}
      </Carousel>
    </C.Container>
  )
}

export default CarouselProjects
