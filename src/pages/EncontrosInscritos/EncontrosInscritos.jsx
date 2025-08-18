
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './EncontrosInscritos.css'
import Paginacao from '../../components/Paginacao/Paginacao.jsx';
import { userLogged } from "../../Service/userservice.js";
import { toast } from "react-toastify";
import { useEffect, useState, useContext} from 'react';
import { UserContext } from '../../Context/UserContext.jsx'
import DatabaseDemo from "../../../dataDemo.js";


const ITEMS_PER_PAGE = 24;

export default function EncontrosInscritos(){
      const [encontrosInscrito, setEncontrosInscrito] = useState([]);
      
      useEffect(() => {
        setEncontrosInscrito(DatabaseDemo[3].encontrosInscrito);
       
      }, []);
      
      function formatDate(dateString) {
        const datePart = dateString.substring(0, 10);
        const parts = datePart.split("-")
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
      }

      const removerInscricao =  (id_inscricao) => {
         //limpa o card que foi excluido
          toast.success("Inscrição excluída com sucesso!")
            const updatedEncontrosInscritos = encontrosInscrito?.filter(item => item.id_inscricao !== id_inscricao);
            setEncontrosInscrito(updatedEncontrosInscritos);
          
      }
      const [encontroInscritoCurrentPage, setEncontroInscritoCurrentPage] = useState(1);
      
      const encontrosInscritoTotalPages = Math.ceil(encontrosInscrito?.length / ITEMS_PER_PAGE);

      const [busca, setBusca] = useState('');
      const lowerBusca = busca.toLowerCase();
      const filteredEncontrosInscrito = encontrosInscrito?.filter((inscrito) => {
        return Object.values(inscrito).some(value => typeof value === 'string' && value.toLowerCase().includes(lowerBusca));
      });

      const encontrosInscritoPaginatedData = filteredEncontrosInscrito?.slice(
        (encontroInscritoCurrentPage - 1) * ITEMS_PER_PAGE,
        encontroInscritoCurrentPage * ITEMS_PER_PAGE
      );
     
      const handleInscritoPageChange = (page) => {
        setEncontroInscritoCurrentPage(page);
      };
    
     
    return (
      <>
        <Container className="box-container mt-5">
        <div className="d-flex h-50">
              <InputGroup className="w-100 h-25" style={{minWidth:'370px'}}>
                <Form.Control
                    type="search"
                    placeholder="Procurar por título, componente, AAAA-MM-DD, 00:00, sala, professora..."
                  
                    aria-label="Search"
                    value={busca}
                    onChange={(ev) => setBusca(ev.target.value)}
                  />
                <InputGroup.Text id="Search" ><i className="bi bi-search"></i></InputGroup.Text>
              </InputGroup>
            </div>
        <h1 className='h1-encontro-inscrito'>Meus Encontros</h1>
            
          <Row>
            <Col>
                {/* verificar se esta vazio */}
              {encontrosInscrito && encontrosInscrito.length > 0 ? (
                <Row xxl={3} xl={2} lg={2} md={1}  className="g-3 mt-2 ">
                  {encontrosInscritoPaginatedData.map((inscrito, index) => (
                    <Col key={index}>
                      <Card className='cardInscrito-container'>
                      <Card.Header className='d-flex justify-content-end card-header'>{index + 1}</Card.Header>
                        <Card.Body>
                          <Card.Title className='py-1 '>{inscrito.titulo_encontro}</Card.Title>
                          <ListGroup className="list-group-flush">
                          <ListGroup.Item className="px-1">Componente Curricular: <span>{inscrito.componente_curricular}</span></ListGroup.Item>
                          <ListGroup.Item className="px-1">Descrição: <span>{inscrito.descricao_encontro}</span></ListGroup.Item>
                          <ListGroup.Item className="px-1">Critérios de Avaliação: <span>{inscrito.criterios_avaliacao}</span></ListGroup.Item>
                            <ListGroup.Item className="px-1 pe-4 d-flex flex-row justify-content-between">
                              <div>Data: <span>{formatDate(inscrito.data_inicio)}</span></div>
                              <div>Horário: <span>{inscrito.hora_inicio}</span> até <span>{inscrito.hora_fim}</span></div>
                              </ListGroup.Item>
                        
                            <ListGroup.Item className="px-1">Sala: <span>{inscrito.sala}</span></ListGroup.Item>
                            <ListGroup.Item className="px-1">Professora(o): <span>{inscrito.nome_professora}</span></ListGroup.Item>

                          </ListGroup>
                          
                        
                        </Card.Body>
                        <Card.Footer className="card-footer-inscrito"> 
                        <Button variant="danger" className='' onClick={() => removerInscricao(inscrito.id_inscricao)}>
                            <i className="bi bi-trash p-1"></i>
                            Cancelar Inscrição
                          </Button>
                          </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                  <p>Não há encontros inscritos.</p>                 
                  )}
            </Col>
            <Paginacao  
              currentPage={encontroInscritoCurrentPage}
              totalPages={encontrosInscritoTotalPages}
              onPageChange={handleInscritoPageChange} 
              />
          </Row>
        </Container> 
      </>
    
    )
}