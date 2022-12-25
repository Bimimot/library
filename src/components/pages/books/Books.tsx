import { useEffect, useState } from "react";
import { useDispatch, useSelector } from '../../../store/types/hook-types';
import { getBooks } from "../../../store/reducers/books/books";
import { BookCard } from "../../custom";

import { TBook } from "../../../types";
import { loadBooks } from "../../../api/api";

export const Books = (props: any) => {
  const dispatch = useDispatch();
  const { items, isLoaded, isLoading, isError } = useSelector((state) => state.books);

  // useEffect(() => {
  //   loadBooks
  //     .then(res => setBooks(res))
  //     .catch(err => console.log(err));
  // }, []);

  useEffect(() => {
    dispatch(getBooks())
  }, []);

  return (
    <article className="books">
      {items.map((book, i) => <BookCard key={i} book={book} />)}
      {isLoading && "Loading..."}
      {isLoaded && !items.length && "Not found"}
    </article>
  );
};
