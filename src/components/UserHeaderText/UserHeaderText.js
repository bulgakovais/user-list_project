import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserToId } from "../../store/user/actions";
import { selectUserToId } from "../../store/user/selectors";
import styles from './UserHeaderText.module.css'
import classNames from 'classnames'

export const UserHeaderText = () => {

    const dispatch = useDispatch()
    const paramsId = useParams()

    const user = useSelector(selectUserToId)

    useEffect(() => {
        dispatch(getUserToId(paramsId.id));
    }, [])


    return (
        <div className={styles.container}>
            <div>
                <img className={styles.userImg} src={user.avatar} />
            </div>
            <div className={styles.containerParagraph}>
                <p className={classNames('font_H1', styles.text)}>{user.first_name} {user.last_name}</p>
                <p className={classNames(styles.fontSize, styles.text)}>Партнер</p>
            </div>
        </div>
    )
}