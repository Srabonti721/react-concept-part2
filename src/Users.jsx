import { use } from "react"

export default function Users ({fetchUser}){
    const user = use(fetchUser)
    console.log(user);
    
   const userCardStyle = {
        border:"2px solid orange",
        margin:"10px", 
        padding:"5px",
        borderRadius:"10px"
    }

return(
    <div style={userCardStyle}>
        <h2>user:{user.length}</h2>
    </div>
)
}