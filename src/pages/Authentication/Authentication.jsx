import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import LogoLogin from '../../assets/Img/LogoLogin.png'
import Logoif from '../../assets/Img/Logoif.png'
import { toast } from "react-toastify";
import Form from 'react-bootstrap/Form';
import './Authentication.css'
import  { useRef, useState, useContext, useEffect } from 'react';
import { UserContext } from '../../Context/UserContext.jsx'
import DatabaseDemo from "../../../dataDemo.js";
import { useNavigate } from "react-router-dom";


export default function Authentication(){
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

    const [selectedOption, setSelectedOption] = useState("Aluna");
    // const [verificaMat, setVerificaMat] = useState("")
    const [isActive, setIsActive] = useState(false);
    const containerRef = useRef(null);
    const SingUpClick = () => {
        containerRef.current.classList.add("right-panel-active");
      };
    const SingInClick = () => {
        setIsActive(!isActive);
        if (containerRef.current) {
          containerRef.current.classList.toggle("right-panel-active");
        }
      };

       const [userAluna, setUserAluna] = useState([]);
        useEffect(() => {
          setUserAluna(DatabaseDemo[0].alunas);
          // console.log(userAluna);
        }, []);
         const [userProfessora, setUserProfessora] = useState([]);
        useEffect(() => {
          setUserProfessora(DatabaseDemo[1].professoras);
          // console.log(userProfessora);
        }, []);

      const [inputs, setInputs] = useState({
        matricula: "",
        password: "",
        nome: "",
        email: "",
      });
    
      const { matricula, password, nome, email } = inputs;
    //   // const onChange = e =>
    //   //   setInputs({ ...inputs, [e.target.name]: e.target.value });
     if(selectedOption === "Aluna"){
     
      inputs.matricula = "1234567891012" 
      inputs.password = "*******"   
      inputs.nome = "Fox Student"
      inputs.email = "foxstudent@gmail.com"
     }else if(selectedOption === "Professora"){
      inputs.matricula = "0000000"
      inputs.password = "*******" 
     }

      // console.log(inputs);
      

      const fazerCadastro = async e =>{
        e.preventDefault();
         toast.success("Usuário criado com sucesso, faça o login"); 
           
      }
     const fazerLogin = async e => {
        e.preventDefault();
        
        const isAluna = selectedOption === "Aluna";
        const isProfessora = selectedOption === "Professora";

     if (isAluna) {
              navigate("/home");
            } else if (isProfessora) {
              navigate("/homeProfessor");     
              
            }
       
     }
    
    return (
        <>
        
        <Container className="d-flex align-items-center justify-content-center flex-column" style={{minHeight: '100vh', marginTop:'90px'}}>
        <div  ref={containerRef} className='box'>
            <div className="form-container sign-up-container">
            <Image src={LogoLogin} style={{width:'100px'}} className="p-3 mb-2"/>

                <form  className="form-login" method="post" onSubmit={fazerCadastro}>
                <h1 style={{color:'#004d2a', fontSize:'25px', fontWeight:'bold'}} className="mt-2">Crie sua conta</h1>
                
                <input type="text" 
                placeholder="Nome" 
                name="nome" 
                value={nome}
                disabled
                onChange={e => onChange(e)}/>
                <input type="email"
                placeholder="Email" 
                name="email"
                value={email}
                disabled
                onChange={e => onChange(e)}/>
                <input 
                type="text" 
                placeholder="Matrícula" 
                name="matricula"
                value={matricula}
                disabled
                required
                maxLength={12}
                minLength={7}
                onChange={e => onChange(e)} />

                {/* <span className="verficar-mat p-1">{verificaMat}</span> */}

                <input type="password" 
                placeholder="Senha" 
                name="password"
                value={password}
                disabled
                onChange={e => onChange(e)}/>
                
                <button className="mt-2" type="submit">Registrar</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
            <Image src={LogoLogin} style={{width:'100px'}} className="p-3 mb-2"/>

                <form onSubmit={fazerLogin} className="form-login" method="post">
                <h1 style={{color:'#004d2a', fontWeight:'bold'}}>Login</h1>
                <div className="d-flex flex-row justify-content-around radio-check m-3">    
                <Form.Check type="radio" id="aluna">
                    <Form.Check.Input type="radio"   
                        value="Aluna"
                        checked={selectedOption === "Aluna"}
                        onChange={() => setSelectedOption("Aluna")}/>
                    <Form.Check.Label>Aluna</Form.Check.Label> 
                </Form.Check>
    
                <Form.Check type="radio" id="professora">
                    <Form.Check.Input type="radio"
                        value="Professora"
                        checked={selectedOption === "Professora"}
                        onChange={() => setSelectedOption("Professora")}/>
                    <Form.Check.Label>Professora</Form.Check.Label> 
                </Form.Check>   
                </div>
                
                <input 
                type="text" 
                placeholder="Matrícula" 
                name="matricula"  
                value={matricula}
                required
                maxLength={12}
                minLength={7}
                disabled
                />
                {/* <span className="verficar-mat p-1">{verificaMat}</span> */}
                <input 
                type="password" 
                placeholder="Senha"
                name="password"
                value={password}
                disabled
                 />
                <button type="submit" className="mt-3" >Entrar</button>
                </form>
               
            </div>
            <div className="overlay-container">
                <div className="overlay">
                <div className='overlay-panel overlay-left'>
                <h1 className="h1-login">Já tem conta?</h1>
                <p>Entre com suas informações cadastradas</p>
                <button className="ghost"  onClick={SingInClick}>Entrar</button>
                </div>
                <div className='overlay-panel overlay-right'>
                <h1 className="h1-login">Não tem conta ainda?</h1>
                <p>Registre-se e junte-se a nós</p>
                <button className="ghost" onClick={SingUpClick}>Registrar</button>
                </div>
                </div>
            </div>
        </div>
        <Image src={LogoLogin} style={{width:'190px'}} className="mt-3"/>
        <a href="/sobre" className="link-sobre">Clique aqui e saiba mais <span>INOVA IF - Módulo Agenda</span></a>
        </Container>
        </>
    )
}