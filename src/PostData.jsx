export default function PostData ({post}){
    const {title, body} = post
    return(
        <div className="post">
            <h3>Title:{title}</h3>
            <p>{body}</p>
        </div>
    )
}