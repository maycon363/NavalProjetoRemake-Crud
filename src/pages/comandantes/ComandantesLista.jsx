import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Spinner, Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import {AiOutlineRollback} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import { AiOutlinePlus } from 'react-icons/ai'
import ComandatesService from '../../services/academico/ComandatesService'
import { FcUp } from "react-icons/fc";
import { Chip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const ComandantesLista = () => {
    const [comandante, setConmandante] = useState([])

  useEffect(() => {

    setConmandante(ComandatesService.getAll())

  }, [])

  function apagar(id) {
    if(swal("Deletado com Sucesso!!!", "Registro apagado", "success", {dangerMode: true,})){
        ComandatesService.delete(id)
        setConmandante(ComandatesService.getAll())
    }
  }
    

  return (
    <div>
        <div className="text-center">
          <h1 id='inicio'>Total De Comandantes de Esquadra</h1>
        </div>
        {comandante.length === 0 && <h1><Spinner animation="border" variant="success" />Carregando... </h1>}

    <Container>
      <div className="text-center">
        <Link className='btn btn-success mb-2 butao' to={'/comandantes/create'}><AiOutlinePlus /> Inserir</Link>
      </div>
      <Row>      
            {
            comandante.map((item, i)=> (
                <Col key={i} md={4} className='ml-4 g-2 letra '  >
                    <Card border="success" style={{  color: "#000000", width: '18rem' }}>      
                      <Card.Body>
                        <Card.Header style={{background: '#000000', color: 'white', borderLeft: "10px solid DodgerBlue"}}><strong>Nome do Comandante:</strong><h5>{item.guerra}</h5></Card.Header>
                      </Card.Body>
                      <Card.Body>
                        <ListGroup md={4} >
                            <ListGroup.Item style={{background: '#1C1C1C', color: 'white', borderTop: "25px solid DodgerBlue"}}><strong>Data de Nascimento: </strong><h5>{item.data}</h5></ListGroup.Item>
                            <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Idade: </strong><h5>{item.idade}</h5></ListGroup.Item>
                            <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>CPF: </strong><h5>{item.cpf}</h5></ListGroup.Item>
                            <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>RG: </strong><h5>{item.rg}</h5></ListGroup.Item>
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
                    <div className='mb-4 iconess'>
                        <Link to={'/comandantes/' + i}>
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
export default ComandantesLista