import styles from "./Info.module.css"

function Info(){
    return(
        <main className={styles.faq_container}>
            <div>
                <h1>Como os focos de calor são detectados?</h1>
                <p>
                Os dados dos focos de calor são extraídos por meio da API desenvolvida e mantida pelo INPE. 
                Este projeto apenas transcreve os dados referentes ao estado do Espírito Santo.
                </p>
            </div>
            <div>
                <h1>Onde posso ter acesso a API?</h1>
                <p>Os dados abertos podem ser acessados através do <a href="https://queimadas.dgi.inpe.br/queimadas/dados-abertos/#">link</a></p>
            </div>
            <div>
                <h1>O que significa "não há dados complementares"?</h1>
                <p>Essa situação acontece quando a API não informa dados como: o risco de fogo, a precipitação e o número de dias sem chuvas.</p>
            </div>
            
        </main>
    )
}

export default Info