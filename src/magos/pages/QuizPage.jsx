import { QuizHook } from '../hooks'
import { useState } from 'react'
import { Boton, Contenedor } from '../../ui'
export const QuizPage = () => {
    
    const [buttonClicked, setButtonClicked] = useState(false)

    const handleButtonClick = () => {
        setButtonClicked(true)
    }

    if (buttonClicked) {
        return(
            <QuizHook/>
        )
        
    }


    return(
        <>
            <Contenedor>
                    <Boton
                        type='button'
                        onClick={handleButtonClick}
                    >
                        START QUIZ
                    </Boton>
            </Contenedor>
        </>

    )
   
}

