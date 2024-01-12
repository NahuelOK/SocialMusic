import foto from "./leo.webp"
import ReactPlayer from "react-player";
import "./postt.css"

const Postt = () => {
    return (
        <div className='postt'> 
           <div className="img-mensagge">
                <a href='/gotojujuy'><img className="foto-perfil" src={foto} alt="Foto de perfil"></img></a>
                <div className="mensage">
                    <p>La verdad me re gustó la nueva session la super recomiendo!! </p>
                </div>
           </div>
           <div className="mostrar-cancion">
            <ReactPlayer
                url='https://www.youtube.com/watch?v=NaoNcERVF78&ab_channel=Bizarrap'
                className='react-player'
                width='100%'
                height='100%'
                controls
            />
           </div>
        </div>
    )
}

export default Postt;
