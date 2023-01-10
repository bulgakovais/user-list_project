import styles from './InputForm.module.css'
import classNames from 'classnames'


export const InputForm = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error
    return (
        <>
            <input {...input} {...props}
                className={classNames(
                    styles.form_input,
                    props.type === 'password' && styles.form_pass,
                    hasError ? styles.input_border_err : styles.input_border)} />
            { hasError && <span className='font_err'>Ошибка</span>}
        </>
    )
}