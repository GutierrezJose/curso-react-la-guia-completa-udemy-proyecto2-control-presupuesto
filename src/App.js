import React, { useEffect, useState } from 'react';
import { Pregunta } from './components/Pregunta'
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { ControlPresupuesto } from './components/ControlPresupuesto';
function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  //UseEffect que actualiza el restante
  useEffect(() => {

    //agrega el nuevo presupuesto
    if (crearGasto) {
      setGastos([
        ...gastos, gasto
      ])
    }

    //resta del presupuesto actual
    const presupuestoRestante = restante - gasto.cantidadGasto;
    setRestante(presupuestoRestante);

    //Resetear crearGasto a false
    guardarCrearGasto(false);
  }, [gasto])


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className='contenido-principal contenido'>
          {mostrarPregunta ?
            (
              <Pregunta
                guardarPresupuesto={setPresupuesto}
                guardarRestante={setRestante}
                mostrarPregunta={setMostrarPregunta}
              />
            ) : (
              <div className='row'>
                <div className='one-half column'>
                  <Formulario
                    guardarGasto={guardarGasto}
                    guardarCrearGasto = {guardarCrearGasto}
                  />
                </div>
                <div className='one-half column'>
                  <Listado
                    gastos={gastos}
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
