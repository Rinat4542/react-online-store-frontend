import {React, useContext } from 'react'
import { Context } from '../index';
import {useNavigate} from 'react-router-dom'
import {Container, Nav, Navbar, Button} from 'react-bootstrap';

const NavBar = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate();
    return  (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Nav.Link href="/">КупиДевайс</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                
              
            </Nav>
            {user.isAuth
            ? 
            <div className="buttons">
                <Button variant="primary" className='m-2' onClick={() => navigate('/admin')}>Админ панель</Button>
                <Button variant="outline-dark" onClick={() => navigate('/auth ')}>Выйти</Button>
            </div>
            : 
            <div className="buttons">
            <Button variant="primary" onClick={() => user.setAuth(true)} className='m-2'>Авторизация</Button>
            
            </div>
            }
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;