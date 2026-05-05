import { useEffect, useState } from "react"

export default function Phones(){

    const [phones, setPhones] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res=>res.json())
        .then(data=>setPhones(data))
    },[])
    return (
        <div className="post">
            <h2>phone:{phones.length}</h2>
            <ol >
                {
                    phones.map(phone=><li className="shared">{phone.title}</li>)
                }
            </ol>
        </div>
    )
}