import { useEffect, useState } from "react";
import { useDispatch, useSelector } from '../../store/types/hook-types';
import { getBooks } from "../../store/reducers/books/books";
import { BookCard, Loader } from "../../components/index";

export const Books = (props: any) => {
  const dispatch = useDispatch();
  const { items, isLoaded, isLoading, isError } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks())
  }, []);

  return (
    <article className="books">
      {items.map((book, i) => (
        <BookCard key={i} book={book} />
      ))}
      {isLoading && <Loader />}
      {isLoaded && !items.length && "Not found such books, try another"}
    </article>
  );
};
