import { useState, useEffect} from 'react'
import {MagoCard} from './MagoCard'

export const MagoList = ({casa = 'gryffindor'}) => {

    const [magos, setMagos] = useState([])

    useEffect(() => {
        async function FetchData() {
            const response = await fetch(`http://hp-api.herokuapp.com/api/characters/house/${casa}`)
            const data = await response.json()

            setMagos(data)
        }
        FetchData()
    }, [])

    const magosWithImages = magos.filter(mago => mago.image !== '')

    return (
        <>
            <div className="principal text-center animate__animated  animate__fadeIn">
                {
                    magosWithImages.map(mago => (
                        <MagoCard 
                            key={Math.random()}
                            imagen={mago.image}
                            nombre={mago.name}
                        />
                    ))
                }
            </div>
            
        </>
    )
}
