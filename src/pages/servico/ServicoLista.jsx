import React, { useEffect, useState } from 'react'
import { Card, Col, Container, ListGroup, Row, Spinner} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ServicoService from '../../services/academico/ServicoService'
import { Chip } from '@mui/material'
import { AiOutlineRollback, AiOutlinePlus } from 'react-icons/ai'
import { FcUp } from "react-icons/fc";
import swal from 'sweetalert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const ServicoLista = () => {

  const [servico, setServico] = useState([])

  useEffect(() => {

    setServico(ServicoService.getAll())

  }, [])

  function apagar(id) {
    if(swal("Registro Deletado com Sucesso!!!", "Navio não está serviço", "success", {dangerMode: true,
    })){
      ServicoService.delete(id)
      setServico(ServicoService.getAll())
    }
  }

  return (
    <div>
      <div className="text-center">
        <h1 id='inicio'>Total De Navios no Serviço</h1>
      </div>
    {servico.length === 0 && <h1><Spinner animation="border" variant="success" /> Carregando... </h1>}

    <Container>
      <div className="text-center">
        <Link className='btn btn-success mb-3 butao' to={'/servico/create'}><AiOutlinePlus /> Inserir</Link>
      </div>
      <Row>
        {
          servico.map((item, i)=> (
            <Col key={i} md={4} className='ml-4 g-2 letra '  >
              <Card border="dark" style={{  color: "#000000", width: '18rem' }}>
                  {item.imgs === "18" && <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2015/11/Russian-cruiser-RFS-Moskva-aerial.jpg" />}
                  {item.imgs === "17" && <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2023/10/CVN-69-USS-Dwight-D-Eisenhower-454.jpg" />}
                  {item.imgs === "16" && <Card.Img variant="top" src="https://www.airway.com.br/wp-content/uploads/2017/12/HMS_Ocean.jpg" />}
                  {item.imgs === "15" && <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2015/01/Royal_Navy_Type_45_Destroyer_HMS_Dragon_MOD_45153124-e1524089086702.jpg" />}
                  {item.imgs === "14" && <Card.Img variant="top" src="https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2019/01/01/728103/20181231185546693631o.jpg" />}
                  {item.imgs === "13" && <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2015/04/FREMM-Carlo-Bergamini-foto-2-Marinha-Italiana.jpg" />}
                  {item.imgs === "12" && <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2023/02/BR71-MKII-corvette-1280x785.jpeg" />}
                  {item.imgs === "11" && <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2023/08/E2EC35C3-4A2D-407E-8482-B7B7228F21EF.jpeg" />} 
                <Card.Body>
                  <Card.Header style={{background: '#000000', color: 'white',}}><strong>{item.nome}</strong></Card.Header>
                </Card.Body>
                <Card.Body>
                  <ListGroup md={1}>
                      <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><h5>Nome do Comandante: </h5><strong>{item.guerra}</strong></ListGroup.Item>
                      <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><h5>Data do Serviço: </h5><strong> {item.data}</strong></ListGroup.Item>
                      <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><h5>Tipo de Serviço: </h5><strong>{item.missao}</strong></ListGroup.Item>
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
                <div className='mb-2 iconess'>
                  <Link to={'/servico/' + i}>
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

export default ServicoLista