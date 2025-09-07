import { useState,useContext } from "react"
import Input from '../../form/Input'
import styles from '../../form/Form.module.css'
import { Link } from "react-router-dom"

/* context */
import { Context } from "../../../context/UserContext"


function Login(){

    const [user,setUser] = useState({})
    const {login} = useContext(Context)

    function handleChange(e){
        setUser({ ...user, [e.target.name]: e.target.value })
    
    }

    function handleSubmit(e) {
        e.preventDefault()
        //enviar os dados para o banco de dados
        login(user)
    }

    return(
        <section className={styles.form_container}>
            <h1>login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text='email'
                    type='email'
                    name='email'
                    placeholder='Digite seu email'
                    handleOnChange={handleChange}
                />
                <Input
                    text='senha'
                    type='password'
                    name='password'
                    placeholder='Digite sua senha'
                    handleOnChange={handleChange}
                />
                <input type="submit" value='Entrar'/>
            </form>
            <p>
                Não tem conta? <Link to='/register'>clique aqui</Link>
            </p>
        </section>
    )
}

export default Login