import { Flex } from '@chakra-ui/react'
import Button from '../components/Button'
import Header from '../components/Header'
import Page from '../components/Page'

export default function Palhoca() {
    return (
        <Page>
            <Flex
                width='100%' 
                direction='column' 
                alignItems='center'  
                gridRowGap='25px'
                padding='16px'
            >
                <Header as='h1' text='Palhoça' color='#FED101' />
                <Button as='a' to='/'>Volte para o menu &gt;</Button>
            </Flex>
        </Page>
    )
}