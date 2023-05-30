import PageNotFound from "../componentes/PageNotFound"
import Header from "../componentes/Header"
import Footer from "../componentes/Footer"
import '../App.css';
import { useEffect } from "react";
import { useNavigate } from "react-router";

function ErrorPage(){
    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(() => {
            navigate("/")
        }, 3000);
    }, [navigate])

    return(
        <div className="App">
            <Header/>
            <PageNotFound/>
            <Footer/>
        </div>
    )
}

export default ErrorPage