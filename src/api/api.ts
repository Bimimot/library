import { TBook } from "../types";

const baseUrl = 'http://localhost:3010';


function api<T>(url: string): Promise<T> {
    return fetch(`${baseUrl}/${url}`)
        .then(response => response.ok
            ? response.json() as Promise<T>
            : Promise.reject(response.statusText))
}


export const loadBooks = api<TBook[]>("books");
