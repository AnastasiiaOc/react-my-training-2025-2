
import css from '../HomePageList/HomePageList.module.css'

export default function HomePageList({users}){

    return (
            <ul className={css.list}>
       {users.map((user) => (<li key ={user.id}>
        <h3 className={css.username}>
                        {user.firstName} {user.lastName}
                    </h3>
                    <p className={css.text}>{user.email}</p>
                    <p className={css.text}>{user.phone}</p>

</li>)
   )} 

            </ul>
    )
}