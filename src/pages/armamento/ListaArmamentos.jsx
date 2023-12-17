import React, { useEffect, useState } from 'react'
import ArmamentosService from '../../services/academico/ArmamentosService'
import swal from 'sweetalert';
import { Card, Col, ListGroup, Container, Row, Spinner } from 'react-bootstrap';
import { Chip } from '@mui/material'
import { Link } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineRollback } from 'react-icons/ai'
import { FcUp } from "react-icons/fc";
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const ListaArmamentos = () => {

    const [armamento, setArmamento] = useState([])

    useEffect(() => {

        setArmamento(ArmamentosService.getAll())

    }, [])

    function apagar(id) {
        if(swal("Deletado com Sucesso!!!", "Registro apagado", "success", {dangerMode: true,})){
            ArmamentosService.delete(id)
            setArmamento(ArmamentosService.getAll())
        }
    }
  return (
    <div>
        <div className='text-center'>
            <h1 id='inicio'>Lista dos Armamentos</h1>
        </div>
            {armamento.length === 0 && <h1><Spinner animation="border" variant="success" />Carregando... </h1>}

            <Container>
                    <div className="text-center">
                        <Link className='btn btn-success mb-2 butao' to={'/armamentos/create'}><AiOutlinePlus /> Inserir</Link>
                    </div>
                <Row>
                    {
                    armamento.map((item, i)=> (
                        <Col key={i} md={4} className='ml-4 g-2 letra'  >
                            <Card border="dark" style={{  color: "#000000", width: '18rem' }}>
                                {item.imges === "cp" && <Card.Img variant="top" src="https://d1a5vuhmdbnak9.cloudfront.net/defesanet/site/upload/media/1650328029_25474.jpg" />}
                                {item.imges === "cs" && <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2013/05/MSI-DS25M-1.jpg" />}
                                {item.imges === "man" && <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2020/09/Atmaca-5.jpg" />}
                                {item.imges === "mae" && <Card.Img variant="top" src="https://cdn-defesaaereanaval.nuneshost.com/wp-content/uploads/2013/10/MBDA-Sea-Ceptor.jpg" />}
                                {item.imges === "t" && <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2015/11/Mk.46-torpedo-960x527.jpg" />}
                                {item.imges === "m" && <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2023/06/Visitacao-ao-NPaOc-Araguari-do-Grupamento-de-Patrulha-Naval-do-Nordeste-22-1280x721.jpg" />}
                                {item.imges === "ca" && <Card.Img variant="top" src="https://cdn1.sputniknewsbr.com.br/img/946/88/9468885_0:0:1025:577_1280x0_80_0_0_dcbac1291a91dc07b2a70902dcbf8f06.jpg" />}
                                {item.imges === "da" && <Card.Img variant="top" src="https://www.aereo.jor.br/wp-content/uploads//2022/11/Bayraktar-Kizilelma.jpg" />} 
                                <Card.Body>
                                    <Card.Header style={{background: '#000000', color: 'white',}}><strong>{item.nome}</strong></Card.Header>
                                </Card.Body>
                                <Card.Body>
                                    <ListGroup md={1}>
                                        <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Data de entrega: </strong> {item.data}</ListGroup.Item>  
                                        <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Investimento: </strong> {item.custo}</ListGroup.Item>  
                                        <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Quantidade de Armamento: </strong> {item.quantidade}</ListGroup.Item> 
                                    </ListGroup> 
                                </Card.Body>
                            </Card>
                            <div className='mb-3 iconess'>
                                <Link to={'/armamentos/' + i}>
                                    <Chip
                                    label="Editar"
                                    color="success"
                                    icon={<EditRoundedIcon />}
                                    />
                                </Link>{' '}
                                            
                                <Chip
                                    icon={<DeleteIcon />}
                                    color="error"
                                    label="Deletar"
                                    onClick={() => apagar(i)}
                                />
                            </div>
                        </Col>
                    ))
                    }
                </Row>
                <div className='text-center mb-3'>
                    <Link to={-1} className='btn btn-danger'><AiOutlineRollback/> Voltar</Link>
                </div>
                <div className='text-center mb-3'>
                    <a href="#inicio"><button class="botao" > <FcUp /></button></a>
                </div>
            </Container>
        </div>
    );
};

export default ListaArmamentos