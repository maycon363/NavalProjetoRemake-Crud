import React, { useEffect } from 'react'
import { Button, Form} from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import ReactPlayer from 'react-player'
import construcaoValidator from '../../validators/construcaoValidator';
import ConstrucaoService from '../../services/academico/ConstrucaoService';
import { mask } from 'remask';


const Construcao = () => {
    
  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  
  useEffect(() => {
    
    if (params.id) {
      const construc = ConstrucaoService.get(params.id)

      for (let campo in construc) {
        setValue(campo, construc[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      ConstrucaoService.update(params.id, dados)
    } else {
      ConstrucaoService.create(dados)
    }

    navigate('/construcao')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }
  

    return (
        <div>
            <div className='para'>
                <ReactPlayer playing={true} loop={true} controls={false} onPlay={true} url='https://youtu.be/Rr4utWfl90A' />
            </div>
            <div className="text-center">
              <h1>Inserir Navio para Construção</h1>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="imges">
                <Form.Label>Classe de Navio: </Form.Label>
                  <Form.Select aria-label="Default select example" {...register("imges", construcaoValidator.imgs)}>
                      <option value={"28"}>Cruzador</option>
                      <option value={"27"}>Porta-Aviões</option>
                      <option value={"26"}>Porta-helicopteros</option>
                      <option value={"25"}>Destroyer</option>
                      <option value={"24"}>Submarino</option>
                      <option value={"23"}>Fragata</option>
                      <option value={"22"}>Coverta</option>
                      <option value={"21"}>Navio Patrulha</option>
                  </Form.Select>
                </Form.Group>          
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome do Navio: </Form.Label>
                    <Form.Control type="text" placeholder="Informe Nome do Navio" isInvalid={errors.nome} {...register("nome", construcaoValidator.nome )} />
                    {errors.nome && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.nome.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="radar">
                    <Form.Label>Radar: </Form.Label>
                    <Form.Control type="text" placeholder="Informe qual será o radar pro Navio" isInvalid={errors.radar} {...register("radar", construcaoValidator.radar )} />
                    {errors.radar && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.radar.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="siste">
                    <Form.Label>Sistema de defesa do Navio: </Form.Label>
                    <Form.Control type="text" placeholder="Informe qual será o sistema de defesa do Navio" isInvalid={errors.siste} {...register("siste", construcaoValidator.siste )} />
                    {errors.siste && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.siste.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="carac">
                    <Form.Label>Informe as características do navio: </Form.Label>
                    <Form.Control type="text" placeholder="Informe características do Navio" isInvalid={errors.carac} {...register("carac", construcaoValidator.carac )} />
                    {errors.carac && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.carac.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data limite da entrega: </Form.Label>
                    <Form.Control type="text" placeholder="Informe Data limite" isInvalid={errors.data} {...register("data", construcaoValidator.data )} 
                    mask="99/99/9999" onChange={handleChange} />
                    {errors.data && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.data.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="custo">
                    <Form.Label>Investimento: </Form.Label>
                    <Form.Control type="text" placeholder="Informe o Investimento" isInvalid={errors.custo} {...register("custo", construcaoValidator.custo )}/>
                    {errors.custo && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.custo.message}</p>}
                </Form.Group>
                <div className="text-center mb-5" >
                    <Button onClick={handleSubmit(salvar)} className=' btn btn-success butao'><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger butao'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default Construcao