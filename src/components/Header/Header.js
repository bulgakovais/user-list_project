import styles from './Header.module.css'
import classNames from 'classnames'
import exit from '../../img/Vector.png'
import arrow_mini from '../../img/arrow_mini.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOutUserAction } from '../../store/userAuth/actions'


export const Header = ({ isTwoBtn, children }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const goReturn = (e) => {
        return navigate(-1)
    }

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
                    onClick={goReturn} />

                <div type='text' className={
                    classNames('font_text', styles.my_btn)}
                    onClick={goExit}
                >Выход  </div>


                <img className={styles.imgExit}
                    src={exit}
                    onClick={goExit} />

            </div>

            {children}

        </div>
    </div>
    )

}
