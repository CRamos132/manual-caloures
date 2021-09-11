import { Flex, FlexProps } from '@chakra-ui/layout'
import NextLink from 'next/link'

interface IProps extends FlexProps {
    children: React.ReactNode;
    to: string;
    shadowColor?: string;
}

export default function Button({children, to, shadowColor = '#000000', ...props}: IProps) {
    return (
        <NextLink passHref href={to}>
            <Flex
                boxShadow={`-6px 6px 0px ${shadowColor}`}
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