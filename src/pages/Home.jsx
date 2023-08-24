import style from "./Home.module.css"
import { ApiContext } from "../context/Context"
import ApiList from "../components/ApiList"
import ApiListTabs from "../components/ApiListTabs"
import imgHome from "../assets/imgHome.png"
import Footer from "../components/Footer"
import StatusIcon from "../components/StatusIcon"

const Home = () => {

  const {
    resultCharacter,
    resultLocation,
    resultEpisode,
    token,

  } = ApiContext();

  return (
    <div className={style.wrap}>

      <div className={style.contentHero}>
        <div className={style.contentHero__text}>
          <b>Héctor Mortola</b>
          <div className={style.contentHero__login}>
            {token && <StatusIcon />}{token && <p>Welcome <span className={style.contentHero__textToken}>{token}</span> </p>}
          </div>

          <h1>Uso de APIs Y sintaxis frontend</h1>

          <div className={style.contentHero__span}>
            <a href="https://reqres.in/" target="_black"><span>Reqres</span></a>
            <a href="https://rickandmortyapi.com/" target="_black"><span>Rick and Morty API</span></a>

          </div>


        </div>
        <div className={style.contentHero__img}><img src={imgHome} alt="" /></div>


      </div>

      <div className={style.contentApi}>  
        <ApiListTabs/>        
      </div>

      <Footer />

    </div>
  )
}

export default Home