import style from "./Login.module.css"
import { ApiContext } from "../context/Context";
import AuthComponent from "../components/AuthComponent";
import bgLogin from "../assets/bgLogin.png"

const Login = () => {
  const {
    setEmail,
    setPassword,
    errorLogin,
    handleLoginSubmit,
    loading

  } = ApiContext();

  return (
    <div className={style.container}>

      <div className={style.container__auth}>

        <AuthComponent
          titulo="Inicia sesión en tu cuenta."
          textSubmit="Ingresar"
          textHref="¿No tienes cuenta ?"
          href="/register"
          linkToggle="registrarse"
          setEmail={e => setEmail(e.target.value)}
          setPassword={e => setPassword(e.target.value)}
          handleSubmit={handleLoginSubmit}
          error={errorLogin}
          loading={loading}
        />
      </div>

      <div className={style.container__bgImg}>
        <img src={bgLogin} alt="imgLogin" />
      </div>

    </div>
  )
}

export default Login