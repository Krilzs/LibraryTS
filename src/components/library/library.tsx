import styles from "./library.module.css";
import Data from "../../data/books.json";
import Book from "../book/Book";

interface libraryProps {
  addBookToML: (newId: string) => void;
  handleLibros: (newLibros: BookType[]) => void;
  filters: { pages: number; genre: string };
}

interface Author {
  name: string;
  otherBooks: string[];
}

export interface BookType {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

interface LibraryItem {
  book: BookType;
}

interface LibraryData {
  library: LibraryItem[];
}

const libraryData: LibraryData = Data;

const libros: BookType[] = libraryData.library.map((item) => item.book);

const library: React.FC<libraryProps> = ({
  handleLibros,
  addBookToML,
  filters,
}) => {
  let filteredBooks;

  if (filters.genre)
    filteredBooks = libros.filter(
      (book: BookType) =>
        book.pages <= filters.pages && book.genre == filters.genre
    );
  else
    filteredBooks = libros.filter(
      (book: BookType) => book.pages <= filters.pages
    );

  handleLibros(libros);
  return (
    <div className={styles.library}>
      {filteredBooks.map((book) => (
        <Book
          addBookToML={addBookToML}
          title={book.title}
          cover={book.cover}
          synopsis={book.synopsis}
          id={book.ISBN}
        />
      ))}
    </div>
  );
};

export default library;
