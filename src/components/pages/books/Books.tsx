import { useEffect, useState } from "react";
import { BookCard } from "../../custom";

import { TBook } from "../../../types";
import { loadBooks } from "../../../helpers/mock-api";

export const Books = (props: any) => {
  const [books, setBooks] = useState<TBook[]>([]);

  useEffect(() => {
    loadBooks.then((res) => setBooks(res));
  }, []);
  return (
    <article className="books">
      <h1>BOOKS!</h1>
      {!!books.length
        ? books.map((book, i) => <BookCard key={i} book={book} />)
        : "Loading ..."}
    </article>
  );
};
