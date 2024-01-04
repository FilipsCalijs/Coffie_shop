import './nav.css'

import NavImg from '../../img/logo/coffee-beans_2.svg'

const NavBar = (props) => {
    return (
        <nav>
            <ul>

                <li><a href="#"><img className='logo-name' src={NavImg} alt="logo"/></a></li>
                <li><a href="#">Coffee house</a></li>
                <li><a href="#">Our coffee</a></li>
                <li><a href="#">For your pleasure</a></li>
            </ul>
        </nav>
    )


}


export default NavBar;