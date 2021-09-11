import { Flex } from "@chakra-ui/react"
import ReactPlayer from 'react-player'

interface IProps {
    src: string;
}

export default function Video({src}: IProps) {
    return (
        <Flex width='100%' direction='column' alignItems='center'>
            <ReactPlayer 
            alt=''
                width={350} 
                height={350} 
                controls={true} 
                url={src} 
            />
        </Flex>
    )
}