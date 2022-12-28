
import styles from './MyButton.module.css'
import classNames from 'classnames'

export const MyButton = (props) => {

    console.log(props);

    return (
        <button className={classNames('font_text', styles.btn)}>{props.props}</button>
    )
}