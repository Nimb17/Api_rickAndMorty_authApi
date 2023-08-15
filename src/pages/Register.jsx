import style from './Register.module.css';
import AuthComponent from "../components/AuthComponent";
import bgLogin from "../assets/bgRegister.jpg"
import { ApiContext } from "../context/Context";


const Register = () => {

    const {
        setEmail,
        setPassword,
        handleRegisterSubmit,
        errorRegister,  
        loading,      

    } = ApiContext();

    return (
        <div className={style.container}>

            <div className={style.container__auth}>
                <AuthComponent
                    titulo="Registrarse."
                    textSubmit="Registrar"
                    textHref="¿Ya tienes una cuenta?"
                    href="/login"
                    linkToggle="Iniciar sesión"
                    setEmail={e => setEmail(e.target.value)}
                    setPassword={e => setPassword(e.target.value)}
                    handleSubmit={handleRegisterSubmit}
                    error={errorRegister}
                    loading={loading}
                />
            </div>

            <div className={style.container__bgImg}>
                <img src={bgLogin} alt="imgRegister" />
            </div>

        </div>

    );
}

export default Register;


