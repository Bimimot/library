export const BookCard = (props: any) => {
  const { title, description } = props.book;

  return (
    <div className="book">
      <h4 className="book__title"> {title}</h4>
      <p className="book__desc">{description}</p>
    </div>
  );
};
