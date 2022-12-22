import { faker } from '@faker-js/faker';
import { TBook } from "../types";

export const loadBooks = new Promise<TBook[]>((resolve) =>
    setTimeout(() => {
        resolve(booksArr);
    }, 1000)
);






const booksArr: TBook[] = [];

function createRandomBook(): TBook {
    return {
        author: faker.name.fullName(),
        title: faker.company.catchPhrase(),
        description: faker.lorem.paragraph(),
        image: faker.image.image(400,620)
    };
}

Array.from({ length: 10 }).forEach(() => {
    booksArr.push(createRandomBook());
});

