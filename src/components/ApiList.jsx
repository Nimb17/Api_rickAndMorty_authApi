
import { Link } from 'react-router-dom'
import { useState } from 'react'
import style from "./ApiList.module.css"
import InputFilter from './inputFilter'

const ApiList = (props) => {

  const [filter, setFilter] = useState("")

  const handleOnchange = (e) => {
    setFilter(e.target.value) 
  }

  return (
    <div className={style.container}>
      <div className={style.container__header}>
        <h2 className={style.titulo}>{props.titulo}</h2>
        <InputFilter
          value={filter}
          onChange={handleOnchange}
        />
      </div>


      <div className={style.container__content}>

        {props.list.filter(res => res.name.toLowerCase().includes(filter.toLowerCase())).map((res) => (

          <Link key={res.id} to={`/${props.details}/${res.id}`}>
            <div className={style.card} >              
              <p>{res.name}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default ApiList