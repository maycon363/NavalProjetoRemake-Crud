import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap'
import TreinamentoService from '../../services/academico/TreinamentoService'
import { Alert, Chip } from '@mui/material'
import { AiOutlineRollback, AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FcUp } from "react-icons/fc";
import swal from 'sweetalert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


const TreinamentoLista = () => {

  const [treinamento, setTreinamento] = useState([])

  useEffect(() => {

    setTreinamento(TreinamentoService.getAll())

  }, [])

  function apagar(id) {
    if(swal("Registro Deletado com Sucesso!!!", "Treinamento Cancelado", "success", {dangerMode: true,
    })){
      TreinamentoService.delete(id)
      setTreinamento(TreinamentoService.getAll())
    }
  }
    
  return (
    <div>
        <div className="text-center">
          <h1 id='inicio'>Total De Navios nos Treinamentos</h1>
        </div>
    {treinamento.length === 0 && <h1><Spinner animation="border" variant="success" /> Carregando... </h1>}

    <Container>
      <div className="text-center">
        <Link className='btn btn-success mb-3 butao' to={'/treinamento/create'}><AiOutlinePlus /> Inserir</Link>
      </div>
      <Row>
          {
            treinamento.map((item, i)=> (
              <Col key={i} md={4} className='ml-4 g-2 letra '  >
                <Card border="dark" style={{ alignItems: "center",  color: "#000000", width: '18rem' }}>
                  <Card.Body>
                    <Card.Header style={{background: '#000000', color: 'white',}}><strong>Nome do Navio:</strong><h6>{item.navio}</h6></Card.Header>
                  </Card.Body>
                  <Card.Body>
                    <ListGroup md={1}>
                      <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Classe do Navio: </strong>{item.classe}</ListGroup.Item>
                      <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Nome do Comandante: </strong>{item.guerra}</ListGroup.Item>
                      <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Data do Treinamento: </strong> {item.data}</ListGroup.Item>
                      <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Nome do Treinamento: </strong> {item.tipo}</ListGroup.Item>
                      <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Quantidade de marinheiros: </strong> {item.marinheiro}</ListGroup.Item>
                    </ListGroup>
                    <Card.Text style={{paddingLeft: "32px"}}>
                      <strong>Nível do Treinamento:</strong>                        
                    </Card.Text> 
                    <Card.Text  style={{paddingLeft: "50px", paddingRight: "50px"}}>
                        {item.situacao ===  "A" && <Alert variant="filled" severity="success">Nível baixo</Alert>}
                        {item.situacao ===  "I" && <Alert variant="filled" severity="error">Nível Alto</Alert>}
                        {item.situacao ===  "N" && <Alert variant="filled" severity="warning">Nível Médio</Alert>}
                    </Card.Text>   
                  </Card.Body>
                </Card>
                  <div className='mb-2 iconess'>
                  <Link to={'/treinamento/' + i}>
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
export default TreinamentoLista