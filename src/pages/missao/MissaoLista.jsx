import React, { useEffect, useState } from 'react'
import { Card, Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MissaoService from '../../services/academico/MissaoService'
import { AiOutlinePlus } from 'react-icons/ai'
import { Chip } from '@mui/material'
import { FcUp } from "react-icons/fc";
import { AiOutlineRollback } from 'react-icons/ai'
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import swal from 'sweetalert';


const MissaoLista = () => {

      const [missao, seMissao] = useState([])

      useEffect(() => {

        seMissao(MissaoService.getAll())

      }, [])

      function apagar(id) {
        if(swal("Registro Deletado com Sucesso!!!", "Registro apagado", "success", {dangerMode: true,
        })){
          MissaoService.delete(id)
          seMissao(MissaoService.getAll())
        }
      }

      return (
       <div>
        <div className="text-center">
          <h1 id='inicio'>Total De Navios em Missão</h1>
        </div>
    {missao.length === 0 && <h1><Spinner animation="border" variant="success" /> Carregando... </h1>}

    <Container>
      <div className="text-center">
        <Link className='btn btn-success mb-3 butao' to={'/missao/create'}><AiOutlinePlus /> Inserir</Link>
      </div>
      <Row>
        {
          missao.map((item, i)=> (
            <Col key={i} md={4} className='ml-4 g-2 letra '  >
              <Card border="dark" style={{  color: "#000000", width: '18rem' }}>
                <Card.Body>
                  <Card.Header style={{background: '#000000', color: 'white',}}><strong>{item.nome}</strong></Card.Header>
                </Card.Body>
                <Card.Body>
                  <ListGroup md={1}>
                    <ListGroup.Item  style={{background: '#1C1C1C', color: 'white',}}><strong>Classe do Navio: </strong>{item.classe}</ListGroup.Item>
                    <ListGroup.Item  style={{background: '#1C1C1C', color: 'white',}}><strong>Nome do Comandante: </strong>{item.guerra}</ListGroup.Item>
                    <ListGroup.Item  style={{background: '#1C1C1C', color: 'white',}}><strong>Nome da Missão: </strong> {item.missao}</ListGroup.Item>
                    <ListGroup.Item  style={{background: '#1C1C1C', color: 'white',}}><strong>Data da Missão: </strong> {item.data}</ListGroup.Item>
                  </ListGroup> 
                  <Card.Text className='lets'>
                    <strong>Situação</strong>                        
                  </Card.Text> 
                  <Card.Text className='lets2'>
                    {item.situacao ===  "A" && <Spinner animation="border" variant="success" />}
                    {item.situacao ===  "I" && <Spinner animation="border" variant="danger" />}
                    {item.situacao ===  "N" && <Spinner animation="border" variant="warning" />}
                  </Card.Text>   
                </Card.Body>
              </Card>
                <div className='mb-3 iconess'>
                  <Link to={'/missao/' + i}>
                    <Chip
                      icon={<EditRoundedIcon />}
                      label="Editar"
                      color="success"
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

export default MissaoLista