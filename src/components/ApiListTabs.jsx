import style from "./ApiListTabs.module.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ApiContext } from "../context/Context"

const ApiListTabs = (props) => {

    const {
        resultCharacter,
        resultLocation,
        resultEpisode,        
    
      } = ApiContext();

    const [filter, setFilter] = useState("")
    const [toggleCharacter, setToggleCharacter] = useState(true)
    const [toggleLocation, setToggleLocation] = useState(false)
    const [toggleEpisode, setToggleEpisode] = useState(false)

    const handleOnchange = (e) => {
      setFilter(e.target.value) 
    }

    const handleCharacters = () => {
        setToggleCharacter(true)
        setToggleLocation(false)
        setToggleEpisode(false)
    
    }

    const handleLocations = () => {
        setToggleLocation(true)
        setToggleCharacter(false)
        setToggleEpisode(false)
    }

    const handleEpisodes = () => {
        setToggleEpisode(true)
        setToggleCharacter(false)
        setToggleLocation(false)
    
    }

    console.log(resultCharacter)
  
    return (
      <div className={style.container}>
        <div className={style.container__header}>

          <h2 className={style.titulo}>
            {toggleCharacter ? "Characters" : 
             toggleLocation  ? "Locations"  :
             toggleEpisode   ? "Episodes"   : 
                null}
          </h2>

          <div className={style.tabsChange}>

          <p className={style.tabs} onClick={handleCharacters}>Characters</p>
  
          <p className={style.tabs} onClick={handleLocations}>Locations</p>
  
          <p className={style.tabs} onClick={handleEpisodes}>Episodes</p>
          </div>
  
          
  
          <div className={style.group}>
        <svg className={style.icon} aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
        <input placeholder="Search" type="search" className={style.input} value={filter} onChange={handleOnchange} />
      </div>
         
        </div>
  
        {toggleCharacter && <div className={style.container__content}>
  
          {resultCharacter.filter(res => res.name.toLowerCase().includes(filter.toLowerCase())).map((res) => (
  
            <Link key={res.id} to={`/detailsCharacter/${res.id}`}>
              <div className={style.card} >              
                <p>{res.name}</p>
              </div>
            </Link>
          ))}
        </div>}

        {toggleLocation && <div className={style.container__content}>
  
          {resultLocation.filter(res => res.name.toLowerCase().includes(filter.toLowerCase())).map((res) => (
  
            <Link key={res.id} to={`/detailsLocation/${res.id}`}>
              <div className={style.card} >              
                <p>{res.name}</p>
              </div>
            </Link>
          ))}
        </div>}
        
            {toggleEpisode && <div className={style.container__content}>
  
          {resultEpisode.filter(res => res.name.toLowerCase().includes(filter.toLowerCase())).map((res) => (
  
            <Link key={res.id} to={`/detailsEpisode/${res.id}`}>
              <div className={style.card} >              
                <p>{res.name}</p>
              </div>
            </Link>
          ))}
        </div>}
       

        
  
      </div>
    )
  }
export default ApiListTabs