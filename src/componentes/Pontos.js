import styles from "./Pontos.module.css"



function Pontos({municipio, latitude, longitude}){

    return(
        <div className={styles.card_info}>
            <h4>{municipio}</h4>
            <p>Coordenadas:</p>
            <h6>{latitude}, {longitude}</h6>
            <h5>→</h5> 
        </div>
    )
}

export default Pontos