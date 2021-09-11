import { Flex, FlexProps } from '@chakra-ui/layout'
import NextLink from 'next/link'

interface IProps extends FlexProps {
    children: React.ReactNode;
    to: string;
}

export default function Button({children, to, ...props}: IProps) {
    return (
        <NextLink passHref href={to}>
            <Flex
                boxShadow='-6px 6px 0px #000000'
                height='40px' 
                width='260px'
                border='2px solid #000000'
                backgroundColor='white'
                direction='column'
                textTransform='uppercase'
                alignItems='center'
                justifyContent='center'
                fontWeight='700'
                {...props}
            >
                {children}
            </Flex>
        </NextLink>
    )
}