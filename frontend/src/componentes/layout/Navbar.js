import { Link } from "react-router-dom"
import Logo from '../../assets/img/logo.png'
import styles from './Navbar.module.css'
import { Context } from "../../context/UserContext"
import { useContext } from "react"


function Navbar(){

    const {authenticated,logout} = useContext(Context)

    return(
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <img src={Logo} alt="Get A Pet"/>
                <h2>Get A Pet</h2>
            </div>
            <ul>
                <li>
                    <Link to="/">adotar</Link>
                </li>
                {authenticated ? (
                    <>
                         <li>
                            <Link to='/pet/mypets'>Meus Pets</Link>
                        </li>
                        <li>
                            <Link to='/user/profile'>Perfil</Link>
                        </li>
                        <li onClick={logout}>Sair</li>
                    </>
                   ) :(
                    <>
                        <li>
                            <Link to="/login">entrar</Link>
                        </li>
                        <li>
                            <Link to="/register">cadastrar</Link>
                        </li>
                    </>
                     
                )
                    
                }
               
            </ul>
        </nav>
    )
}

export default Navbar