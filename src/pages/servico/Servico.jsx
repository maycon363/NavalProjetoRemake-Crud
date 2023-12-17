import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import ReactPlayer from 'react-player'
import servicoValidator from '../../validators/servicoValidator';
import ServicoService from '../../services/academico/ServicoService'
import { mask } from 'remask';
import ComandatesService from '../../services/academico/ComandatesService';

const Servico = () => {
    
  const params = useParams();
  const navigate = useNavigate();
  const {register, handleSubmit, setValue, formState: { errors },} = useForm();

  const comandante = ComandatesService.getAll()

  useEffect(() => {
    if (params.id) {
      const servi = ServicoService.get(params.id);

      for (let campo in servi) {
        setValue(campo, servi[campo]);
      }
    }
  }, []);

  function salvar(dados) {
    if (params.id) {
      ServicoService.update(params.id, dados);
    } else {
      ServicoService.create(dados);
    }
    navigate("/servico");
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }
  
    return (
        <div>
            <div className='para'>
                <ReactPlayer playing={true} loop={true} controls={false} onPlay={true} url='https://youtu.be/4ggq-zu3b20' />
            </div>
            <div className="text-center">
                <h1>Inserir Navio para Serviço</h1>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="imgs">
                  <Form.Label>Classe de Navio: </Form.Label>
                    <Form.Select aria-label="Default select example" {...register("imgs", servicoValidator.imgs)}>
                        <option value={"18"}>Cruzador</option>
                        <option value={"17"}>Porta-Aviões</option>
                        <option value={"16"}>Porta-helicopteros</option>
                        <option value={"15"}>Destroyer</option>
                        <option value={"14"}>Submarino</option>
                        <option value={"13"}>Fragata</option>
                        <option value={"12"}>Coverta</option>
                        <option value={"11"}>Navio Patrulha</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome do Navio: </Form.Label>
                    <Form.Control type="text" placeholder="Informe Nome do Navio" isInvalid={errors.nome} {...register("nome", servicoValidator.nome )} />
                    {errors.nome && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.nome.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="missao">
                    <Form.Label>Tipo de Serviço: </Form.Label>
                    <Form.Control type="text" placeholder="Informe Tipo de Serviço" isInvalid={errors.missao} {...register("missao", servicoValidator.missao )} />
                    {errors.missao && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.missao.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="guerra">
                  <Form.Label>Nome do Comandante: </Form.Label>
                  <Form.Select {...register("guerra", servicoValidator.guerra)}>
                    <option>Selecione</option>
                    {comandante.map((item, i) => (
                    <option key={i} value={item.guerra}>{item.guerra}</option>
                     ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data do dia de Serviço: </Form.Label>
                    <Form.Control type="text" placeholder="Informe data do Serviço" isInvalid={errors.data} {...register("data", servicoValidator.data )} 
                    mask="99/99/9999" onChange={handleChange}/>
                    {errors.data && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.data.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="situacao">
                    <Form.Label>Situação </Form.Label>
                      <Form.Select {...register("situacao", servicoValidator.situacao)}>
                        <option value={"N"}>Selecione</option>
                        <option value={"A"}>Ativo</option>
                        <option value={"I"}>Inativo</option>
                      </Form.Select>
                </Form.Group>
                <div className="text-center mb-3">
                    <Button onClick={handleSubmit(salvar)} className='btn btn-success butao'><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger butao'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default Servico