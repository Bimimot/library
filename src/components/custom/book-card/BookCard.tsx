export const BookCard = (props: any) => {
  const { title, author } = props.book;

  return (
    <div className="book">
      <img
        className="book__image"
        src="https://static.insales-cdn.com/images/products/1/6730/629111370/large_лучшая.jpg"
        alt="title"
      />
      <h5 className="book__text">{author}</h5>
      <h4 className="book__text book__text_weight_bold"> {title}</h4>
      <button className="button book__button">Отложить</button>
    </div>
  );
};
