import styles from '../SignUp/SignUp.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getIsAuth } from '../../store/userAuth/selectors'
import Form from '../Form/Form'
import { LoginUserThunk } from '../../store/userAuth/actions'
import { useEffect } from 'react'

/** 
   * Компонент авторизации пользователя 
   */
export const LogIn = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useSelector(getIsAuth)

    /** 
     * Перенаправляет на MainPage при авторизации
     * @param {boolean} isAuth - статус регистрации
     */
    useEffect(() => {
        isAuth && navigate('/users')
    }, [isAuth])


    /** 
     * Проводит авторизацию пользователя
     * Передает в action параметры регистрируемого пользователя
     * @param {object} values - объект, с данными из формы регистрации
     */
    const handleUserAuth = async (values) => {
        await dispatch(LoginUserThunk(values.email, values.pass))
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>

                <Form onSubmit={handleUserAuth} />

            </div>
        </div>
    )
}
