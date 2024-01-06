import './footer.css';
import LogoImg from '../../img/logo/Group.png';
import LogoFooter from '../../img/logo/coffee-beans__3.svg'

function Logo_banner_black() {
  return (
    <div className="container" >
      <div className="line_black"></div>
      <img src={LogoImg} className="logo" alt="Logo" />
      <div className="line_black"></div>
    </div>
  );
}

function Footer() {
  return (
    <div className="Footer_container">
      
      
      
        <nav>
          
        <ul style={{ justifyContent: 'center', paddingTop: '0'}}>
            <li style={{marginLeft: '0'}}><a href="#"><img className='logo-name' src={LogoFooter} alt="logo" /></a></li>
            <li><a style={{ color: 'black' }} href="#">Coffee house</a></li>
            <li><a style={{ color: 'black' }} href="#">Our coffee</a></li>
            <li><a style={{ color: 'black' }} href="#">For your pleasure</a></li>
        </ul>
      </nav>
      <Logo_banner_black />
    </div>

  );
}

export default Footer;