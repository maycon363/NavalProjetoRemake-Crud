import React from 'react'
import { Card } from 'react-bootstrap'


const Infor = () => {
  return (
    <div className='mb-2'>
        <div className='text-center mb-3'> 
            <h1>Informações de cada Classe de Navio</h1>
        </div>
        <div>
            <div className='images mb-2'>
                <Card style={{ width: '50rem' }}>
                        <Card.Body className='corcards'>
                            <Card.Title > Porta-aviões</Card.Title>
                        </Card.Body>
                    <Card.Img variant="top" src="https://cdn-defesaaereanaval.nuneshost.com/wp-content/uploads/2014/03/j-15-flying-sharke-fighterChina-Aircraft-Carrier-Liaoning-CV16-j-15-16-17-22-21-31-z8-9-10-11-12-13fighter-jet-aewc-PLA-NAVY-PLAAF-PLANAF-LANDING-TAKEOFF-2-600x399.jpg" />
                    <h1 className='inforletra'>De forma simples, podemos dizer que um porta-aviões é um navio de carga com uma pista de decolagem/aterrissagem no convés. São reconhecidos por seu tamanho colossal, pela capacidade de transportar dezenas de aeronaves e pela sua importância nas estratégias das forças militares de qualquer país</h1>
                    <h1 className='inforletra'>Um porta-aviões é um navio de guerra cujo papel principal é servir de base aérea móvel. Permite, portanto, que uma força naval possa projetar o seu poderio aéreo a grandes distâncias, sem a necessidade de depender de aeroportos (fixos) para os seus aviões.</h1>
                </Card>
            </div>
            <div className='images mb-2'>
                <Card style={{ width: '50rem' }}>
                        <Card.Body className='corcards'>
                            <Card.Title > Porta-Helicópteros</Card.Title>
                        </Card.Body>
                    <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2018/08/HMS-Ocean-2.jpg" />
                    <h1 className='inforletra'>Porta-helicóptero é um termo relativo a um porta-aviões cujo objetivo principal é transportar helicópteros. Às vezes o termo é usado também para navios de assalto anfíbio.</h1>
                    <h1 className='inforletra'> navio também tem três embarcações de desembarque de veículos e de pessoal, com capacidade para embarque de 35 pessoas cada; uma lancha de transporte de pessoal, com capacidade para 20 pessoas; uma lancha operativa; e uma equipe de pronto emprego do Centro de Medicina Operativa da Marinha, composta por 28 médicos e militares da área de saúde.</h1>
                </Card>
            </div>
            <div className='images mb-2'>
                <Card style={{ width: '50rem' }}>
                        <Card.Body className='corcards'>
                            <Card.Title > Destroyers</Card.Title>
                        </Card.Body>
                    <Card.Img variant="top" src="https://sites.breakingmedia.com/uploads/sites/3/2022/01/220113_ddgx_blueprint-2.png" />
                    <h1 className='inforletra'>Um Destroyer é um navio de combate de alta velocidade, grande mobilidade, tamanho moderado e proteção estrutural nula, cujo armamento principal é normalmente constituído de torpedos e cargas de profundidades. Seu principal uso é na guerra anti-submarina.</h1>
                    <h1 className='inforletra'>O  Destroyer é usado como escolta para embarcações de grande porte numa esquadra naval ou comboio de navios. Cabe a ele monitorar e defender os demais dos desafetos. Contratorpedeiro é feito para atingir barcos torpedeiros, que carregam torpedos.</h1>
                </Card>
            </div>
            <div className='images mb-2'>       
                <Card style={{ width: '50rem' }}>
                    <Card.Body className='corcards'>
                        <Card.Title > Fragata</Card.Title>
                    </Card.Body>
                        <Card.Img variant="top" src="https://1.bp.blogspot.com/-2hLa6XNuR3s/Xb_FnW1sFPI/AAAAAAAAhvk/DzO5aBftbWsUXP98veYy5FKUCO5LexpkACLcBGAsYHQ/s1600/francia%2Bfragata%2BAdmiral%2BRonarc%25E2%2580%2599h.jpg" />
                        <h1 className='inforletra'>Função. São Navios-Escolta. Podem localizar e destruir aeronaves, navios de superfície e submarinos inimigos, além de efetuar patrulhas nas nossas águas.</h1>
                        <h1 className='inforletra'>As fragatas (também conhecidas por destroyer-leaders) foram um tipo novo introduzido, em 1950, com um deslocamento próximo dos cruzadores, com capacidade antisubmarina ou antiaérea. Os destroyers eram os escoltas mais ligeiros da esquadra, resultando do desenvolvimento de projetos da Segunda Guerra Mundial.</h1>
                </Card>
            </div>
            <div className='images mb-2'>
                <Card style={{ width: '50rem' }}>
                    <Card.Body className='corcards'>
                        <Card.Title > Corveta</Card.Title>
                    </Card.Body>
                        <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2020/06/Visby.png" />
                        <h1 className='inforletra'>São Navios-Escolta. Podem localizar e destruir aeronaves, navios de superfície e submarinos inimigos, além de efetuar patrulhas nas nossas águas.</h1>
                        <h1 className='inforletra'>Apesar de menores que as fragatas e Destroyers, algumas modernas corvetas são bastante bem armadas, com peças de grande calibre, lança-mísseis e lança-torpedos. Algumas delas dispõem, inclusive, de hangar para helicópteros. Estas caraterísticas, associadas à sua elevada rapidez e manobralidade, permitem-lhes fazer frente a navios de maior porte. É essa a razão pela qual, marinhas de países com reduzidas áreas litorais ou oceânicas, tenham feito da corveta o seu principal tipo de navio de combate de superfície</h1>
                </Card>
            </div>
            <div className='images mb-2'>
                <Card style={{ width: '50rem' }}>
                    <Card.Body className='corcards'>
                        <Card.Title> Submarinos</Card.Title>
                    </Card.Body>
                        <Card.Img variant="top" src="https://4.bp.blogspot.com/-PLZ_rLpbmxo/TpMQn7g7-UI/AAAAAAAAAgM/eOO59BKsCKQ/s1600/Submarino+nuclear+brasileiro+scorpene.jpg" />
                        <h1 className='inforletra'>Submarinos são embarcações que navegam ocultas no fundo do mar e representam grande vantagem num eventual conflito militar. Mais do que isso, o simples fato de uma nação manter uma frota de submarinos funciona como uma tática de dissuasão de qualquer ação hostil.</h1>
                        <h1 className='inforletra'>É denominado submarino a embarcação destinada a se movimentar abaixo da superfície marítima. Tal invenção permite não só lutar em uma batalha, mas também viver durante meses, ou até mesmo anos, abaixo da superfície, sendo considerado um dos maiores inventos da história militar.</h1>
                </Card>
            </div>
            <div className='images mb-2'>
                <Card style={{ width: '50rem' }}>
                    <Card.Body className='corcards'>
                        <Card.Title> Navio Patrulha</Card.Title>
                    </Card.Body>
                        <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2015/04/RN-New-OPV_01.jpg" />
                        <h1 className='inforletra'>Os navios de patrulha são navios militares ou de segurança que são projetados para realizar uma variedade de funções, incluindo a proteção das fronteiras marítimas, o patrulhamento de áreas costeiras e o monitoramento do tráfego marítimo.</h1>
                        <h1 className='inforletra'>O navio-patrulha é um tipo de navio de guerra, de pequena dimensão e com baixo poder de fogo.
                        Conforme a dimensão e a função, os navios-patrulha podem ser designados, alternativamente, como lanchas de fiscalização, vedetas, escoltas costeiros, navios de defesa de porto ou canhoneiras'.</h1>
                </Card>
            </div>
            <div className='images mb-2'>
                <Card style={{ width: '50rem' }}>
                    <Card.Body className='corcards'>
                        <Card.Title> Navio Caça-Minas</Card.Title>
                    </Card.Body>
                        <Card.Img variant="top" src="https://cdn-defesaaereanaval.nuneshost.com/wp-content/uploads/2022/07/NCMM.jpg" />
                        <h1 className='inforletra'>O navio é um poderoso sistema de combate com suporte tanto para caçar quanto para realizar varredura de minas, no qual são utilizados veículos não-tripulados subaquáticos e de superfície para a detecção, classificação e neutralização de qualquer tipo de mina</h1>
                        <h1 className='inforletra'>O termo "draga-minas" por exemplo é comumente empregado em Portugal e no Brasil o seu equivalente mais comum é "navio varredor"):</h1>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Infor