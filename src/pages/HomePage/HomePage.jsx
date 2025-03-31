import { useState, useEffect } from "react"
import { fetchUsers } from "../../../api"
import HomePageList from "../../components/HomePageList/HomePageList";
import css from "../HomePage/HomePage.module.css"

export default function HomePage (){

    const [users, setUsers] = useState([])
    useEffect (() =>{
        async function getUsers(){

            try{   
                const data = await fetchUsers();
                setUsers(data)
}
catch{
    console.log("error")
}

        
        }
        getUsers()
    }, [])


    return (
        <div>
            <h2 className ={css.text}> renders the contents of the page home</h2>
            <p className ={css.text}>Компоненти які ми записуємо в Routes не отримують ніяких пропсів і їх не треба дистриктиризувати.Route описує на який компонент яку сторінку рендерити</p>
           {users.length > 0 && <HomePageList users ={users}/>} 
        </div>
    )

}