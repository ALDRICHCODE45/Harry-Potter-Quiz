import {Routes, Route, Navigate} from "react-router-dom"
import {Navbar} from "../../ui"
import { QuizPage, GryffindorPage, SlytherinPage} from '../pages'

export const MagosRoutes = props => {
    return (

        <>
            <Navbar/>

            <div className="container">

                <Routes>

                    <Route path="gryffindor" element={<GryffindorPage/>} />
                    
                    <Route path="quiz" element={<QuizPage/>} />

                    <Route path="slytherin" element={<SlytherinPage/>} />

                    <Route path="/" element={<Navigate to="/gryffindor" />} />

                </Routes>

            </div>

        </>

    )
}
