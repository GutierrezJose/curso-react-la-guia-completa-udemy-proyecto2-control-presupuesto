import React, { useState } from 'react'
import {Error} from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export const Formulario = ({guardarGasto, guardarCrearGasto }) => {

    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidadGasto, setCantidadGasto] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();
        //validar
        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        //construir un gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }
        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //resetear el form
        setNombreGasto('');
        setCantidadGasto(0);

    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje='Ambos campos son obligatorios o Presupuesto incorrecto'/> : null}
            <div className='campo'>
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className='u-full-width'
                    placeholder='Ej. Transporte'
                    value={nombreGasto}
                    onChange={e => setNombreGasto(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='300'
                    value={cantidadGasto}
                    onChange={e => setCantidadGasto(parseInt(e.target.value))}
                />
            </div>

            <input
                type="submit"
                className='button-primary u-full-width'
                value="Agregar Gasto"
            />
        </form>
    )
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
