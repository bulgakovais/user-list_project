import styles from './MainHeaderText.module.css'
import classNames from 'classnames'


/** 
   * Компонент отображения текстовой части заголовка (Header) на странице MainPage
   */
export const MainHeaderText = () => {

    return (
        <div className={styles.header_text}>
            <p className={classNames('font_H1', styles.header_H1)}>Наша команда</p>
            <p className={classNames(styles.header_H2, 'font_H2')}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</p>
        </div>
    )
}