import NavBar from '../nav/nav';
import MainImage from '../main-img-banner/main-img-banner';


import './main-page.css'; 

const MainPage = () => {
  return (
    <div className="main-page-container">
        <NavBar></NavBar>
        <MainImage />
       
    </div>
  );
};

export default MainPage;
