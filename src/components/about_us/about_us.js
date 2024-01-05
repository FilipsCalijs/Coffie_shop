import './about_us.css';
import LogoImg from '../../img/logo/Group.png';

function Logo_banner_black() {
  return (
    <div className="container">
      <div className="line_black"></div>
      <img src={LogoImg} className="logo" alt="Logo" />
      <div className="line_black"></div>
    </div>
  );
}

function About_us() {
  return (
    <div className="about_us_container">
      <div className='About_title'> About us</div>
      <Logo_banner_black />
      <div className='About_text'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.
          <p></p>
          Now residence dashwoods she excellent you. Shade being under his bed her, Much
          read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
          horrible but confined day end marriage. Eagerness furniture set preserved far
          recommend. Did even but nor are most gave hope. Secure active living depend son
          repair day ladies now.
      </div>
    </div>
  );
}

export default About_us;