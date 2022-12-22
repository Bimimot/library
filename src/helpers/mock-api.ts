import { TBook } from "../types";

export const loadBooks = new Promise<TBook[]>((resolve) =>
    setTimeout(() => {
        resolve(booksArr);
    }, 1000)
);

const booksArr = [
    { title: "Aaaaaaaaaaaaaaa и его невероятные приключения на невиданной планете", description: "Aaaaaaaaaaaaaaa и его невероятные приключения на невиданной планете", author: "Potap Nepsov-Краль Стефан Первый" },
    { title: "Comics", description: "CCCCCCCCcccccc", author: "Амбросий Иванович Крузенштерн" },
];
