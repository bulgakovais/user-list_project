import styles from './LogIn.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginUserThunk } from '../../store/userAuth/actions'
import { getIsAuth } from '../../store/userAuth/selectors'
import Form from '../Form/Form'

/** 
   * Компонент авторизации пользователя 
   */
export const LogIn = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useSelector(getIsAuth)

    /** 
     * Проводит авторизацию пользователя
     * Передает в action параметры регистрируемого пользователя
     * После регистрации осуществляет переход на страницу пользователей
     * @param {object} values - объект, с данными из формы регистрации
     * @param {boolean} isAuth - статус регистрации
     */
    const handleUserAuth = async (values) => {

        await dispatch(LoginUserThunk(values.email, values.pass))

        if (isAuth) { navigate('/users') }
    }


    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <p className={styles.paragraph}>Регистрация</p>

                <Form onSubmit={handleUserAuth} />

            </div>
        </div>
    )
}
