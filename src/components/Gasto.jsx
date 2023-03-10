import React from 'react'

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
