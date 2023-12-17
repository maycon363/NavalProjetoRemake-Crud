import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {  Spinner, Container, ListGroup, Col, Row, Card } from 'react-bootstrap'
import ManutencaoService from '../../services/academico/ManutencaoService'
import { Chip } from '@mui/material'
import { Link } from 'react-router-dom'
import {AiOutlineRollback} from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import swal from 'sweetalert';
import { FcUp } from "react-icons/fc";
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


const ManutencaoLista = () => {

  const [manutencao, seManutencao] = useState([])

  useEffect(() => {

    seManutencao(ManutencaoService.getAll())

  }, [])

  function apagar(id) {
    if(swal("Deletado com Sucesso!!!", "Registro apagado", "success", {dangerMode: true,
    })){
      ManutencaoService.delete(id)
      seManutencao(ManutencaoService.getAll())
    }
  }
    
  return (
    <div>
        <div className="text-center">
          <h1 id='inicio'>Total De Navios em Manutenção</h1>
        </div>
    {manutencao.length === 0 && <h1><Spinner animation="border" variant="success" />Carregando... </h1>}

    <Container>
      <div className="text-center">
        <Link className='btn btn-success butao' to={'/manutencao/create'}><AiOutlinePlus /> Inserir</Link>
      </div>
      <Row>
          {
            manutencao.map((item, i)=> (
              <Col key={i} md={4} className='ml-4 g-2 letra '  >
                <Card border="dark" style={{  color: "#000000", width: '18rem' }}>
                  <Card.Body>
                    <Card.Header style={{background: '#000000', color: 'white',}}><strong>Nome do Navio: </strong>{item.nome}</Card.Header>
                  </Card.Body>
                  <Card.Body>
                  <ListGroup md={1}>
                    <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Investimento: </strong>{item.custo}</ListGroup.Item >
                    <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Classe do Navio: </strong>{item.classe}</ListGroup.Item >
                    <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Data de entrega: </strong> {item.data}</ListGroup.Item >
                  </ListGroup>
                    <Card.Text style={{paddingLeft: "85px"}}>
                      <strong>Progresso</strong>                        
                    </Card.Text>
                    <Card.Text className='lets2'>
                        {item.situacao ===  "A" && <Spinner animation="border" variant="success" />}
                        {item.situacao ===  "I" && <Spinner animation="border" variant="danger" />}
                        {item.situacao ===  "N" && <Spinner animation="border" variant="warning" />} 
                    </Card.Text>                     
                  </Card.Body>
                </Card>
                  <div className='mb-3 iconess'>
                  <Link to={'/manutencao/' + i}>
                    <Chip
                      icon={<EditRoundedIcon />}
                      label="Editar"
                      color="success"
                    />
                  </Link>
                  
                  {' '}
                    
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

export default ManutencaoLista