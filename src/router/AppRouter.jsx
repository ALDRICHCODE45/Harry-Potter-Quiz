import {Routes, Route} from "react-router-dom"
import { MagosRoutes } from '../magos'

export const AppRouter = () => {
    return (

        <>
            <Routes>



                <Route path="/*" element={ <MagosRoutes/> } />


            </Routes>
        </>

    )
}
