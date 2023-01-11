import { Field, reduxForm } from 'redux-form'
import { required, verifyConfirmationPass, verifyEmail } from '../../utils/validators'
import { InputForm } from '../index'
import styles from './Form.module.css'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Form = (props) => {
    const { handleSubmit } = props
    const [location, setLocation] = useState(true)

    const loc = useLocation()

    useEffect(() => {
        if (loc.pathname) {
            loc.pathname === '/auth' && setLocation(false)
        }
    }, [])

    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            {location && <div className={styles.form_item}>
                <label className='font_text' htmlFor='name'>Имя</label>
                <Field
                    name='name'
                    type='text'
                    component={InputForm}
                    placeholder='Артур'
                    validate={required}
                />

            </div>}

            <div className={styles.form_item}>
                <label className='font_text' htmlFor='email'>Электронная почта</label>
                <Field
                    name='email'
                    type='email'
                    component={InputForm}
                    placeholder='eve.holt@reqres.in'
                    validate={[required, verifyEmail]}
                />
            </div>

            <div className={styles.form_item}>
                <label className='font_text' htmlFor='pass'>Пароль</label>
                <Field
                    name='pass'
                    component={InputForm}
                    validate={required}
                    type='password'
                />

            </div>

            { location && <div className={styles.form_item}>
                <label className='font_text' htmlFor='confirm'>Подтвердите пароль</label>
                <Field
                    name='confirm'
                    component={InputForm}
                    type='password'
                    validate={[required, verifyConfirmationPass]}
                />

            </div>}

            <button className={classNames(styles.form_item, styles.form_btn, 'font_text')}
                type="submit"> {location ? <span>Зарегистрироваться</span> : <span>Войти</span>}
            </button>

            {location ? <Link className={styles.link} to='auth'>Уже имеется аккаунт?</Link> :
                <Link className={styles.link} to='..'>Хотите зарегистрироваться?</Link>}

        </form>
    )
}


export default reduxForm({
    form: 'login'
})(Form)