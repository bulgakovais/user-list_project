import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../store/users/actions';
import { selectUsers } from '../../store/users/selectors';
import styles from './UserCard.module.css'
import { getLikesFromLocatStorage, setLikeFromLocalStorage } from '../../utils/localStorageHelper';


export const UserCard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(selectUsers)
    const [likesUser, setLikesUser] = useState([])

    useEffect(() => {
        dispatch(getUsers())
        setLikesUser(getLikesFromLocatStorage())
    }, [])


    /** 
       * Вызывает функцию,записывающую лайк в localStorage 
       * Вызывает ф-ю для изменения отображения лайка (toggleLikes)
       * @param {object} event - событие click
       * @param {string} userId - id пользователя, на котором произошло событие click
       * @param {object} likes - все объкеты лайков в  localStorage
       */
    const clickLikesHandler = (userId, event) => {
        const likes = getLikesFromLocatStorage()
        const targetHeartElement = event.target

        setLikeFromLocalStorage(userId, likes)

        toggleLikes(likes, targetHeartElement, userId)

    }

    /** 
      * Изменяет значок лайка на карточке пользователя на противоположный
      * Обновляет localStorage
      * @param {object} targetHeartElement - объект, на котором произошло событие click
      * @param {string} userId - id пользователя, на котором произошло событие click
      * @param {object} likes - все объкеты лайков в  localStorage
      */
    const toggleLikes = (likes, targetHeartElement, userId) => {

        if (targetHeartElement.classList.contains('fa-heart')) {
            targetHeartElement.classList.remove('fa-heart')
            targetHeartElement.classList.add('fa-heart-o')

            if (Array.isArray(likes)) {
                const updateLikes = likes.filter((like) => like.id !== userId)
                localStorage.setItem('likes', JSON.stringify(updateLikes))
            }
        } else {
            targetHeartElement.classList.remove('fa-heart-o')
            targetHeartElement.classList.add('fa-heart')
        }
    }



    return (<>
        { users?.map((user) => {
            return (<div
                key={user.id}
                className={styles.container}
            >
                <div onClick={() => { navigate(`/users/${user.id}`) }}>
                    <img className={styles.avatar} src={user.avatar}></img>
                    <p className={styles.user_name}>{user.first_name} {user.last_name}</p>

                </div>
                <div className={styles.heartContainer}>
                    <div className={styles.heartBorder}>
                        {likesUser.find(el => el.id === user.id) ?
                            <i className="fa fa-heart" aria-hidden="true"
                                onClick={(event) => clickLikesHandler(user.id, event)}>
                            </i> :
                            <i className="fa fa-heart-o" aria-hidden="true"
                                onClick={(event) => clickLikesHandler(user.id, event)}>
                            </i>}

                    </div>
                </div>
            </div>
            )
        })
        }
    </>
    )
}