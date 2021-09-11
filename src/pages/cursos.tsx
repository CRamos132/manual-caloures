import { Flex } from '@chakra-ui/react'
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
            </Flex>
        </Page>
    )
}