import React from 'react'
import PropTypes from 'prop-types';
export const Gasto = ({gasto}) => {
  return (
    <li className='gasots'>
        <p>
            {gasto.nombreGasto}
            <span className='gasto'>${gasto.cantidadGasto}</span>
        </p>
    </li>
  )
}

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired
}
