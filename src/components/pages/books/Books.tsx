import { useEffect, useState } from "react";
import { BookCard } from "../../custom";

export const Books = (props: any) => {
  const [books, setBooks] = useState<TBook[]>([]);

  useEffect(() => {
    loadBooks.then((res) => setBooks(res));
  }, []);
  return (
    <>
      <h1>BOOKS!</h1>
      {!!books.length
        ? books.map((book, i) => <BookCard key={i} book={book} />)
        : "Loading ..."}
    </>
  );
};

const booksArr = [
  { title: "BIBLE", description: "Aaaaaaaaaaaaaaa" },
  { title: "Comics", description: "CCCCCCCCcccccc" },
];

const loadBooks = new Promise<TBook[]>((resolve) =>
  setTimeout(() => {
    resolve(booksArr);
  }, 2000)
);

type TBook = {
    title: string,
    description: string
}
