import { TBook } from "../types";

const baseUrl = 'http://localhost:3010';


// async function api<T>(url: string) {
//     const response = await fetch(`${baseUrl}/${url}`)
//         .then(res => res.json())
//         .catch(err => { throw err });
//     return response
// }
    


// export const loadBooks = api<TBook[]>("books");


export const loadBooks = () => fetch(`${baseUrl}/books`);