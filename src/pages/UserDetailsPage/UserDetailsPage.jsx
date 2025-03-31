import { useParams } from "react-router"

export default function UserDetailsPage (){
 const params = useParams()
 console.log (params)
    return (
        <div> User details Page is made with help of UseParams hook</div>
    )
}