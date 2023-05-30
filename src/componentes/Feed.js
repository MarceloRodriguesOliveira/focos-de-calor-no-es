import { useEffect, useState } from "react"
import styles from "./Feed.module.css"
import Pontos from "./Pontos"
import { Link } from "react-router-dom"
import LoadingIcon from "./LoadingIcon"



function Feed(){
    const [pontos,setPontos] = useState([])
    const [loadparam,setLoadParam] = useState(true)



    useEffect(()=>{
        const getPontos = async ()=>{
            const pontosData = await fetch("https://focos-de-calor-no-es.netlify.app")
            const pontosES = await pontosData.json()
            setPontos(pontosES)
            
            
        }

        getPontos()

    

        setTimeout(() => {
            setLoadParam(false)
        }, 4000);
        // setLoadParam(false)

        return()=>{}
    },[])

    return(
        <main className={styles.feed_container}>
            {loadparam ? (
                <LoadingIcon/>
            ): pontos.map((ponto,index)=>(
                <div key={index}>
                    <Link to={`/details/:${index}`} state = {{from: ponto}}>
                        <Pontos municipio={ponto.properties.municipio} latitude={ponto.properties.latitude} longitude={ponto.properties.longitude}/>
                    </Link>
                </div>
            ))}
        </main>
    )
}

export default Feed