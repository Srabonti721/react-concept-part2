import { use } from "react"

export default function Friends({friendsPromise}){
    const friend = use(friendsPromise)
    console.log(friend);
    
    return(
        <div className="friends">
            <h3>Friends : {friend.length}</h3>
        </div>
    )
}