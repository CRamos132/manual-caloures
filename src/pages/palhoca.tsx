import { Flex, Box } from '@chakra-ui/react'
import Body from '../components/Body'
import Button from '../components/Button'
import Details from '../components/Details'
import Header from '../components/Header'
import Page from '../components/Page'
import Video from '../components/Video'

export default function Palhoca() {
    return (
        <Page>
            <Flex
                width='100%' 
                direction='column' 
                alignItems='center'  
                gridRowGap='25px'
                padding='16px'
            >
                <Header as='h1' color='#FED101'>
                    Palhoça
                </Header>
                <Details title='Transporte/Locomoção' headerColor='#FED101'>
                    <>
                        <Box marginTop='30px'>
                            <Video src='/videos/palhoca1.mp4' />
                        </Box>
                        <Body marginTop='30px'>
                            Como chegar no IFSC Câmpus Palhoça Bilíngue: Transporte 
                            em Palhoça é um pouco difícil (palavra menos forte). O 
                            Campus Palhoça Bilíngue pode parecer um pouco escondido. 
                            Hoje só temos duas linhas de ônibus que passa por aqui. 
                            É o itinerário Unisul - Estação Palhoça, Linhas L9 - 
                            Tecno/IFSC e L10 - J.Aquárius/IFSC. Ônibus só de segunda 
                            a sábado. Não existe ainda uma linha que vá direto do 
                            IFSC até o TICEN (Terminal de Integração do Centro) em 
                            Florianópolis, mas aqui em Palhoça existe a Estação 
                            Palhoça que faz integração com as linhas que vão para 
                            Florianópolis e com os itinerários dentro de Palhoça. 
                            Do TICEN ao IFSC, o tempo estimado de percurso de carro 
                            é de 30 minutos, de ônibus cerca de 1 hora e 20 minutos 
                            e de bicicleta, cerca de 1 hora.
                            Todo estudante do IFSC têm o direito a fazer o cartão 
                            de estudante de transporte que lhe dá direito de pagar 
                            meia passagem nos ônibus. É necessário ir até prédio 
                            do SETUF no TICEN ou no prédio da JOTUR em frente a 
                            Estação Palhoça e apresentar o atestado de matrícula, 
                            comprovante de residência e RG.
                        </Body>
                    </>
                </Details>
                <Details title='Moradia' headerColor='#FED101'>
                    <>
                        <Box marginTop='30px'>
                            <Video src='/videos/palhoca2.mp4' />
                        </Box>
                        <Body marginTop='30px'>
                            No município de Palhoça você encontra diversas opções 
                            de moradia para estudante: quitinetes, apartamentos 
                            pequenos, aluguel de quartos, etc. Como o transporte 
                            aqui é um pouco complicado, o ideal é que você 
                            procure morar perto da Instituição, para que assim 
                            tenha menos gasto com transporte e perca menos tempo 
                            no percurso. Os bairros próximos ao IFSC, são a 
                            própria Pedra Branca, Passa Vinte, Jardim Eldorado, 
                            Jardim Aquarius, Jardim Coqueiros, Pagani e São 
                            Sebastião Dica procurar em imobiliárias da região, 
                            em grupos de Facebook, em sites de moradia ou converse 
                            com seu veterano, tenho certeza que ele vai te ajudar!
                        </Body>
                    </>
                </Details>
                <Details title='Saúde' headerColor='#FED101'>
                    <>
                        <Box marginTop='30px'>
                            <Video src='/videos/palhoca3.mp4' />
                        </Box>
                        <Body marginTop='30px'>
                            A UBS, Unidade Básica de Saúde, popularmente chamada 
                            de Posto de Saúde, oferece atendimento de baixa 
                            complexidade, como consultas com médicos e enfermeiros, 
                            coleta de exames laboratoriais, tratamento odontológico, 
                            medicação básica, encaminhamento para atendimentos com 
                            especialistas, etc. A UBS atende até 80% dos problemas 
                            de saúde da população e cada bairro possui o seu.
                            Em caso de emergência, procure a UPA 24h, Unidade de 
                            Pronto Atendimento com atendimento 24 horas. As UPAs 
                            são responsáveis por prestar atendimento de média 
                            complexidade, emergências como como fraturas, falta de 
                            ar intensa, crises convulsivas, dores fortes no peito, 
                            etc. Em Palhoça, a UPA 24h fica no endereço: Rua Santa 
                            Marta, s/n - Bela Vista, Palhoça - SC, 88130-000.
                            Os casos mais complicados que precisam de um 
                            acompanhamento como situações de emergência que 
                            necessitam de internação, cirurgias ou exames mais 
                            elaborados, procure o hospital. O mais próximo de 
                            Palhoça é o Hospital Regional de São José, no endereço 
                            Rua Adolfo Donato da Silva, s/n - Praia Comprida, São 
                            José - SC, 88103-901.
                        </Body>
                    </>
                </Details>
                <Details title='Alimentação' headerColor='#FED101'>
                    <>
                        <Box marginTop='30px'>
                            <Video src='/videos/palhoca4.mp4' />
                        </Box>
                        <Body marginTop='30px'>
                            No Campus Palhoça não possuímos um restaurante 
                            universitário ou RU, mas temos uma lanchonete que 
                            tem opções vegetarianas.
                            Você que está se mudando para Palhoça, precisa 
                            conhecer os supermercados e mercados da cidade. 
                            Existem algumas opções de Supermercados Atacadistas 
                            que trazem bom preço, mas se você quer opções e 
                            variedades, os Supermercados talvez sejam melhor. 
                            E pela praticidade e proximidade, os Mercados de 
                            Bairro são uma boa opção. Cada um deles tem um ponto 
                            fraco ou forte, com o tempo você encontra a melhor 
                            opção para o seu perfil de consumidor.
                        </Body>
                    </>
                </Details>
                <Button as='a' to='/'>Volte para o menu &gt;</Button>
            </Flex>
        </Page>
    )
}