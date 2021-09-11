import { Flex, FlexProps } from "@chakra-ui/layout";

interface IProps extends FlexProps {
    text: string;
    color: string;
}

export default function Header({color, text, ...props}: IProps) {
    return (
        <Flex 
            boxShadow={`-6px 6px 0px ${color}`} 
            height='50px' 
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
            {text}
        </Flex>
    )
}