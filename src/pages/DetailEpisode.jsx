import { useParams } from "react-router-dom";
import { ApiContext } from "../context/Context";
import style from "./DetailEpisode.module.css"
import ApiList from "../components/ApiList"
import moment from 'moment';

const DetailEpisode = () => {
  const {
    resultEpisode,    

  } = ApiContext(); 

  const { id } = useParams();
  const datacard = resultEpisode.find((card) => card.id == id);  

  const originalDate = datacard.created;
  const formattedDate = moment(originalDate).format("D [de] MMMM [de] YYYY, h:mm A");
  

  return (
    <div>
      <div className={style.wrapDetails}>
        <h1>      Details Episodes
        </h1>      <div className={style.card}>

          

          <div className={style.card__containText}>
            <h2>{datacard.name}</h2>
            <p className={style.card__containText_parrafoHeader}> {formattedDate}</p>

            <span>episode</span>
            <p>{datacard.episode}</p> 

            <span>Air</span>
            <p>{datacard.air_date}</p>

            <span>Characters</span>
            <p>{datacard.characters.length}</p>

          </div>

        </div>
        <ApiList
          titulo={"Episodes"}
          list={resultEpisode}
          details={"detailsEpisode"}
        />
      </div>
      
    </div>
  )
}

export default DetailEpisode