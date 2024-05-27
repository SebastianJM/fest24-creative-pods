import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react'
import './../styles/Result.css';
import background from './../images/background.png';
import resultTitle from './../images/result-title.png';

function Form() {
    const location = useLocation();
    const result = location.state.url;  
    const navigate = useNavigate();

    function finishAction() {
        navigate('/final');
    }

    return (
        <div style={{width: "100vw", height: "100vh", backgroundColor: "#C757FF", overflow: "hidden"}}>
            <div className="ribon">
                <div className="ribon-text">
                    Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;
                    Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;
                    Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;
                    Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;
                    Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;
                    Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;
                    Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;Tu arte se exhibirá en la pantalla grande&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
            <img src={background} style={{width: "100vw", height: "100vh", position: "absolute"}} />
            <div className="description" style={{ position: "relative", width: "80vw", left: "10vw", height: "80vh", top: "10vh", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "row"}}>
                <div style={{height: "100%", width: "50%", alignItems: "center", display: "flex"}}>
                    <img className="border-base" style={{ width: "100%"}}
                            src= { result }
                            alt="new"
                        />
                </div>
                
                <div style={{height: "100%", width: "50%", marginLeft: "100px", alignItems: "center", display: "flex", flexDirection: "column"}}>
                    <img src={resultTitle} style={{width: "auto", height: "15%", marginTop: "10%"}} />
                    <QRCode value={result} size="1024" className="border-base" style={{ height: "35%", width: "auto", marginTop: "10%", padding: "10px", backgroundColor: "white"}}/>
                    <button type="button" className='button-base border-base' style={{width: "12vw", fontSize: "30px", marginTop: "10%", maxWidth: "500px"}}
                        onClick={finishAction} >
                            <span className="button-text"><b>TERMINAR </b></span>
                            <span className="button-arrow"> → </span>     
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form;