import styles from "./ReadList.module.css";
import { BookType } from "../library/library";
import Book from "../book/Book";
interface ReadListProps {
  removeMyList: (id: string) => void;
  myList: string[];
  libros: BookType[];
}

const ReadList: React.FC<ReadListProps> = ({
  myList,
  libros,
  removeMyList,
}) => {
  const filteredList = libros.filter((book: BookType) =>
    myList.includes(book.ISBN)
  );

  console.log(filteredList);
  return (
    <>
      <article className={styles.readList}>
        <h3>My ReadList</h3>

        <div className={styles.myListContainer}>
          {filteredList.map((book) => {
            return (
              <>
                <Book
                  title={book.title}
                  cover={book.cover}
                  synopsis={book.synopsis}
                  id={book.ISBN}
                  removeMyList={removeMyList}
                />
              </>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default ReadList;
