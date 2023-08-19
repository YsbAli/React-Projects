import styles from "./Button.module.css";

function Button(props) {
  return (
    <div className={styles.primary_btns}>
      {props.icon}
      {props.text}
    </div>
  );
}

export default Button;
