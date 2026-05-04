import { use } from "react";
import BookData from "./BookData";
export default function Books({booksPromise}){
    console.log(booksPromise);
    const books = use(booksPromise)
    return(

        <div className="shared">
            <h2>books:{books.length}</h2>
            {
                books.map(book=><BookData book={book}></BookData>)
            }
        </div>
    )
}