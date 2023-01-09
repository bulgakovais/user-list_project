import { UserCard } from "../UserCard/UserCard"
import style from './UserList.module.css'


export const UserList = () => {

    return (
        <div className={style.container}>
            <UserCard></UserCard>
        </div>
    )
}