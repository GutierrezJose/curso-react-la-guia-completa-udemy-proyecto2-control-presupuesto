import React from 'react';
import { Gasto } from './Gasto';
import PropTypes from 'prop-types';

export const Listado = ({ gastos }) => {
    return (
        <div className='gastos-realizados'>
            <h2>Listado</h2>
            {gastos.map(gasto => (
                <Gasto 
                    gasto = {gasto}
                />
                ))}
        </div>
    )
}

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}