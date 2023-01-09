import styles from './LogIn.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginUserThunk } from '../../store/userAuth/actions'
import Form from '../Form/Form'
import { getIsAuth } from '../../store/userAuth/selectors'


export const LogIn = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useSelector(getIsAuth)

    const handleUserAuth = async (values) => {

        await dispatch(LoginUserThunk(values.email, values.pass))

        if (isAuth) { navigate('/users') }
    }


    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <p className='font_H2'>Регистрация</p>

                <Form onSubmit={handleUserAuth} />

            </div>
        </div>
    )
}
