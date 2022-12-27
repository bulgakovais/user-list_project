
import { Field, reduxForm } from 'redux-form'
import { required, verifyConfirmationPass, verifyEmail } from '../../utils/validators'
import { InputForm } from '../InputForm/InputForm'
import styles from './Form.module.css'
import classNames from 'classnames'

const Form = (props) => {
    const { handleSubmit } = props


    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.form_item}>
                <label className='font_text' htmlFor='name'>Имя</label>
                <Field
                    name='name'
                    type='text'
                    component={InputForm}
                    placeholder='Артур'
                    validate={required}
                />

            </div>

            <div className={styles.form_item}>
                <label className='font_text' htmlFor='email'>Электронная почта</label>
                <Field
                    name='email'
                    type='email'
                    component={InputForm}
                    placeholder='example@mail.ru'
                    validate={[required, verifyEmail]}
                />
            </div>

            <div className={styles.form_item}>
                <label className='font_text' htmlFor='pass'>Пароль</label>
                <Field className={classNames(styles.form_input, styles.form_pass)}
                    name='pass'
                    component={InputForm}
                    validate={required}
                    type='password'
                />

            </div>

            <div className={styles.form_item}>
                <label className='font_text' htmlFor='confirm'>Подтвердите пароль</label>
                <Field className={classNames(styles.form_input, styles.form_pass)}
                    name='confirm'
                    component={InputForm}
                    type='password'
                    validate={[required, verifyConfirmationPass]}
                />

            </div>

            <button className={classNames(styles.form_item, styles.form_btn, 'font_text')}
                type="submit">Зарегистрироваться
                    </button>

        </form>
    )
}


export default reduxForm({
    form: 'login'
})(Form)