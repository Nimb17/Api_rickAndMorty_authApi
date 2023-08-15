import { useParams } from "react-router-dom";
import { ApiContext } from "../context/Context";
import style from "./DetailCharacter.module.css"
import Status from "../components/StatusIcon"
import ApiList from "../components/ApiList"

const DetailCharacter = () => {
  const {
    resultCharacter,

  } = ApiContext();

  const { id } = useParams();
  const datacard = resultCharacter.find((card) => card.id === parseInt(id));

  return (
    <div className={style.container}>
      <div className={style.wrapDetails}>
        <h1>      Details Characters
        </h1>      <div className={style.card}>

          <div className={style.card__headerImg}><img src={datacard.image} alt="imageCharacter" />
          </div>

          <div className={style.card__containText}>
            <h2>{datacard.name}</h2>
            <p className={style.card__containText_parrafoHeader}> <Status /> {datacard.status} - {datacard.species}</p>

            <span>Origin</span>
            <p>{datacard.origin.name}</p>

            <span>Last known location</span>
            <p>{datacard.location.name}</p>

          </div>

        </div><ApiList
          titulo={"Characters"}
          list={resultCharacter}
          details={"detailsCharacter"}
        />
      </div>      
    </div>
  )
}

export default DetailCharacter