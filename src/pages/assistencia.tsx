import { Flex, Box } from '@chakra-ui/react'
import Body from '../components/Body'
import Button from '../components/Button'
import Header from '../components/Header'
import Page from '../components/Page'
import SubTitle from '../components/SubTitle'
import Video from '../components/Video'

export default function Assistencia() {
    return (
        <Page>
            <Flex
                width='100%' 
                direction='column' 
                alignItems='center' 
                padding='16px'
            >
                <Header as='h1' color='#7CC7FE'>
                    Assistência Estudantil
                </Header>
                <Box marginTop='30px'>
                    <Video src='/videos/assistencia.mp4' />
                </Box>
                <Body>
                    O IFSC disponibiliza assistência estudantil por meio de 
                    vários programas que podem lhe ajudar financeiramente. 
                    Fique ligado no lançamento dos editais.
                </Body>
                <SubTitle>
                    IVS
                </SubTitle>
                <Body >
                    O Índice de Vulnerabilidade Social, IVS, é calculado 
                    com base na renda e em agravantes sociais. O IVS pode 
                    ser usado como critério de acesso exclusivo ou associado 
                    a programas de assistência estudantil e/ou editais 
                    destinados aos estudantes do IFSC. Por isso é 
                    importante que você peça o seu.
                </Body>
                <SubTitle >
                    Auxílio Moradia
                </SubTitle>
                <Body>
                    Existe também o Auxílio-Moradia que tem como objetivo de 
                    custear parcialmente os gastos com aluguel e outros custos 
                    com moradia fora da sede familiar. Se você precisa desta 
                    ajuda, leia o edital e faça a sua inscrição.
                </Body>
                <SubTitle>
                    Paevs
                </SubTitle>
                <Body>
                    O Programa de Atendimento ao Estudante em Vulnerabilidade 
                    Social (PAEVS) disponibiliza auxílio financeiro para 
                    contribuir no atendimento às necessidades de estudantes 
                    em vulnerabilidade social, visando a sua permanência e 
                    êxito acadêmico. São 4 tipos de auxílios:
                    Auxílio Permanência: destina-se a estudantes matriculados 
                    em cursos presenciais, com renda bruta per capita de 
                    até 2 salários mínimos.
                    Para solicitar o aluno precisa ter matrícula regular e 
                    Índice de Vulnerabilidade Social (IVS) válido.
                    Auxílio Compulsório: destina-se a estudantes inscritos 
                    no CadÚnico, os matriculados em cursos Proeja e os 
                    matriculados em cursos que façam parte de ações voltadas 
                    a públicos estratégicos. Para solicitar, procure a 
                    Coordenação Pedagógica do nosso câmpus.
                    Auxílio Ingressante Cotista: destina-se a estudantes que 
                    entraram no IFSC por meio da cota de escola pública, com 
                    renda inferior a 1,5 salários mínimos, matriculados em 
                    curso presencial. Para solicitar, procure a Coordenação 
                    Pedagógica do nosso câmpus.
                    Auxílio Emergencial: de caráter eventual, destina-se a 
                    estudantes matriculados em curso presencial, em situação 
                    financeira adversa e não previsível que impossibilite a 
                    permanência no curso. Para solicitar, procure a Coordenação
                     Pedagógica do nosso câmpus.
                </Body>
                <Button as='a' to='/'>Volte para o menu &gt;</Button>
            </Flex>
        </Page>
    )
}