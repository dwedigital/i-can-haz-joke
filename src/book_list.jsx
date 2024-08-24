import { useEffect, useState } from "react";
import { bookList } from "./pocketbase";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookList(setBooks);
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books &&
          books.map((book) => (
            <li key={book.id}>
              {book.title} - {book.expand.author[0].name}
            </li>
          ))}
      </ul>
    </div>
  );
}
