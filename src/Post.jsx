import { use } from 'react'
import PostData from './PostData'
import'./App.css'
export default function Post({postPromise}){
    const posts = use(postPromise)
     console.log(posts);
    return(
        <div className='post'>
            <h2>post :{posts.length}</h2>
            {
                posts.map(post=><PostData key={post.id} post={post}></PostData>)
            }
        </div>
    )
}