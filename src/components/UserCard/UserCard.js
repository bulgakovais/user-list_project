import { useEffect } from 'react';
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

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    const clickLikesHandler = (userId, event) => {
        const likes = getLikesFromLocatStorage()
        const targetHeartElement = event.target

        setLikeFromLocalStorage(userId, likes)

        toggleLikes(likes, targetHeartElement, userId)

    }

    const toggleLikes = (likes, targetHeartElement, userId) => {
        console.log('targetHeartElement: ', targetHeartElement);

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

                        <i className="fa fa-heart-o" aria-hidden="true"
                            onClick={(event) => clickLikesHandler(user.id, event)}>
                        </i>

                    </div>
                </div>
            </div>
            )
        })
        }
    </>
    )
}