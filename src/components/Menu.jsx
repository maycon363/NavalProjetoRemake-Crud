import React from 'react'
import { Card, Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Card.Img style={{ height: 40,  width: 40,}} src="https://logodownload.org/wp-content/uploads/2018/01/marinha-brasil-logo.png"/>
          <Navbar.Brand href="/">Frota Naval Remake</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Lista Geral</Link>
            <Link className="nav-link" to="/solicita">Solicitação de Serviços</Link>
            <Link className="nav-link" to="/infor">Informações dos Navios</Link>
            <Dropdown>
              <NavDropdown title="Serviços" className='show' id="basic-nav-dropdown">
                <Link className="dropdown-item" to="/manutencao">Manutenção</Link>
                <Link className="dropdown-item" to="/construcao">Construção</Link>
                <Link className="dropdown-item" to="/missao">Missao</Link>
                <Link className="dropdown-item" to="/treinamento">Treinamento</Link>
                <Link className="dropdown-item" to="/servico">Serviço</Link>
                <Link className="dropdown-item" to="/comandantes">Comandantes</Link>
                <Link className="dropdown-item" to="/armamentos">Armamentos</Link>
              </NavDropdown>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu