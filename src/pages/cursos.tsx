import { Flex } from '@chakra-ui/react'
import Body from '../components/Body'
import Button from '../components/Button'
import Header from '../components/Header'
import Page from '../components/Page'

export default function Cursos() {
    return (
        <Page>
            <Flex
                width='100%' 
                direction='column' 
                alignItems='center'  
                gridRowGap='25px'
                padding='16px'
            >
                <Header as='h1' text='Cursos' color='#BE61CB' />
                <Body>
                    No Campus Palhoça Bilíngue são ofertados cursos de 
                    diversas modalidades: técnicos integrados, cursos 
                    de graduação e pós graduação, entre outros.
                </Body>
                <Button as='a' to='/'>Volte para o menu &gt;</Button>
            </Flex>
        </Page>
    )
}