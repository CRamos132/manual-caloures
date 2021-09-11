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
          <Header as='a' text='Introdução' color='#FE91FE' />
        </NextLink>
        <NextLink passHref href='/campus'>
          <Header as='a' text='Câmpus' color='#49DA85' />
        </NextLink>
        <NextLink passHref href='/cursos'>
          <Header as='a' text='Cursos' color='#BE61CB' />
        </NextLink>
        <NextLink passHref href='/assistencia'>
          <Header as='a' text='Assistência estudantil' color='#7CC7FE' />
        </NextLink>
        <NextLink passHref href='/oportunidades'>
          <Header as='a' text='Oportunidades' color='#FE5D3C' />
        </NextLink>
        <NextLink passHref href='/palhoca'>
          <Header as='a' text='Palhoça' color='#FED101' />
        </NextLink>
        <NextLink passHref href='/sobre'>
          <Header as='a' text='Sobre' color='#FED101' />
        </NextLink>
      </Flex>
    </Page>
  )
}

export default Home
