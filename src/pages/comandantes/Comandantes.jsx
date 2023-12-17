import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { mask } from 'remask'
import ComandatesService from '../../services/academico/ComandatesService'
import ComandantesValidator from '../../validators/ComandantesValidator'

const Comandantes = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  
    useEffect(() => {
        
        if (params.id) {
        const comandante = ComandatesService.get(params.id)

        for (let campo in comandante) {
            setValue(campo, comandante[campo])
        }
        }
    }, [])

    function salvar(dados) {

        if (params.id) {
            ComandatesService.update(params.id, dados)
        } else {
            ComandatesService.create(dados)
        }

        navigate('/comandantes')
    }

    function Change(event) {
        const mascara = event.target.getAttribute('mask')
        setValue(event.target.name, mask(event.target.value, mascara))
    }

     return (
        <div>
            <div className='para'>
                <ReactPlayer playing={true} loop={true} controls={false} onPlay={true} url='https://youtu.be/xXzJhWt1gY4?t=31' />
            </div>
            <div className="text-center">
            <h1>Inserir Novo Comandante</h1>
            </div>
            <Form>        
                <Form.Group className="mb-3" controlId="guerra">
                    <Form.Label>Nome de Guerra: </Form.Label>
                    <Form.Control type="text" placeholder="Informe o seu Nome" isInvalid={errors.guerra} {...register("guerra", ComandantesValidator.guerra )} />
                    {errors.guerra && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.guerra.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="idade">
                    <Form.Label>Idade: </Form.Label>
                    <Form.Control type="number" placeholder="Informe a sua idade" isInvalid={errors.idade} {...register("idade", ComandantesValidator.idade )} />
                    {errors.idade && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.idade.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data de Nascimento: </Form.Label>
                    <Form.Control type="text" placeholder="Informe Data limite" isInvalid={errors.data} {...register("data", ComandantesValidator.data )} 
                    mask="99/99/9999" onChange={Change} />
                    {errors.data && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.data.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control type="text" placeholder="Informe seu CPF" isInvalid={errors.cpf} {...register("cpf", ComandantesValidator.cpf )} 
                    mask="999.999.999-99" onChange={Change} />
                    {errors.cpf && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.cpf.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="rg">
                    <Form.Label>RG: </Form.Label>
                    <Form.Control type="text" placeholder="Informe o seu RG" isInvalid={errors.rg} {...register("rg", ComandantesValidator.rg)} 
                    mask="9.999.999" onChange={Change} />
                    {errors.rg && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.rg.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="situacao">
                    <Form.Label>Situação: </Form.Label>
                    <Form.Select aria-label="Default select example" {...register("situacao", ComandantesValidator.situacao)}>
                        <option value={"N"}>Selecione</option>
                        <option value={"A"}>Ativo</option>
                        <option value={"I"}>Inativo</option>
                    </Form.Select>
                </Form.Group>
                <div className="text-center mb-5" >
                    <Button onClick={handleSubmit(salvar)} className=' btn btn-success butao'><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger butao'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default Comandantes