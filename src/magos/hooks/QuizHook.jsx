import {preguntas} from '../data/index'
import { useState, useEffect } from 'react'

export const QuizHook = () => {

    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [isfinished, setIsfinished] = useState(false);
    const [tiempoRestante, setTiempoRestante] = useState(120);
    const [areDisable, setAreDisable] = useState(false);
    const [answerShown, setanswerShown] = useState(false);

    const handleAnswerSubmit = (isCorrect, e) =>{
        // setearPuntuacion
        if(isCorrect) setPuntuacion(puntuacion + 1);

        //Poner estilos
        e.target.classList.add(isCorrect ? "correct" : "incorrect");
        //Cambiar a la siguiente pregunta

        setTimeout(() => {
            //PONEMOS UN SETTIMEOUT PARA QUE SE VEAN LOS ESTILOS APLICADOS 
            if (preguntaActual === preguntas.length - 1) {

                setIsfinished(true);

            }else{
                setPreguntaActual(preguntaActual + 1);
            };


        }, 600);
    };
    useEffect(() => {
        const intervalo = setInterval(() => {
            if (tiempoRestante > 0) {
                setTiempoRestante(tiempoRestante - 1);
            };
            if (tiempoRestante === 0) {
                setAreDisable(true);

            }
        }, 1000);
        return () => clearInterval(intervalo);
    }, [tiempoRestante]);


       
    if (isfinished) {
        return(
            <div className="quiz-container">
                <main className="app">
                    <div className="juego-terminado">
                        <span>
                            Obtuviste { puntuacion } de {preguntas.length}
                        </span>
                        <button onClick={() => window.location.href='/quiz'} >
                            Volver a jugar
                        </button>
                        <button 
                            onClick={() => {
                                setIsfinished(false);
                                setanswerShown(true);
                                setPreguntaActual(0)
                            }} 
                        >
                            Ver Respuestas
                        </button>
                    </div>
                </main>

            </div>
        )
    }

    if (answerShown) {
        return(
            <div className="quiz-container">
                <main className="app">
                    <div className='lado-izquierdo' >
                        <div className='numero-pregunta' >
                            <span>Pregunta {preguntaActual + 1}</span> de {preguntas.length}
                        </div>
                        <div className="titulo-pregunta">
                            {preguntas[preguntaActual].titulo}
                        </div>

                        <div>
                            {preguntas[preguntaActual].opciones.filter(
                                (opcion) => opcion.isCorrect
                            )[0].textoRespuesta}
                        </div>
                        <button
                            onClick={() => {

                                if (preguntaActual === preguntas.length - 1) {
                                    window.location.href = '/quiz'
                                }else{
                                    setPreguntaActual(preguntaActual + 1)
                                }
                            }}
                        >
                            {preguntaActual === preguntas.length -1
                                ?'volver a jugar'
                                :'siguiente'
                            }

                        </button>
                    </div>
                </main>
            </div>
        )

    }


    return (
        <div className="quiz-container">
            <main className="app">
                <div className='lado-izquierdo' >
                    <div className='numero-pregunta' >
                        <span>Pregunta {preguntaActual + 1}</span> de {preguntas.length}
                    </div>
                    <div className="titulo-pregunta">
                        {preguntas[preguntaActual].titulo}
                    </div>
                    <div>
                        {
                            !areDisable ? (
                                <span className="tiempo-restante">

                                    Tiempo Restante: {tiempoRestante}
                                </span>
                            ) :(

                                <button onClick={() =>{
                                    setTiempoRestante(20)
                                    setAreDisable(false)
                                    setPreguntaActual(preguntaActual + 1)
                                }
                                    } >Continuar</button>
                            )}
                    </div>
                </div>

                <div className="lado-derecho">

                    {
                        preguntas[preguntaActual].opciones.map(respuesta => (
                            <button 
                                disabled={areDisable}
                                key={respuesta.textoRespuesta} 
                                onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
                            >
                                {respuesta.textoRespuesta}
                            </button>
                        ))
                    }
                </div>

                <div></div>
            </main>

        </div>

    )
}

