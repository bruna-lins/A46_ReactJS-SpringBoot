import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Management.module.css';
import destinosService from '../../services/destinosService';

const ListDestinos = () => {

    const [destinos, setDestinos] = useState([])

    useEffect(() => {
        getAllDestinos();
    }, [])

    const getAllDestinos = () => {
        destinosService.getAllDestinos().then((response) => {
            setDestinos(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    const deleteDestino = (destinoId) => { 
        destinosService.deleteDestino(destinoId).then((response) => {
            getAllDestinos();
        }).catch(error => { 
            console.log(error);
        })
    }

  return (
    <div className='container'>
        <h2 className={styles.ttl}> Lista de Destinos </h2>
        <Link to="/add-destino" className="btn btn-success mb-2"> Adicionar </Link>
        <br />
        <div className='table-responsive-md'>
        <table className= 'table table-bordered table-striped'>
            <thead className={styles.thd}>
                <th className={styles.tabl_ttl}> # </th>
                <th className={styles.tabl_ttl}> NOME </th>
                <th className={styles.tabl_ttl}> PAÍS </th>
                <th className={styles.tabl_ttl}> DESCRIÇÃO </th>
                <th className={styles.tabl_ttl}> VALOR </th>
                <th className={styles.tabl_ttl}> </th>
            </thead>
            <tbody>
                {
                    destinos.map(
                        destino =>
                        <tr key = {destino.id}>
                             <td> {destino.id} </td>
                            <td> {destino.nome} </td>
                            <td> {destino.pais} </td>
                            <td> {destino.descricao} </td>
                            <td> {destino.valor} </td>
                            <td className={styles.butns}>
                                <Link className='btn btn-success' to={`/edit-destino/${destino.id}`} > Atualizar </Link>
                                <button className='btn btn-danger' onClick = {() => deleteDestino(destino.id)}
                                style={{marginLeft:"30px"}}> Deletar </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default ListDestinos