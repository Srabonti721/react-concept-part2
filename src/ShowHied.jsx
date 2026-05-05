import { useState } from "react"

export default function ShowHide() {
    const [user, setUser] = useState(false)
    const handleShowHide = () => {
        setUser(!user)
    }
    return (
        <div>
            <h2>{user}</h2>
            <button onClick={handleShowHide}>{user ? "hide" : "show data"}</button>
            {
                user && <h2>Hello, React Learner!</h2>
            }
        </div>
    )
}
// export default function LoginLogout(){
//     const [login, setLogin] = useState(false)
//     const handleLogin = () =>{
//         setLogin(!login)
//     }
//     return(
//         <div>
//             <h2>{login}</h2>
//             <button onClick={handleLogin}>{login?"logout":"login"}</button>
//             {
//               login && <h2>Hello, React Learner!</h2>
//             }
//         </div>
//     )
// }

// export default function ShowHide() {
//     const [user, setUser] = useState('');
//     const handleShow = () =>{
//         const userData = "Hello, react learning";
//         setUser (userData)
//     }
//     const handleHide = () =>{
//         setUser('')
//     }
// return(
// <div>
//     <h1>{user}</h1>
//       <button onClick={handleShow}>show data</button>
//   <button style={{ margin: 8 }} onClick={handleHide}>hide</button>
// </div>
// )
// }