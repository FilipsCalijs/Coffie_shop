import './main-img-banner.css'
import LogoImg from '../../img/logo/coffee-beans.svg'
import { Fragment } from 'react'



const Logo_banner = (props) => {
    return(
        <div class="container">
                    <div class="line"></div>
                        <img src={LogoImg} class="logo"></img>
                    <div class="line"></div>
                    
            </div>
    )

}


    

const MainImage = (props) => {

    
    return (
        <Fragment>
            <h1 className='Header-title'>
            Everything You Love About Coffee
            </h1>
                <Logo_banner/>
                <div class="text-container">
                        <div class="text">
                        We make every day full of energy and taste
                        </div>
                        <div class="text">
                            Want to try our beans?
                        </div>
                    </div>
                <div class="button-container">
                        <button class="button">More</button>
                </div>
        </Fragment>
        )
        

    }
    
    
    export { Logo_banner }; 
    export default MainImage;