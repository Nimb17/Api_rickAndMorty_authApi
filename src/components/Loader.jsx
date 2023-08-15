import style from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={style.progressLoader} >
            <div className={style.progress} ></div>
        </div>
    )
}

export default Loader