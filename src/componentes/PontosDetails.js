import { useLocation } from "react-router-dom"
import { memo } from "react"
import styles from "./PontosDetails.module.css"



const PontosDetails=()=>{
    const foco = useLocation()
    const {from} = foco.state

    const auxInfo=()=>{
        if((from.properties.risco_fogo && from.properties.precipitacao && from.properties.numero_dias_sem_chuvas) === null){
            return(
                <p>Não há Informações complementares.</p>
            )
        }else{
            return(
                <ul>
                    <li>Risco de fogo: {from.properties.risco_fogo}</li>
                    <li>Precipitação: {from.properties.precipitacao}</li>
                    <li>Dias sem chuva: {from.properties.numero_dias_sem_chuva}</li>
                </ul>
            )
        }
    }

    return(
        <div className={styles.focodetails_container}>
            <div className={styles.title_information}>
                <h1>{from.properties.municipio}</h1>
                <span>({from.properties.latitude}, {from.properties.longitude})</span>
            </div>
            <div>
                <p>
                    Foco de calor capturado em: {new Date(from.properties.data_hora_gmt).toLocaleDateString()} às {new Date(from.properties.data_hora_gmt).toLocaleTimeString()} pelo 
                    satélite {from.properties.satelite}
                </p>
            </div>
            <div className={styles.extra_info}>
                {auxInfo()}
            </div>
        </div>
    )
}

export default memo(PontosDetails)