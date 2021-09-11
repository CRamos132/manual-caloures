import Image from 'next/image'
import NextLink from 'next/link'
import { Box, Flex } from "@chakra-ui/layout";

interface IProps {
    children: React.ReactNode
}

export default function Page({children}: IProps){
    return (
        <Flex fontFamily='Roboto' direction='column' alignItems='center' padding='40px 50px'>
                <NextLink passHref href='/'>
                    <Box marginBottom='30px' as='a'>
                        <Image src='/LOGO.png' width={186} height={50} alt='Instituto Federal de Santa Catarina' />
                    </Box>
                </NextLink>
            {children}
        </Flex>
    )
}