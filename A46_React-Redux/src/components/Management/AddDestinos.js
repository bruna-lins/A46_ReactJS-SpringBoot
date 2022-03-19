import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import destinosService from '../../services/destinosService';
import styles from './Management.module.css';

const AddDestinos = () => {

    const [nome, setNome] = useState('')
    const [pais, setPais] = useState('')
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateDestino = (e) => { 
        e.preventDefault();

        const destino = {nome, pais, descricao, valor}

        if(id) { 
            destinosService.updateDestino(id, destino).then((response) => { 
                history.push('/management')
            }).catch(error => {
                console.log(error)
            })

        } else { 
            destinosService.createDestino(destino).then((response) => {
                console.log(response.data)
                history.push('/management');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => { 
        destinosService.getDestinosById(id).then((response) => {
            setNome(response.data.nome)
            setPais(response.data.pais)
            setDescricao(response.data.descricao)
            setValor(response.data.valor)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => { 
        if(id){
            return <h2 className={styles.ttl}> Atualizar Destino </h2>
        } else { 
            return <h2 className={styles.ttl}> Adicionar Destino </h2>
        }
    }

    return (
        <div>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <br />
                        { title() }
                        <div className='card-body'>
                            <form className={styles.forms}>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> Nome </label>
                                    <input
                                        type="text"
                                        placeholder='Insira o nome do destino'
                                        name="nomeDestino"
                                        className='form-control'
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)} >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> País </label>
                                    <input
                                        type="text"
                                        placeholder='Insira o País do destino'
                                        name="paisDestino"
                                        className='form-control'
                                        value={pais}
                                        onChange={(e) => setPais(e.target.value)} >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> Descrição </label>
                                    <input
                                        type="text"
                                        placeholder='Insira uma breve descrição do destino'
                                        name="descricaoDestino"
                                        className='form-control'
                                        value={descricao}
                                        onChange={(e) => setDescricao(e.target.value)} >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> Valor </label>
                                    <input
                                        type="text"
                                        placeholder='Insira o valor do destino, sem vírgulas'
                                        name="valorDestino"
                                        className='form-control'
                                        value={valor}
                                        onChange={(e) => setValor(e.target.value)} >
                                    </input>
                                </div>
                                <div className={styles.butns}>
                                <button className='btn btn-success' onClick = {(e) => saveOrUpdateDestino(e)} > Salvar </button>
                                <Link to="/management" className="btn btn-danger" style={{marginLeft: "20px"}}> Cancelar </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br />

        </div>
    )
}

export default AddDestinos