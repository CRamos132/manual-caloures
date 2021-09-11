import { Box, BoxProps } from "@chakra-ui/layout";

interface IProps extends BoxProps {
    children: React.ReactNode;
}

export default function Body({children, ...props}: IProps) {
    return (
        <Box fontWeight='300' margin='30px 0px' maxWidth='300px' {...props}>
            {children}
        </Box>
    )
}