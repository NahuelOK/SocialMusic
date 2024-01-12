import SubirRecomendacion from "../Subir-Recomendacion/Subir-Recomendacion.js"
import Postt from "../Postt/Postt.js"
import "./mostrarPosts.css"

const VerCard = ()=>{
    return(
        <div className='verCard'> 
           <SubirRecomendacion/>
           <Postt/>
           <Postt/>
           <Postt/>
           <Postt/>
           <Postt/>
           <Postt/>
           <Postt/>
           <Postt/>
           <Postt/>

        </div>
    )
}
export default VerCard;