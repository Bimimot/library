import { ProgressiveImg } from "../";

export const BookCard = (props: any) => {
  const { title, author, image } = props.book;

  return (
    <div className="book">
      {/* <img
        className="book__image book__image_gradient_on"
        src={image}
        alt="cover"
      /> */}      
      <ProgressiveImg src={image} className="book__image"/>
      <h5 className="book__text">{author}</h5>
      <h4 className="book__text book__text_weight_bold"> {title}</h4>
      <button className="button book__button">Отложить</button>
    </div>
  );
};
