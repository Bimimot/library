import { TIconSvgName } from "../components/icons/SvgIcon";


const pages: HeaderPoint[] = [

    { link: "books", icon: "books", text: "Книги", fetch: "" },
    { link: "rules", icon: "about", text: "Правила и стоимость", fetch: "" },
    { link: "about", icon: "rules", text: "О проекте", fetch: "" }
];



export {
    pages
}


type HeaderPoint = {
    link: string,
    icon: TIconSvgName,
    text: string,
    fetch: string
}