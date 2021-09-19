import { Box, BoxProps } from "@chakra-ui/react";

interface IProps extends BoxProps {
    children: React.ReactNode;
    textColor?: string;
}

export default function Title({children, textColor = '#FE91FE', ...props}: IProps) {
    return (
        <Box 
            as='h1'
            textShadow={`-2px 2px 0px ${textColor}`} 
            fontSize='32px' 
            fontWeight='bold' 
            textTransform='uppercase'
            marginBottom='30px'
            {...props}
        >
            {children}
        </Box>
    )
}