import styles from "./Form.module.css";
import Button from "../Buttons/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Form() {
  return (
    
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.big_btns}>
          <div className={styles.form}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize={"24px"} />}
            />
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize={"24px"} />} />
          </div>
        </div>
      </div>
      <div className={styles.Service_images}>
        <img src="./images/service.svg" alt="" />
      </div>
    </section>
  );
}

export default Form;
