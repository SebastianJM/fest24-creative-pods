import React, { useState } from 'react';
import title from './../images/title.png';
import './../styles/Form.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

function Form() {
  const [artista, setArtista] = useState('');
  const [animal, setAnimal] = useState('');
  const [color, setColor] = useState('');
  const [emocion, setEmocion] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const postResultAPIURL = 'https://9ikcdu22ee.execute-api.us-east-1.amazonaws.com/generate-image'
  
  const navigate = useNavigate();

  const modalCustomStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      margin: '0px',
      padding: '0px',
      transform: 'translate(-50%, -50%)',
      fontFamily: "Garaje-0703",
      fontSize: "25px",
      border: "2px solid",
      borderRight: "5px solid",
      borderBottom: "5px solid",
    },
  }


  const fetchResult = async () => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 100 : prevProgress + 1));
    }, 150);
    setIsButtonDisabled(true);
    setShowModal(true);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: "Eres " + artista + ". Crea una pintura de un " + animal + " que es " + color + " y está " + emocion})
    };
    const response = await fetch(postResultAPIURL, requestOptions)
    clearInterval(timer);
    navigate('/result', { state: { url : await response.json() } });
  };

  return (
    <div className="falling-rounded-page">   
        <div style={{width: "100vw", height: "100vh"}}>
          <div className="description" style={{ position: "relative", width: "50vw", left: "25vw", height: "80vh", top: "7vh", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
            <Modal 
                isOpen={showModal}      
                style={modalCustomStyle}
              >
                <div className="box-container">
                <div className="box-header">
                    <span className="box-header-text">CREATIVE PROMPTING</span>
                    <button className="box-close-button" >x</button>
                </div>
                <div className="box-content">
                    <span className="box-content-text">Creando arte...</span>
                    <button className="box-content-percentage" >{progress}%</button>
                </div>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: `${progress}%` }}>

                  </div>
                </div>
                <div  className="box-footer">Eres {artista}. Crea una pintura de un {animal} que es {color} y está {emocion}</div>
      
                </div>   
            </Modal>

            <img src={title} style={{width: "auto", height: "20%"}} />

            <p style={{fontSize: "37px", textAlign: "center", fontWeight: "normal", marginTop: "55px"}}><b>Escribe lo primero que se te viene a la mente.</b></p>

            <div style={{display: "flex", flexDirection: "row", width: "100%", maxWidth: "1500px", fontSize: "30px", marginTop: "20px"}}>
              <div style={{display: "flex", flexDirection: "column", width: "49%"}}>
                <label><b>ARTISTA</b></label>
                <input className="input-base" value={artista} name="artista" onChange={e => setArtista(e.target.value)}/>
              </div>
              <div style={{display: "flex", flexDirection: "column", marginLeft: "40px", width: "49%"}}>
                <label><b>ANIMAL</b></label>
                <input className="input-base" value={animal} name="animal" onChange={e => setAnimal(e.target.value)}/>
              </div>
            </div>

            <div style={{display: "flex", flexDirection: "row", width: "100%", maxWidth: "1500px", fontSize: "30px", marginTop: "45px"}}>
              <div style={{display: "flex", flexDirection: "column", width: "49%"}}>
                <label><b>COLOR</b></label>
                <input className="input-base" value={color} name="color" onChange={e => setColor(e.target.value)}/>
              </div>
              <div style={{display: "flex", flexDirection: "column", marginLeft: "40px", width: "49%"}}>
                <label><b>EMOCIÓN</b></label>
                <input className="input-base" value={emocion} name="emocion" onChange={e => setEmocion(e.target.value)}/>
              </div>
            </div> 
                                                                                                          
            <button type="button" className='button-base border-base' disabled={isButtonDisabled} style={{width: "40%", height: "60px", fontSize: "30px", marginTop: "80px", paddingTop: "40px", maxWidth: "500px"}}
              onClick={fetchResult} >
              <span className="button-text">ENVIAR</span>
              <span className="button-arrow"> → </span>
            </button>
            
          </div>
        </div>
    </div>
  );
}

export default Form;