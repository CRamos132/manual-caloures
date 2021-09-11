import { Box } from "@chakra-ui/layout";

interface IProps {
    children: React.ReactNode;
}

export default function Body({children}: IProps) {
    return (
        <Box fontWeight='300' margin='30px 0px' maxWidth='300px'>
            {children}
        </Box>
    )
}