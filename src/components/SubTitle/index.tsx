import { Box, BoxProps } from "@chakra-ui/layout";

interface IProps extends BoxProps {
    children: React.ReactNode;
}

export default function SubTitle({children, ...props}: IProps) {
    return (
        <Box 
            as='h2' 
            textTransform='uppercase' 
            fontWeight='700' 
            {...props}
        >
            {children}
        </Box>
    )
}