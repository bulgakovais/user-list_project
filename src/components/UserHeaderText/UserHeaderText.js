import classNames from 'classnames'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserToId } from "../../store/user/actions";
import { selectUserToId } from "../../store/user/selectors";
import styles from './UserHeaderText.module.css'



/** 
   * Компонент отображения текстовой части заголовка (Header) на странице UserPage
   */
export const UserHeaderText = () => {

    const dispatch = useDispatch()
    const paramsId = useParams()
    const user = useSelector(selectUserToId)

    /** 
   * Осуществляет подгрузку нужного пользователя по id из параметров url 
   */
    useEffect(() => {
        if (paramsId.id) {
            dispatch(getUserToId(paramsId.id))
        };
    }, [])


    return (
        <div className={styles.container}>
            <div>
                <img className={styles.userImg} src={user.avatar} alt='foto' />
            </div>
            <div className={styles.containerParagraph}>
                <p className={classNames('font_H1', styles.text)}>{user.first_name} {user.last_name}</p>
                <p className={classNames(styles.fontSize, styles.text)}>Партнер</p>
            </div>
        </div>
    )
}