import { TBook } from "../types";

export const loadBooks = new Promise<TBook[]>((resolve) =>
    setTimeout(() => {
        resolve(booksArr);
    }, 2000)
);

const booksArr = [
    { title: "BIBLE", description: "Aaaaaaaaaaaaaaa" },
    { title: "Comics", description: "CCCCCCCCcccccc" },
];
