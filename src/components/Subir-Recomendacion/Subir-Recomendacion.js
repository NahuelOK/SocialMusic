import React, { useState } from 'react';
import "./subir-recomendacion.css"
import foto from "./leo.webp"

const SubirRecomendacion = () => {
    const [text, setText] = useState('');
    const maxCharacters = 150; 
  
    const handleChange = (event) => {
      const inputValue = event.target.value;
  
      if (inputValue.length <= maxCharacters) {
        setText(inputValue);
      }
    };

    return (
        <div className='card'> 
           <div className="img-mensagge">
                <a href='/gotojujuy'><img className="foto-perfil" src={foto} alt="Foto de perfil"></img></a>
                <textarea 
                className="mensage"
                value={text}
                onChange={handleChange}
                placeholder="Acompaña con un pequeño texto tu Recomendacón....">
                </textarea>
           </div>
           <div>
                <div className="links-recomendaciones">
                    <input className="input-links" type="text" placeholder="Link de Spotify..."></input>
                    <h2>O</h2>
                    <input className="input-links" type="text" placeholder="Link de Youtube..."></input> 
                </div>
                <div className="boton-subir">
                    <button>Enviar</button>
                </div>
           </div>
        </div>
    )
}

export default SubirRecomendacion;
