import { Box, Flex } from '@chakra-ui/react'
import Body from '../components/Body'
import Button from '../components/Button'
import Header from '../components/Header'
import Page from '../components/Page'
import Video from '../components/Video'


export default function Introducao() {
    return (
        <Page>
            <Flex
                width='100%' 
                direction='column' 
                alignItems='center'
                padding='16px'
            >
                <Header as='h1' color='#FE91FE' marginBottom='30px'>
                    Introdução
                </Header>
                <Video src='/videos/intro.mp4' />
                <Body>
                    Criado pelos alunos Heitor Ramos, Joana Vianna e 
                    Renan Vieira, orientado pelos professores Bruno 
                    Panerai Velloso e Saionara Figueiredo e 
                    contemplado pelo Edital PROEX 03_2019 o Manual 
                    de Caloures Bilíngue tem como objetivo reunir 
                    algumas informações importantes sobre o IFSC 
                    Palhoça Bilíngue e para que dessa forma você 
                    possa aproveitar as atividades, serviços e 
                    oportunidades que o Campus oferece.
                </Body>
                <Button as='a' to='/'>Volte para o menu &gt;</Button>
            </Flex>
        </Page>
    )
}