import styles from "./SwitchMenu.module.css"


const SwitchMenu = (props) => {
  return (
    <div onChange={props.switch} className={styles.ocultarDesktop}>
      <label className={styles.container}>
        <input type="checkbox" />
        <div className={styles.checkmark}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
    </div>
  );
};

export default SwitchMenu;
