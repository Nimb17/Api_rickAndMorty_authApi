import { Link } from "react-router-dom"
import style from "./AuthComponents.module.css"
import Loader from "./Loader"

const AuthComponent = (props) => {


    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <p className={style['form-title']}>{props.titulo}</p>
            <div className={style['input-container']}>
                <input type="email" placeholder="Ingresa email" onChange={props.setEmail} />
                <span></span>
            </div>
            <div className={style['input-container']}>
                <input type="password" placeholder="Ingresa contraseña" onChange={props.setPassword} />
            </div>
            <button className={style.submit} onClick={props.handleClick} >
            {props.loading ? <Loader/> : props.textSubmit}    
            </button>
            {props.error ? <div className={style.error}> {props.error} {/* Error en el registro */}</div> : null}

            <p className={style['signup-link']}> {props.textHref} <Link to={props.href} className={style.linkDecoration} >{props.linkToggle}</Link>
            </p>
        </form>
    )
}

export default AuthComponent

