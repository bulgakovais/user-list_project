import classNames from 'classnames'
import { UserCard } from "../UserCard/UserCard"
import styles from './Users.module.css'
import arrow from '../../img/arrow.png'

/** 
    * Компонент отображения списка пользователей
    */
export const Users = () => {

    return (<div className={styles.container}>

        <div className={styles.containerCard}>
            <UserCard></UserCard>
        </div>

        <button className={classNames('font_text', styles.btn_user_list)}>
            Показать еще
            <img className={styles.img} src={arrow} alt='foto' />
        </button>
    </div>
    )
}