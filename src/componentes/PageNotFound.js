import styles from "./PageNotFound.module.css"

function PageNotFound(){
    

    return(
        <div className={styles.error_container}>
            <h1>404</h1>
            <p>Redirecionando para a página principal...</p>
        </div>
    )
}

export default PageNotFound