import styles from './UserDescription.module.css'
import { userDescriprion_1, userDescriprion_2, userDescriprion_3 } from "../../store/storeConstants"
import telephone from '../../img/telephon.png'
import email from '../../img/email.png'

export const UserDescription = () => {


    return (
        <div className={styles.container}><div className={styles.description}>
            <div className={styles.paragraph}>{userDescriprion_1}</div>
            <div className={styles.paragraph}>{userDescriprion_2}</div>
            <div className={styles.paragraph}>{userDescriprion_3}</div></div>
            <div>
                <div className={styles.contacts}>
                    <img className={styles.contactsImg} src={telephone} />
                    <p>+7 (954) 333-44-55</p>
                </div>
                <div className={styles.contacts}>
                    <img className={styles.contactsImg} src={email} />
                    <p>sykfafkar@gmail.com</p>
                </div>
            </div>
        </div>
    )
}