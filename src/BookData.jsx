export default function BookData({book}){
    const {name, email, phone} = book
    return(
        <div className="shared">
            <h3>name:{name}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>
    )

}