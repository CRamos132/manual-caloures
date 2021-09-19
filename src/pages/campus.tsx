import { Flex, Box } from '@chakra-ui/react'
import Body from '../components/Body'
import Button from '../components/Button'
import Header from '../components/Header'
import Page from '../components/Page'
import Title from '../components/Title'
import Video from '../components/Video'

export default function Campus() {
    return (
        <Page>
            <Flex
                width='100%' 
                direction='column' 
                alignItems='center'
                padding='16px'
            >
                <Title textColor='#49DA85'>
                    Câmpus
                </Title>
                <Video src='/videos/campus.mp4' />
                <Body>
                    O Campus Palhoça Bilíngue, fundado em 2013, é a primeira 
                    unidade da Rede Federal de Educação Profissional e 
                    Tecnológica na modalidade bilíngue (Libras/Português), 
                    é também o primeiro especializado na educação de surdos 
                    da América Latina e traz uma política de ensino, pesquisa
                    e extensão que busca viabilizar uma efetiva interação 
                    entre surdos e ouvintes no campo educacional e profissional.
                </Body>
                <Button as='a' to='http://palhoca.ifsc.edu.br/' shadowColor='#49DA85' marginBottom='30px'>Site do câmpus</Button>
                <Button as='a' to='/'>Volte para o menu &gt;</Button>
            </Flex>
        </Page>
    )
}