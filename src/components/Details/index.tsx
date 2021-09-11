import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Flex
} from "@chakra-ui/react"
import Header from "../Header"

interface IProps {
    title: string;
    children: React.ReactNode;
    headerColor: string;
}

export default function Details({title, children, headerColor}: IProps) {
    return (
        <Accordion allowToggle>
            <AccordionItem border='none'>
                <AccordionButton 
                    padding='0' 
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center'
                >
                    <Header color={headerColor}>
                        <Flex direction='row'>
                            <AccordionIcon />
                            {title}
                        </Flex>
                    </Header>
                </AccordionButton>
                <AccordionPanel maxWidth='300px' margin='auto'>
                    {children}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}