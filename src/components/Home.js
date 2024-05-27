import React from 'react';
import background from './../images/background.png';
import logo from './../images/logo.png';
import example1 from './../images/example1.png';
import example2 from './../images/example2.png';
import './../styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{display: "flex", width: "100vw", height: "100vh", backgroundColor: "#C757FF"}}>
      <img src={background} style={{width: "100vw", height: "100vh", position: "absolute"}} />
      <div className="floating-image-container" style={{width: "50vw", height: "100%"}}>
        <img src={example1} className="floating-image-upwards" style={{width: "43%", height: "auto", left: "15%", top: "13vh"}} />
        <img src={example2} className="floating-image-downwards" style={{width: "43%", height: "auto", left: "45%", top: "28vh"}} />
      </div>
      <div className="description" style={{width: "50vw", height: "100vh", paddingRight: "20px", position: "relative"}}>
        <div style={{width: "87%", marginTop: "13vh", alignItems: "center", display: "flex", flexDirection: "column"}}>
          <img src={logo} style={{width: "100%", height: "auto", maxHeight: "57vh"}} />
          <p style={{fontSize: "34px", textAlign: "center", fontWeight: "normal", marginTop: "7vh"}}><b>¡Desata tu creatividad y prepárate para las risas mientras añades palabras al azar para formar historias sorprendentes e hilarantes!</b></p>
          <Link to="/form" style={{width: "40%"}}>
            <button type="button" className='button-base border-base' style={{width: "12vw", fontSize: "30px", marginTop: "4vh", marginLeft: "2vw"}}>
              <span className="button-text"> COMENZAR </span>
              <span className="button-arrow"> → </span>
            </button>
           
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
