import React, { useEffect } from 'react';
import background from './../images/background2.png';
import final from './../images/final.png';
import { useNavigate } from 'react-router-dom';

function Final() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            navigate('/')
          }, 15000); // 15 seconds
    
        return () => clearInterval(timer);
    }, [])
    

    return (
    <div style={{display: "flex", width: "100vw", height: "100vh", backgroundColor: "#FFC200"}}>
        <img src={background} style={{width: "100vw", height: "100vh", position: "absolute"}} />
        <div style={{display: "flex", width: "100vw", height: "100vh", alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
        <img src={final} style={{width: "auto", height: "60vh", position: "absolute"}} />
        </div >
        <button className='button-base border-base' style={{width: "80px", height: "80px", position: "fixed", fontSize: '70px', top: '30px', right: '30px'}} onClick={() => navigate('/')}>
            <span style={{ position: "relative", display: "flex", alignContent: 'center', justifyContent: 'center', alignItems: 'center', top: '-10px'}}>×</span>
        </button>
    </div>
    );
}

export default Final;
