import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ReactPlayer from 'react-player';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';
import ArmamentosService from '../../services/academico/ArmamentosService';
import armamentoValidator from '../../validators/armamentoValidator';

const Armamentos = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
        useEffect(() => {
            
            if (params.id) {
            const armamentos = ArmamentosService.get(params.id)

            for (let campo in armamentos) {
                setValue(campo, armamentos[campo])
            }
            }
        }, [])

        function salvar(dados) {

            if (params.id) {
                ArmamentosService.update(params.id, dados)
            } else {
                ArmamentosService.create(dados)
            }

            navigate("/armamentos")
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
                <div className='text-center'>
                    <h1>Inserir Armamento</h1>
                </div>
                <Form>          
                    <Form.Group className="mb-3" controlId="ships">
                    <Form.Label>Armamento: </Form.Label>
                    <Form.Select aria-label="Default select example" {...register("imges", armamentoValidator.imges)}>
                        <option value={"cp"}>Canhão Principal</option>
                        <option value={"cs"}>Canhão Segundario</option>
                        <option value={"man"}>Mísseis Anti-navio</option>
                        <option value={"mae"}>Mísseis Anti-aéreo</option>
                        <option value={"t"}>Torpedos</option>
                        <option value={"m"}>Metralhadora .50</option>
                        <option value={"ca"}>Defesa Anti-aérea</option>
                        <option value={"da"}>Drone De Ataque</option>
                    </Form.Select>
                        <Form.Label>Nome do Armamento: </Form.Label>
                        <Form.Control type="text" placeholder="Informe Nome do Armamento" isInvalid={errors.nome} {...register("nome", armamentoValidator.nome )} />
                        {errors.nome && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.nome.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="data">
                        <Form.Label>Data limite da entrega: </Form.Label>
                        <Form.Control type="text" placeholder="Informe Data limite da entrega" isInvalid={errors.data} {...register("data", armamentoValidator.data )} 
                        mask="99/99/9999" onChange={handleChange} />
                        {errors.data && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.data.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="custo">
                        <Form.Label>Investimento: </Form.Label>
                        <Form.Control type="text" placeholder="Informe o Investimento" isInvalid={errors.custo} {...register("custo", armamentoValidator.custo )}/>
                        {errors.custo && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.custo.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="quantidade">
                        <Form.Label>Quantidade: </Form.Label>
                        <Form.Control aria-checked={true} type="number" placeholder="Informe a Quantidade" isInvalid={errors.quantidade} {...register("quantidade", armamentoValidator.quantidade )}/>
                        {errors.quantidade && <p style={{color: "OrangeRed", background: "Black", border: "15px", borderBlock: "10px"}}>{errors.quantidade.message}</p>}
                    </Form.Group>
                <div className="text-center mb-5" >
                    <Button onClick={handleSubmit(salvar)} className='btn btn-success butao'><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger butao'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}
export default Armamentos