import styles from './SignUp.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SignUpUserThunk } from '../../store/userAuth/actions'
import { getIsAuth } from '../../store/userAuth/selectors'
import Form from '../Form/Form'
import { useEffect } from 'react'

/** 
   * Компонент регистрации пользователя 
   */
export const SignUp = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useSelector(getIsAuth)

    /** 
  * Перенаправляет на MainPage при регистрации
  * @param {boolean} isAuth - статус регистрации
  */
    useEffect(() => {
        isAuth && navigate('/users')
    }, [isAuth])


    /** 
     * Проводит регистрацию пользователя
     * Передает в action параметры регистрируемого пользователя
     * @param {object} values - объект, с данными из формы регистрации
     */
    const handleUserSignUp = async (values) => {

        await dispatch(SignUpUserThunk(values.email, values.pass))
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <p className={styles.paragraph}>Регистрация</p>

                <Form onSubmit={handleUserSignUp} />

            </div>
        </div>
    )
}
