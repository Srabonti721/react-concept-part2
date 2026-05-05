import { use, useState } from "react"
import FetchUserData from "./FetchUserData";

export default function Fetch({UserPromise}){
    const users = use(UserPromise);
    console.log(users);
    try {
           return(
        <div className="shared">
            {
                users.map(user=><FetchUserData key={user.id} user={user}></FetchUserData>)
            }
        </div>
    ) 
    } catch (error) {
        alert("api fail")
    }

}