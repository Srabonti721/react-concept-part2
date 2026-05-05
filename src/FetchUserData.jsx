export default function FetchUserData ({user}) {
    // const {name, address.city, } = user
    return(
        <div className="post">
            <h3> Name :{user.name}</h3>
            <h2>Company :{user.company.name}</h2>
            <p> Address{user.address.city}</p>
        </div>
    )
}