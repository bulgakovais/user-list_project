
import classNames from 'classnames'
import { UserList } from "../UserList/UserList"
import styles from './Users.module.css'
import arrow from '../../img/arrow.png'

export const Users = () => {

    return (<div className={styles.container}>

        <UserList />

        <button className={classNames('font_text', styles.btn_user_list)}>
            Показать еще
            <img className={styles.img} src={arrow} />
        </button>
    </div>
    )
}