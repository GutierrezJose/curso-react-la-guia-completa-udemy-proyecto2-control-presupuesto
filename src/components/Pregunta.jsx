import React, { useState } from 'react'
import { Error } from './Error';
export const Pregunta = ({ guardarPresupuesto, guardarRestante, mostrarPregunta }) => {

    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);


    const definirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value))
    }

    const agregarPresupuesto = e => {
        e.preventDefault();
        //Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        //Si es correcta la validacion
        setError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        mostrarPregunta(false);
    }


    return (
        <>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es Incorrecto" /> : null}
            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className='button-primary u-full-width'
                    value='Definir presupuesto'
                />
            </form>
        </>
    )
}
