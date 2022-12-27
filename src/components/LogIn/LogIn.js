import styles from './LogIn.module.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginUserThunk } from '../../store/userAuth/actions'
import Form from '../Form/Form'


export const LogIn = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleUserAuth = async (values) => {

        console.log(values);
        // if (values.pass !== values.confirm) {

        //     return
        // }
        await dispatch(LoginUserThunk(values.email, values.pass))
        navigate('/users')
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
