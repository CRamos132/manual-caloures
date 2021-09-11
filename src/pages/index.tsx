import { Flex } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import Header from '../components/Header'
import Page from '../components/Page'

const Home: NextPage = () => {
  return (
    <Page>
       <Flex 
        as='nav'
        width='100%' 
        direction='column' 
        alignItems='center'  
        gridRowGap='25px'
        padding='16px'
      >
        <NextLink passHref href='/introducao'>
          <Header as='a' color='#FE91FE'>
            Introdução
          </Header>
        </NextLink>
        <NextLink passHref href='/campus'>
          <Header as='a' color='#49DA85'>Câmpus</Header>
        </NextLink>
        <NextLink passHref href='/cursos'>
          <Header as='a' color='#BE61CB'>
            Cursos
          </Header>
        </NextLink>
        <NextLink passHref href='/assistencia'>
          <Header as='a' color='#7CC7FE'>
            Assistência estudantil
          </Header>
        </NextLink>
        <NextLink passHref href='/oportunidades'>
          <Header as='a' color='#FE5D3C'>
            Oportunidades
          </Header>
        </NextLink>
        <NextLink passHref href='/palhoca'>
          <Header as='a' color='#FED101'>
            Palhoça
          </Header>
        </NextLink>
        <NextLink passHref href='/sobre'>
          <Header as='a' color='#FED101'>
            Sobre
          </Header>
        </NextLink>
      </Flex>
    </Page>
  )
}

export default Home
