import logo from '../../assets/Img/LogoWhite.png'
import '../../App.jsx' //outlet
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import UserLogo from '../../assets/Img/UserLogo.png'
import { Outlet, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useEffect, useContext, useState} from 'react';
import { toast } from 'react-toastify';
import DatabaseDemo from '../../../dataDemo.js';



const baseURL = 'http://localhost:3000'

export function NavbarC(){
  const [userAluna, setUserAluna] = useState([]);
  useEffect(() => {
    setUserAluna(DatabaseDemo[0].alunas);
    console.log(userAluna);
  }, []);

    const navigate = useNavigate();
        function signout() {
          navigate("/");
          toast.success("Logout com sucesso!")
        }
  
    return (
        <>
        {['sm'].map((expand) => (
            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 navStyle" >
              <Container >
                <Navbar.Brand href="/home">  
                <div className="logo-inova">
                    <img src={logo} alt="Logo do inova if"/>
                </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start"
                >
                  <Offcanvas.Header closeButton>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 navLink">
                      <Nav.Link href="/home">Início</Nav.Link>
                  
                      <NavDropdown
                        title="Encontros"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        className="dropdown-left"
                      >
                        <NavDropdown.Item href="/home/encontrosInscritos">
                        <i className="bi bi-mortarboard"></i>
                          Meus Encontros</NavDropdown.Item>
                        <NavDropdown.Item href="/home/encontrosDisponivel">
                        <i className="bi bi-card-list"></i>
                          Encontros Disponíveis
                        </NavDropdown.Item>
                    
                      </NavDropdown>
                      <NavDropdown
                        title="Agenda"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        className="dropdown-left"
                      >
                        <NavDropdown.Item href="/home/agenda">
                        <i className="bi bi-mortarboard"></i>
                          Encontros Disponíveis</NavDropdown.Item>
                        <NavDropdown.Item href="/home/agendaInscrito">
                        <i className="bi bi-card-list"></i>
                          Encontros Inscritos
                        </NavDropdown.Item>
                    
                      </NavDropdown>
         
                      <Dropdown className='dropdown-left'>
                        <Dropdown.Toggle  id="dropdown-basic" className='avatar-perfil'>
                          <img src={UserLogo} alt="raposa" className="user-img" ></img>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Header>Nome:</Dropdown.Header>
                          <Dropdown.Item href="#" disabled>{userAluna.nome_aluna}</Dropdown.Item>
                          <Dropdown.Header>Matrícula:</Dropdown.Header>
                          <Dropdown.Item href="#" disabled>{userAluna.mat_aluna}</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item onClick={signout} ><i className="bi bi-box-arrow-right"></i>Sair</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                                      
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>    
          ))}

          
            <Outlet/>
      </>
    )
}