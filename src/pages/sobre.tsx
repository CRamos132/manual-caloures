import { Box, Flex } from '@chakra-ui/react'
import Body from '../components/Body'
import Button from '../components/Button'
import Header from '../components/Header'
import Page from '../components/Page'
import Title from '../components/Title'
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
                <Title>
                    Sobre
                </Title>
                <Video src='/videos/intro.mp4' />
                <Body>
                    Criado em 2019 pelos alunos Heitor Ramos, Joana 
                    Vianna e Renan Vieira, orientados pelos 
                    professores Bruno Panerai Velloso e Saionara 
                    Figueiredo e contemplado pelo Edital 
                    PROEX 03_2019 o Manual de Caloures Bilíngue 
                    tem como objetivo reunir algumas informações 
                    importantes sobre o IFSC Palhoça Bilíngue e para 
                    que dessa forma você possa aproveitar as 
                    atividades, serviços e oportunidades que o Campus 
                    oferece.
                </Body>
                <Body>
                    Em 2021 os alunos Heitor Ramos e Luisa Juskow, 
                    orientados pelo professor Bruyno Panerai Velloso
                    revisaram o projeto visando aplicar o resultado da
                    pesquisa desenvolvida sob o [nome do edital de pesquisa]
                    tendo como objetivo encontrar práticas para o
                    desenvolvimento de plataformas mais acessíveis.
                </Body>
                <Button as='a' to='/'>Volte para o menu &gt;</Button>
            </Flex>
        </Page>
    )
}