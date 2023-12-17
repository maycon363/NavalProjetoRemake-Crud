import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Spinner, Container, ListGroup, Row, Col, Card  } from 'react-bootstrap'
import { Chip } from '@mui/material'
import {AiOutlineRollback} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FcUp } from "react-icons/fc";
import swal from 'sweetalert';
import { AiOutlinePlus } from 'react-icons/ai'
import CategoriaService from '../../services/academico/ConstrucaoService';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


const ConstrucaoLista = () => {

  const [construcao, setConstrucao] = useState([])

  useEffect(() => {

    setConstrucao(CategoriaService.getAll())

  }, [])

  function apagar(id) {
    if(swal("Deletado com Sucesso!!!", "Registro apagado", "success", {dangerMode: true,})){
      CategoriaService.delete(id)
      setConstrucao(CategoriaService.getAll())
    }
  }
    
  return (
    <div>
        <div className="text-center">
          <h1 id='inicio'>Total De Navios em Construção</h1>
        </div>
    {construcao.length === 0 && <h1><Spinner animation="border" variant="success" />Carregando... </h1>}

    <Container>
    <   div className="text-center">
          <Link className='btn btn-success mb-2 butao' to={'/construcao/create'}><AiOutlinePlus /> Inserir</Link>
        </div>
      <Row>
        {
          construcao.map((item, i)=> (
            <Col key={i} md={4} className='ml-4 g-2 '  >
              <Card border="dark" style={{  color: "#000000", width: '18rem' }}>
                  {item.imges === "28" && <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/4/45/US_Navy_110401-N-SF508-181_The_Ticonderoga-class_guided-missile_cruiser_USS_Shiloh_%28CG_67%29_transits_off_the_northeastern_coast_of_Japan.jpg" />}
                  {item.imges === "27" && <Card.Img variant="top" src="https://cdn-defesaaereanaval.nuneshost.com/wp-content/uploads/2012/12/CVP-Franc%C3%AAs.jpg" />}
                  {item.imges === "26" && <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2009/10/L9014-Tonnerre.jpg" />}
                  {item.imges === "25" && <Card.Img variant="top" src="https://www.seaforces.org/marint/Italian-Navy/Destroyer/D-553_DAT/D553-Andrea-Doria-10.jpg" />}
                  {item.imges === "24" && <Card.Img variant="top" src="https://1.bp.blogspot.com/-D5Ttraw5ac0/V4grdCtF9RI/AAAAAAAAEH4/svQQWj-sO80sC7XfSJ_hBdpEnVaXQYOZgCLcB/s1600/Virginia_class_submarine.jpg" />}
                  {item.imges === "23" && <Card.Img variant="top" src="https://1.bp.blogspot.com/-SXRq6xmd9q8/Xq7y3zO2c6I/AAAAAAADNm4/CjMGNgXfE_IsPMefEOP4SFsTmec7dnFFACLcBGAsYHQ/s1600/A1.jpg" />}
                  {item.imges === "22" && <Card.Img variant="top" src="https://pbs.twimg.com/media/Fji3zYvWYAgQs7e?format=jpg&name=4096x4096" />}
                  {item.imges === "21" && <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2017/06/OPV-Damen.jpg" />} 
                <Card.Body>
                  <Card.Header style={{ background: '#000000', color: 'white',}}><strong>{item.nome}</strong></Card.Header>
                </Card.Body>
                <Card.Body>
                  <ListGroup border="danger" md={1}>
                    <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Data de entrega: </strong> {item.data}</ListGroup.Item>
                    <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Investimento: </strong> {item.custo}</ListGroup.Item>
                    <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Características do navio: </strong> {item.carac}</ListGroup.Item>
                    <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Sistema de defesa do Navio: </strong> {item.siste}</ListGroup.Item>
                    <ListGroup.Item style={{background: '#1C1C1C', color: 'white',}}><strong>Radar do Navio: </strong> {item.radar}</ListGroup.Item>    
                  </ListGroup>
                </Card.Body>
              </Card>
              <div className='mb-3 iconess'>
                <Link to={'/construcao/' + i}>
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

export default ConstrucaoLista