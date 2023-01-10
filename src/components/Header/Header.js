import styles from './Header.module.css'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOutUserAction } from '../../store/userAuth/actions'
import exit from '../../img/Vector.png'
import arrow_mini from '../../img/arrow_mini.png'


/** 
* Осуществляет рендер Header сайта
* @param {boolean} isTwoBtn - наличие/отсутствие двух кнопок в заголовке
* @param {object} children - объект, содержащий реакт-компонент 
*/
export const Header = ({ isTwoBtn, children }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    /** 
    * Осуществляет переход назад
    */
    const goReturn = () => {
        return navigate(-1)
    }

    /** 
    * Выходит из зарегистрированного аккаунта
    * Удаляет токен пользователя из LocalStorage
    * Осуществляет переход на страницу регистрации
    */
    const goExit = () => {
        dispatch(logOutUserAction)
        localStorage.removeItem('token')
        return navigate('/')
    }

    return (<div className={styles.container}>
        <div className={styles.main_header}>
            <div className={isTwoBtn ? styles.btns_container : styles.btn_container}>

                <div className={
                    classNames('font_text', isTwoBtn ? styles.my_btn : styles.displayNone)}
                    onClick={goReturn}
                >Назад </div>


                <img className={
                    isTwoBtn ? styles.imgArr : styles.displayNone}
                    src={arrow_mini}
                    alt='arrow'
                    onClick={goReturn} />

                <div type='text' className={
                    classNames('font_text', styles.my_btn)}
                    onClick={goExit}
                >Выход  </div>


                <img className={styles.imgExit}
                    src={exit}
                    alt='exit'
                    onClick={goExit} />

            </div>

            {children}

        </div>
    </div>
    )

}
