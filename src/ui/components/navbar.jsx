import { NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav  id="navegacion" className="navbar navbar-expand-sm navbar-dark animate__animated animate__fadeIn">

                <div id='mago' className="navbar-collapse container position-relative">
                    <div id='container' className="navbar-nav container row-6 text-center">

                        <NavLink 
                            className="container col" 
                            to="/gryffindor"
                        >
                            <img className="logo-gryffindor" src="/assets/Gryffindor-Logo.png" alt="no hay" width="108" height="auto" />

                        </NavLink>

                        <NavLink
                            className="container col"
                            to="/quiz"
                        >

                            <img className='logo-hp' src="/assets/harry-potter-logo.webp" alt="#" width="170" height="auto" />
                        </NavLink>

                        <NavLink 
                            className="container col" 
                            to="/slytherin"
                        >

                            <img className="logo-slytherin" src="/assets/slytherin-Logo.png" alt="no hay" width="55" height="auto" />
                        </NavLink>


                    </div>

                </div>
                   </nav>


        </>
    )
}



