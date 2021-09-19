import { Flex, Box } from '@chakra-ui/react'
import Body from '../components/Body'
import Button from '../components/Button'
import Details from '../components/Details'
import Header from '../components/Header'
import Page from '../components/Page'
import SubTitle from '../components/SubTitle'
import Title from '../components/Title'
import Video from '../components/Video'

export default function Cursos() {
    return (
        <Page>
            <Flex
                width='100%' 
                direction='column' 
                alignItems='center'  
                gridRowGap='25px'
                padding='16px'
            >
                <Title textColor='#BE61CB'>
                    Cursos
                </Title>
                <Video src='/videos/cursos1.mp4' />
                <Body>
                    No Campus Palhoça Bilíngue são ofertados cursos de 
                    diversas modalidades: técnicos integrados, cursos 
                    de graduação e pós graduação, entre outros.
                </Body>
                <Details title='Técnicos integrados' headerColor='#BE61CB'>
                    <>
                        <Body marginTop='30px'>
                            Os cursos técnicos integrados, chamado 
                            também de ensino médio técnico, oferece
                            a formação geral de maneira integrada 
                            à formação profissional. No IFSC, o 
                            aluno tem as disciplinas do currículo 
                            regular do ensino médio, mais as 
                            específicas do curso técnico escolhido.
                        </Body>
                        <SubTitle marginBottom='30px'>
                            Tradução e Interpretação de Libras (TILS)
                        </SubTitle>
                        <Box marginTop='30px'>
                            <Video src='/videos/cursos2.mp4' />
                        </Box>
                        <Body marginTop='30px'>
                            O Técnico Integrado em Tradução e 
                            Interpretação de Libras/Português 
                            prepara o aluno para a tradução e 
                            a interpretação entre a Língua 
                            Brasileira de Sinais (Libras) e a 
                            Língua Portuguesa em diferentes 
                            espaços e situações, levando em 
                            consideração as necessidades de 
                            comunicação e expressão entre 
                            surdos e ouvintes. Esse 
                            profissional poderá atuar no 
                            atendimento ao público, em 
                            instituições públicas e privadas,
                            ambientes educacionais, teatros,
                            produtoras de vídeo, televisão,
                            eventos, unidades de 
                            atendimento médico, etc., de 
                            maneira a contribuir com a 
                            difusão da Libras e a inserção 
                            das pessoas surdas na sociedade.
                             O curso é destinado à formação 
                             de pessoas ouvintes para atuar 
                             na tradução e interpretação da 
                             Libras para o português oral e 
                             escrito e vice-versa.
                            O curso acontece no período 
                            matutino e tem duração de 4 
                            anos (8 semestres). As 40 vagas
                             são ofertadas através de 
                             sorteio público.
                        </Body>
                        <SubTitle marginBottom='30px'>
                            Comunicação Visual (CV)
                        </SubTitle>
                        <Box marginTop='30px'>
                            <Video src='/videos/cursos3.mp4' />
                        </Box>
                        <Body marginTop='30px'>
                            O Técnico Integrado em 
                            Comunicação Visual forma 
                            profissionais para a execução 
                            da programação visual 
                            de materiais institucionais e 
                            promocionais, como portais 
                            (sites), identidades visuais, 
                            folders, cartões de visita, 
                            revistas, jornais, livros, etc.
                            , por meio da criação e 
                            aplicação de diferentes 
                            elementos visuais: ilustrações,
                            fotografias, desenhos, 
                            animações, logotipos de 
                            empresas, sinalizações, 
                            tipografias e projetos de 
                            interface multimídia. Esse 
                            profissional poderá atuar em 
                            agências de comunicação, 
                            editoras, empresas de serviços
                            gráficos, produtoras de 
                            conteúdo, televisão e cinema,
                            etc.
                            O curso acontece no período 
                            vespertino e têm duração de 4 
                            anos (8 semestres). O ingresso
                            ocorre através de sorteio 
                            público. No 1º semestre do ano,
                            são ofertadas 20 vagas para 
                            alunos surdos e 40 vagas para 
                            alunos ouvintes. No 2º semestre
                            do ano, são ofertadas 40 vagas
                            para alunos ouvintes.
                        </Body>
                    </>
                </Details>
                <Details title='PROEJA' headerColor='#BE61CB'>
                    <>
                        <Box marginTop='30px'>
                            <Video src='/videos/cursos4.mp4' />
                        </Box>
                        <Body marginTop='30px'>
                            O Proeja é voltado para a educação
                            de jovens e adultos, a partir dos
                            18 anos, que já concluíram o ensino 
                            fundamental
                        </Body>
                        <SubTitle marginBottom='30px'>
                            Técnico em Manutenção
                            e Suporte em Informática
                        </SubTitle>
                        <Body marginTop='30px'>
                            O curso Técnico em Manutenção e 
                            Suporte em Informática forma 
                            profissionais para prestar 
                            manutenção preventiva e corretiva
                            de equipamentos de informática, 
                            avaliando a necessidade de 
                            substituição ou de atualização dos
                             principais componentes de um 
                             computador ou de uma rede de 
                            computadores. Desenvolve sites em 
                            HTML, instala, configura e 
                            desinstala programas e softwares 
                            básicos, utilitários e realiza 
                            procedimentos de backup e 
                            recuperação de dados.
                            O curso acontece no período noturno 
                            (de 15 em 15 dias) e tem duração de 
                            2 anos (4 semestres). As vagas (40) 
                            são distribuídas através de sorteio 
                            público.
                        </Body>
                    </>
                </Details>
                <Details title='Graduação' headerColor='#BE61CB'>
                    <>
                        <Box marginTop='30px'>
                            <Video src='/videos/cursos5.mp4' />
                        </Box>
                        <SubTitle marginTop='30px'>
                            Licenciatura em Pedagogia Bilíngue 
                            (Língua Brasileira de Sinais/Língua 
                            Portuguesa)
                        </SubTitle>
                        <Body marginTop='30px'>
                            Forma educadores bilíngues aptos a 
                            trabalhar com a educação de alunos 
                            surdos e ouvintes. Os alunos desse 
                            curso são habilitados a fazer uso 
                            de diferentes tecnologias e 
                            metodologias de ensino, com o 
                            objetivo de facilitar o processo 
                            de ensino-aprendizagem.
                            O curso acontece no período noturno 
                            e tem duração de 4 anos (8 semestres)
                            . As vagas (40) são ofertadas 
                            anualmente através do SISU.
                        </Body>
                        <SubTitle marginBottom='30px'>
                            Tecnologia em Produção Multimídia
                        </SubTitle>
                        <Body marginTop='30px'>
                            O tecnólogo em Produção Multimídia 
                            desenvolve, planeja e executa 
                            projetos para ambientes digitais, 
                            os quais geram conteúdos para websites
                            , redes sociais e dispositivos móveis
                            . Utilizando de recursos de computação 
                            gráfica e ferramentas digitais, que 
                            envolvem imagem, som, texto e animação
                            , para garantir interatividade.
                            O curso acontece no período noturno e 
                            tem duração de 3 anos (6 semestres). 
                            As vagas (40) são ofertadas semestrais 
                            através do SISU.
                        </Body>
                    </>
                </Details>
                <Details title='Especialização' headerColor='#BE61CB'>
                    <>
                        <Box marginTop='30px'>
                            <Video src='/videos/cursos6.mp4' />
                        </Box>
                        <SubTitle marginTop='30px'>
                            Educação de Surdos: Aspectos Políticos, 
                            Culturais e Pedagógicos
                        </SubTitle>
                        <Body marginTop='30px'>
                            O curso de especialização em Educação 
                            para Surdos aborda aspectos políticos, 
                            culturais e pedagógicos, apontando 
                            para os impasses, dilemas e desafios 
                            aos quais os surdos, os educadores, 
                            os dirigentes institucionais e a 
                            sociedade em geral ainda se defrontam 
                            cotidianamente. Para tanto, proporciona 
                            conhecimentos práticos e teóricos que 
                            levam à reflexão de um processo 
                            educacional que reconhece as diferenças, 
                            proporcionando metodologias condizentes 
                            com a educação de surdos.
                            O curso acontece somente às 
                            sextas-feiras (de 15 em 15 dias) e tem 
                            duração de 2 anos (4 semestres). As 
                            vagas (40) são ofertadas através da 
                            análise socioeconômica e documental.
                        </Body>
                        <Box marginTop='30px'>
                            <Video src='/videos/cursos7.mp4' />
                        </Box>
                        <SubTitle marginTop='30px'>
                            Tradução e Interpretação
                            de Libras/Português
                        </SubTitle>
                        <Body marginTop='30px'>
                            Forma especialistas em Tradução e 
                            Interpretação entre a Língua Brasileira 
                            de Sinais (Libras) e a Língua Portuguesa, 
                            para atuação profissional numa perspectiva 
                            bilíngue, nos diferentes níveis de ensino, 
                            assim como nas diversas esferas da sociedade
                            . Os alunos são habilitados a utilizar 
                            práticas de tradução textual e audiovisual, 
                            incluindo noções de gravação e edição de 
                            recursos de texto, imagem e vídeo, para 
                            produção de materiais didáticos, 
                            artísticos-culturais, de acessibilidade à 
                            comunicação e informação.
                            O curso oportuniza ainda o desenvolvimento 
                            de relevantes pesquisas para a área e o 
                            fomento de novos paradigmas relacionados 
                            às diferenças linguísticas, culturais, 
                            políticas e educacionais implicadas nos 
                            trabalhos com os sujeitos surdos e 
                            ouvintes no ato da tradução e da 
                            interpretação.
                            O curso acontece somente aos sábados 
                            (de 15 em 15 dias) e tem duração de 2 
                            anos (4 semestres). As vagas (40) são 
                            ofertadas através de sorteio público, 
                            com matrícula realizada mediante 
                            aprovação em entrevista de proficiência 
                            em Libras.
                        </Body>
                    </>
                </Details>
                <Button as='a' to='/'>Volte para o menu &gt;</Button>
            </Flex>
        </Page>
    )
}