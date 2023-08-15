import { useParams } from "react-router-dom";
import { ApiContext } from "../context/Context";
import style from "./DetailLocation.module.css";
import ApiList from "../components/ApiList";

const DetailLocation = () => {
  const {
    resultLocation,

  } = ApiContext();

  const { id } = useParams();
  const datacard = resultLocation.find((card) => card.id == id);

  return (
    <div>
      <div className={style.wrapDetails}>
        <h1>      Details Locations
        </h1>      <div className={style.card}>

          <div className={style.card__containText}>
            <h2>{datacard.name}</h2>
            <p className={style.card__containText_parrafoHeader}> {datacard.dimension} </p>

            <span>Residents</span>
            <p>{datacard.residents.length}</p>

            <span>Type</span>
            <p>{datacard.type}</p>

          </div>

        </div>
        <ApiList
          titulo={"Locations"}
          list={resultLocation}
          details={"detailsLocation"}
        />
      </div>      
    </div>
  )
}

export default DetailLocation