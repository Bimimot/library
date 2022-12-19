export const BookCard = (props: any) => {
  const { title, description } = props.book;

  return (
    <div className="book-card">
      <h4 className="book-card__title"> {title}</h4>
      <p className="book-card__desc">{description}</p>
    </div>
  );
};
