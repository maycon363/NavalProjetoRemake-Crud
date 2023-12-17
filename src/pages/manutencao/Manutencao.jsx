import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams} from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import manutencaoValidator from '../../validators/manutencaoValidator';
import ManutencaoService from '../../services/academico/ManutencaoService';
import ReactPlayer from 'react-player/youtube'
import { useForm } from 'react-hook-form';
import { mask } from 'remask';

const Manutencao = () => {
    
  const params = useParams();
  const navigate = useNavigate();
  const {register, handleSubmit, setValue, formState: { errors },} = useForm();

  useEffect(() => {
    if (params.id) {
      const manu = ManutencaoService.get(params.id);

      for (let campo in manu) {
        setValue(campo, manu[campo]);
      }
    }
  }, []);

  function salvar(dados) {
    if (params.id) {
      ManutencaoService.update(params.id, dados);
    } else {
      ManutencaoService.create(dados);
    }
    navigate("/manutencao");
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }
    return (
        <div>
            <div className='para'>
                <ReactPlayer playing={true} loop={true} controls={false} onPlay={true} url='https://youtu.be/55rZ9LMUsNY' />
            </div>
            <div className="text-center">
              <h1>Inserir Navio para Manutenção</h1>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome do Navio: </Form.Label>
                    <Form.Control type="text" placeholder="Informe Nome do Navio" isInvalid={errors.nome} {...register("nome", manutencaoValidator.nome )} />
                    {errors.nome && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.nome.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="classe">
                  <Form.Label>Classe: </Form.Label>
                  <Form.Control type="text" placeholder="Informe Nome do Navio" isInvalid={errors.classe} {...register("classe", manutencaoValidator.classe )} />
                    {errors.classe && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.classe.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data limite da entrega: </Form.Label>
                    <Form.Control type="text" placeholder="Informe Data Limite da Entrega" isInvalid={errors.data} {...register("data", manutencaoValidator.data )} 
                    mask="99/99/9999" onChange={handleChange} />
                    {errors.data && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.data.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="custo">
                    <Form.Label>Investimento: </Form.Label>
                    <Form.Control type="text" placeholder="Informe o Investimento" isInvalid={errors.custo} {...register("custo", manutencaoValidator.custo )} />
                    {errors.custo && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.custo.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="situacao">
                    <Form.Label>Situação: </Form.Label>
                      <Form.Select {...register("situacao", manutencaoValidator.situacao)}>
                        <option value={"N"}>Não Iniciado</option>
                        <option value={"A"}>Rapido</option>
                        <option value={"I"}>Lento</option>
                      </Form.Select>
                </Form.Group>
                <div className="text-center mb-5">
                    <Button onClick={handleSubmit(salvar)} className='btn btn-success butao'><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger butao'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default Manutencao