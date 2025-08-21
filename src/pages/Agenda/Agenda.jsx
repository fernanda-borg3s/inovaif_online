import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendario from '../../components/Calendario/Calendario';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState, useContext} from 'react';
import DatabaseDemo from "../../../dataDemo.js";


export default function Agenda(){
      
      const[dataEncontroDisponivel, setDataEncontroDisponivel] = useState([]);

  useEffect(() => {
    setDataEncontroDisponivel(DatabaseDemo[2].encontros);

  }, []);

      //objeto para o calendario
        const events =  dataEncontroDisponivel && dataEncontroDisponivel.map((event) => {
          return {
            title: event.titulo_encontro,
            start: event.data_inicio,
            end:event.data_inicio,
            
            backgroundColor: '#02a059',
            borderColor:'#02a059',
           
            dataInicio: event.data_inicio,
            horaInicio:event.hora_inicio,
            horaFim:event.hora_fim,
            componente:event.componente_curricular,
            professora:event.nome_professora,
            sala:event.sala,
            descricao:event.descricao_encontro,
            criterios:event.criterios_avaliacao
          };
        });
      
  return (
        <>
          <Container fluid="md" style={{minHeight:'90vh'}}>
            <h1 style={{margin:'30px 0', color:'#004d2a', fontWeight:'bold', textAlign:'center'}}>Sua Agenda</h1>
              <Row >
                <h2 style={{color:'#2B9EB3'}}>Encontros Disponíveis</h2>
                <Col >
                  <Calendario events={events}/>
                </Col>
              </Row>
            
          </Container>
          <Footer/>
        </>
    )
}