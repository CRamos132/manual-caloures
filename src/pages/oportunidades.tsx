import { Flex, Box } from '@chakra-ui/react'
import Body from '../components/Body'
import Button from '../components/Button'
import Details from '../components/Details'
import Header from '../components/Header'
import Page from '../components/Page'
import SubTitle from '../components/SubTitle'
import Title from '../components/Title'
import Video from '../components/Video'

export default function Oportunidades() {
    return (
        <Page>
            <Flex
                width='100%' 
                direction='column' 
                alignItems='center'  
                gridRowGap='25px'
                padding='16px'
            >
                <Title textColor='#FE5D3C'>
                    Oportunidades
                </Title>
                <Details title='Intercâmbio' headerColor='#FE5D3C'>
                    <>
                        <Box marginTop='30px'>
                            <Video src='/videos/oportunidades1.mp4' />
                        </Box>
                        <Body marginTop='30px'>
                            Todo ano o IFSC oferece a oportunidade de 
                            estudar em outro país por meio de programas 
                            e parcerias com outras instituições.
                        </Body>
                        <SubTitle marginBottom='30px'>
                            Propicie
                        </SubTitle>
                        <Body marginTop='30px'>
                            Programa de Cooperação Internacional para 
                            Estudantes do IFSC (Propicie) é focado no 
                            apoio aos alunos do IFSC interessados na 
                            pesquisa científica e no desenvolvimento 
                            tecnológico em Instituições de Ensino no 
                            exterior. Por meio desse programa, os 
                            estudantes recebem uma bolsa de pesquisa 
                            por um período de um semestre em 
                            instituições de ensino estrangeiras para 
                            realização do trabalho de conclusão de 
                            curso de Graduação Tecnológica ou do 
                            Projeto Integrador equivalente ao último 
                            ano do curso.
                        </Body>
                        <Box marginTop='30px'>
                            <Video src='/videos/oportunidades2.mp4' />
                        </Box>
                        <SubTitle marginTop='30px'>
                            Mobilidade de Estudantes Estrangeiros
                        </SubTitle>
                        <Body marginTop='30px'>
                            É uma chamada formal para estudantes 
                            estrangeiros que desejam estudar o IFSC 
                            por um semestre.
                        </Body>
                        <SubTitle marginBottom='30px'>
                            Programa de Acompanhamento
                            de Intercambistas (&quot;Buddy&quot;)
                        </SubTitle>
                        <Body marginTop='30px'>
                            O Programa de Acompanhamento e Apoio a 
                            Intercambistas Incoming, denominado 
                            &quot;Buddy&quot;, concederá auxílio 
                            financeiro aos alunos do IFSC 
                            selecionados para auxiliar no cotidiano 
                            de intercambistas que frequentarão a 
                            instituição para realização de projetos 
                            específicos, intercâmbio do semestre 
                            letivo ou intercâmbio cultural.
                        </Body>
                    </>
                </Details>
                <Details title='Apoio a eventos' headerColor='#FE5D3C'>
                    <>
                        <Box marginTop='30px'>
                            <Video src='/videos/oportunidades3.mp4' />
                        </Box>
                        <Body marginTop='30px'>
                            Por meio de um edital anual, com chamadas 
                            mensais, o IFSC oferece auxílio financeiro 
                            para pagamento de passagens, inscrições, 
                            hospedagem e alimentação. A ajuda de custo 
                            pode ser dada para a participação em eventos 
                            acadêmicos, esportivos e/ou culturais de 
                            âmbito estadual, regional, nacional e 
                            internacional.
                            Para solicitar é necessário preencher um 
                            formulário on-line até o dia 12 de cada mês.
                        </Body>
                    </>
                </Details>
                <Details title='Representação estudantil' headerColor='#FE5D3C'>
                    <>
                        <Box marginTop='30px'>
                            <Video src='/videos/oportunidades4.mp4' />
                        </Box>
                        <Body marginTop='30px'>
                            Representação Estudantil é um elemento 
                            relevante da vida dos estudantes e das 
                            instituições de ensino. As organizações 
                            estudantis podem ajudar a melhorar a vida 
                            dos alunos, uma vez que devem representar o 
                            corpo discente e lutar pelas suas causas. Os 
                            estudantes da educação básica (Ensino Médio 
                            Técnico) podem se organizar em grêmios 
                            estudantis. Já os estudantes de nível 
                            superior (graduação) podem formar centros ou 
                            diretórios acadêmicos. O direito dos alunos 
                            de constituir e participar de agremiações 
                            estudantis é garantido em lei.
                        </Body>
                    </>
                </Details>
                <Details title='Empresa Júnior' headerColor='#FE5D3C'>
                    <>
                        <Box marginTop='30px'>
                            <Video src='/videos/oportunidades5.mp4' />
                        </Box>
                        <Body marginTop='30px'>
                            A Empresa Júnior é um sociedade civil sem 
                            fins lucrativos, formada por alunos de curso 
                            superior, sob a orientação de professores. O 
                            objetivo das Empresas Júniores é proporcionar 
                            ao estudante um maior contato com o mundo do 
                            trabalho, vivenciando o meio empresarial e 
                            comprometendo-se com o desenvolvimento 
                            pessoal e do coletivo.
                            Aqui no Campus Palhoça Bilíngue nós temos a 
                            iDEV - Empresa Júnior de Desenvolvimento de 
                            aplicações, vinculada aos alunos do curso de 
                            Produção Multimídia.
                        </Body>
                    </>
                </Details>
                <Details title='Bolsa de pesquisa e Extensão' headerColor='#FE5D3C'>
                    <>
                        <Box marginTop='30px'>
                            <Video src='/videos/oportunidades6.mp4' />
                        </Box>
                        <Body marginTop='30px'>
                            Além de participar das aulas, você pode 
                            ampliar ainda mais o seu conhecimento por 
                            meio de projetos de extensão, que envolvem 
                            a comunidade, e de pesquisa, aprofundando 
                            seus estudos. O IFSC oferece diversas bolsas 
                            para os alunos se dedicarem a essas atividades
                            . Acompanhe a publicação dos editais no Portal 
                            do IFSC e no site do seu câmpus ou procure a 
                            coordenadoria do seu curso para se informar.
                        </Body>
                    </>
                </Details>
                <Button as='a' to='/'>Volte para o menu &gt;</Button>
            </Flex>
        </Page>
    )
}